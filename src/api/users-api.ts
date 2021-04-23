import { GetItemsType, instance, ResponseType } from './api'

export const usersAPI = {
  getUsers(currentPage: number, pageSize: number) {
    return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    })
  },

  follow(userId: number) {
    return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data);
  },
  unfollow(userId: number) {
    return instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data);
  },
}