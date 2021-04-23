import { instance, ResponseType } from './api'
import { PhotosType, ProfileType } from '../types/types';


type SavePhotoResponseDataType = {
  photos: PhotosType
}


export const profileAPI = {
  getProfile(userId: number) {
    return instance.get<ProfileType>(`profile/${userId}`).then(res => res.data);
  },
  getStatus(userId: number) {
    return instance.get<string>(`profile/status/` + userId).then(res => res.data);
  },
  updateStatus(status: string) {
    return instance.put<ResponseType>(`profile/status`, { status }).then(res => res.data);
  },
  savePhoto(photoFile: File) {
    let formData = new FormData();
    formData.append("image", photoFile);


    return instance.put<ResponseType<SavePhotoResponseDataType>>(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(res => res.data)
  },



  saveProfile(profile: ProfileType) {
    return instance.put<ResponseType>(`profile`, profile).then(res => res.data);
  }
}