import axios from 'axios';
import { UserType } from '../types/types';


export const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '93cc3dca-64c8-4757-b260-26eddbd4c9d7'
  }
})

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodeForCaptchaEnum {
  CaptchaIsRequired = 10
}

export type ResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D,
  messages: Array<string>
  resultCode: RC
}

export type GetItemsType = {
  items: Array<UserType>
  totalCount: number
  error: string | null
}

