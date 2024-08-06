import { APIResponse } from "./type"
import { postRequest } from "./api"

interface FollowAddParams {
  following_id: string
  follower_id: string
}

export const follow = async (params: FollowAddParams) => {
  try {
    const res = await postRequest<APIResponse<String>, FollowAddParams>("/follow/follow", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const unFollow = async (params: FollowAddParams) => {
  try {
    const res = await postRequest<APIResponse<String>>("/follow/unfollow", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const checkFollow = async (params: FollowAddParams) => {
  try {
    const res = await postRequest<APIResponse<boolean>>("/follow/check", params)
    return res.data
  } catch (error) {
    console.error(error)
  }
}