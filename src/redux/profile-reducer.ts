import { FormAction, stopSubmit } from "redux-form";
import { profileAPI } from "../api/profile-api";
import { PhotosType, PostType, ProfileType } from "../types/types";
import { BaseThunkType, InferActionsTypes } from "./redux-store";


let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likeCount: 12 },
    { id: 2, message: 'It\'s my first post', likeCount: 8 },
  ] as Array<PostType>,

  profile: null as ProfileType | null,
  status: '',
}

export type InitialStateType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsType | FormAction>

const profileReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'profile/ADD-POST': {
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: action.newPostText, likeCount: 0}],
      }
    }
    case 'profile/SET_USER_PROFILE':
      return {
        ...state,
        profile: action.profile
      }
    case 'profile/SET_STATUS':
      return {
        ...state,
        status: action.status
      }
    case 'profile/DELETE_STATUS':
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    case 'profile/SAVE_PHOTO_SUCCESS':
      return {
        ...state,
        profile: {
          ...state.profile, 
          photos: action.photos
        } as ProfileType
      }
    default:
      return state;
  }
}


export const actions = {
  addPostActionCreator: (newPostText: string) => ({ type: 'profile/ADD-POST', newPostText } as const),
  setUserProfile: (profile: ProfileType) => ({ type: 'profile/SET_USER_PROFILE', profile} as const),
  setStatus: (status: string) => ({ type: 'profile/SET_STATUS', status } as const),
  deletePost: (postId: number) => ({ type: 'profile/DELETE_STATUS', postId } as const),
  savePhotoSuccess: (photos: PhotosType) => ({ type: 'profile/SAVE_PHOTO_SUCCESS', photos } as const),
}


export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
  let data = await profileAPI.getProfile(userId)
  dispatch(actions.setUserProfile(data));

}

export const getStatus = (userId: number):ThunkType => async (dispatch) => {
  let data = await profileAPI.getStatus(userId)
  dispatch(actions.setStatus(data));

}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let data  = await profileAPI.updateStatus(status)
    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
  }

}

export const savePhoto = (file: File): ThunkType => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);

  if (data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(data.data.photos))
  }
}

export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
  const userId = getState().authPage.userId;
  const data = await profileAPI.saveProfile(profile);

  if (data.resultCode === 0) {
    if (userId != null) {
      dispatch(getUserProfile(userId));
    }
    
  }
  else {
    dispatch(stopSubmit("edit-profile", {_error: data.messages[0]}));
    return Promise.reject(data.messages[0]);
  }
}

export default profileReducer;