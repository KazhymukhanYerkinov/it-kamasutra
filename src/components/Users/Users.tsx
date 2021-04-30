
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Paginator from '../../common/Paginator/Paginator';
import { FilterType, follow, getUsersThunkCreator, unfollow } from '../../redux/users-reducer';
import { getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter } from '../../redux/users-selectors';
import User from './User';
import UsersSearchForm from './UsersSearchForm';
import * as queryString from 'querystring';



type PropsTypes = {

}


type QueryParamsType = { term?: string; page?: string; friend?: string }
const Users: React.FC<PropsTypes> = (props) =>  {

    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)
    const followingInProgress = useSelector(getFollowingInProgress)

    const dispatch = useDispatch();
    const history = useHistory();
    

    React.useEffect(() => {
      const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType;

      let actualPage = currentPage
      let actualFilter = filter

      if (!!parsed.page) actualPage = Number(parsed.page)
      if (!!parsed.term) actualFilter = {...actualFilter, term: parsed.term as string}
      
      switch (parsed.friend) {
        case "null":
          actualFilter = {...actualFilter, friend: null}
          break;
        case "true":
          actualFilter = {...actualFilter, friend: true}
          break;
        case "false":
          actualFilter = {...actualFilter, friend: false}
          break;
      }

      dispatch(getUsersThunkCreator(actualPage, pageSize, actualFilter))
    }, [])

    React.useEffect(() => {
      const query: QueryParamsType = {}

      if (!!filter.term) query.term = filter.term
      if (filter.friend !== null) query.friend = String(filter.friend)
      if (currentPage !== 1) query.page = String(currentPage)

      history.push({
        pathname: '/users',
        search: queryString.stringify(query)
      })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
      dispatch(getUsersThunkCreator(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
      dispatch(getUsersThunkCreator(currentPage, pageSize, filter))
    }
    const onFollow = (userId: number) => {
      dispatch(follow(userId))
    }
    const onUnfollow = (userId: number) => {
      dispatch(unfollow(userId))
    }

    return (
      <div>
        <UsersSearchForm 
          onFilterChanged = { onFilterChanged }
        />

        <Paginator
          pageSize = { pageSize }
          totalUsersCount = { totalUsersCount }
          currentPage = { currentPage }
          onPageChanged = { onPageChanged }
          portionSize = { 10 }
        />
        {
          users.map((user, index) => (
            <User
              key = { index }
              user = { user }
              followingInProgress = { followingInProgress }
              unfollow = { onUnfollow }
              follow = { onFollow }
            />
          ))
        }
      </div>
    )
}



export default Users;