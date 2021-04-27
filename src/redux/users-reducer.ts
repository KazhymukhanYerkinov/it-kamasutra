import { Dispatch } from "redux";
import { ResponseType } from "../api/api";
import { usersAPI } from "../api/users-api";
import { UserType } from '../types/types';
import { updateObjectInArray } from "../utils/object-helpers";
import { BaseThunkType, InferActionsTypes } from "./redux-store";


let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: true,

  followingInProgress: [] as Array<number>,
}

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType =  BaseThunkType<ActionsTypes>

const usersReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'users/SET_USERS':
      return {
        ...state,
        users: action.users
      }

    case 'users/FOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
      };

    case 'users/UNFOLLOW':
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
      } 
    case 'users/SET_CURRENT_PAGE':
      return {
        ...state,
        currentPage: action.currentPage
      }
    case 'users/SET_TOTAL_USERS_COUNT':
      return {
        ...state,
        totalUsersCount: action.totalCount
      }
    case 'users/TOGGLE_IS_FETCHING':
      return {
        ...state,
        isFetching: action.isFetching
      }

    case 'users/TOGGLE_IS_FOLLOWING_PROGRESS':
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    default:
      return state;
  }
}




export const actions = {
  followSuccess: (userId: number) => ({ type: 'users/FOLLOW', userId } as const),
  unfollowSuccess: (userId: number) => ({ type: 'users/UNFOLLOW', userId } as const),
  setUsers: (users: Array<UserType>) => ({ type: 'users/SET_USERS', users } as const),
  setCurrentPage: (currentPage: number) => ({ type: 'users/SET_CURRENT_PAGE', currentPage } as const),
  setTotalUsersCount: (totalCount: number) => ({ type: 'users/SET_TOTAL_USERS_COUNT', totalCount } as const),
  toggleIsFetching: (isFetching: boolean) => ({ type: 'users/TOGGLE_IS_FETCHING', isFetching } as const),
  toggleFollowingProgress: (isFetching: boolean, userId: number) => ({ type: 'users/TOGGLE_IS_FOLLOWING_PROGRESS', isFetching, userId } as const),

}





export const getUsersThunkCreator = (currentPage: number, pageSize: number): ThunkType  => async (dispatch) => {
  dispatch(actions.toggleIsFetching(true));
  dispatch(actions.setCurrentPage(currentPage));
  let data = await usersAPI.getUsers(currentPage, pageSize)
  dispatch(actions.toggleIsFetching(false));
  dispatch(actions.setUsers(data.items));
  dispatch(actions.setTotalUsersCount(data.totalCount));
}



const _followUnfollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<ResponseType>, actionCreator: (userId: number) => ActionsTypes) => {
  dispatch(actions.toggleFollowingProgress(true, userId));
  let data = await apiMethod(userId);

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  
  dispatch(actions.toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess);
}
  

export const unfollow = (userId: number): ThunkType => async (dispatch) => {
  await _followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess);  
}

export default usersReducer;