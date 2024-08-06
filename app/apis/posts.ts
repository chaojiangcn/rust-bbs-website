import { APIResponse } from "./type"
import { getRequest, postRequest } from "./api"

export interface LikeAddParams {
  
}

export const get_post_detail = async (id:string) => {
  try {
    const res = await getRequest<APIResponse<String>, LikeAddParams>(`/post/detail/${id}`, {})
    return res.data
  } catch (err) {
    console.error(err)
  }
}