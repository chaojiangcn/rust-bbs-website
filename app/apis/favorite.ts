import { APIResponse } from "./type"
import { postRequest } from "./api"

export interface LikeAddParams {
  post_id: number
  user_id: number
}

export const favorite = async (params: LikeAddParams) => {
  try {
    const res = await postRequest<APIResponse<String>, LikeAddParams>("/favorite/favorite", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const unFavorite= async (params: LikeAddParams) => {
  try {
    const res = await postRequest<APIResponse<String>>("/favorite/un_favorite", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const checkFavorite= async (params: LikeAddParams) => {
  try {
    const res = await postRequest<APIResponse<boolean>>("/favorite/check", params)
    return res.data
  } catch (error) {
    console.error(error)
  }
}