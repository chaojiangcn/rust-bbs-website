import { APIResponse } from "./type"
import { postRequest } from "./api"

export interface LikeAddParams {
  post_id: number
  user_id: number
}

export const like = async (params: LikeAddParams) => {
  try {
    const res = await postRequest<APIResponse<String>, LikeAddParams>("/like/like", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const unLike= async (params: LikeAddParams) => {
  try {
    const res = await postRequest<APIResponse<String>>("/like/unlike", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const checkFollow = async (params: LikeAddParams) => {
  try {
    const res = await postRequest<APIResponse<boolean>>("/follow/check", params)
    return res.data
  } catch (error) {
    console.error(error)
  }
}