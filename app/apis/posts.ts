import { APIResponse } from "./type"
import { getRequest, postRequest } from "./api"
import { PostItemProps } from "@/components/posts/PostItem"

export interface LikeAddParams {

}

export interface ListParams {
  uid: number,
  page: number,
  size: number
}

export interface AddPostParams {
  title: string,
  author_id: number,
  content: string,
  tag_id: number,
  cover: string
}

export const get_post_detail = async (id: string) => {
  try {
    const res = await getRequest<APIResponse<String>, LikeAddParams>(`/post/detail/${id}`, {})
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const get_post_list_with_uid = async (params: ListParams) => {
  try {
    const res = await getRequest<APIResponse<{list: PostItemProps[]}>, ListParams>(`/post/list_this_uid`, params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const add_post = async (params: AddPostParams) => {
  try {
    const res = await postRequest<APIResponse<String>, AddPostParams>(`/post/add`, params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}