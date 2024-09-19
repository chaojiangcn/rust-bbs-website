"use server"
import { APIResponse } from "./type"
import { deleteRequest, getRequest, postRequest } from "./api"

export interface AddParams {
  post_id: number
  user_id: number
  parent_comment_id?: number
  content: string
}
export interface GetListParams {
  post_id: number;
  parent_comment_id?: number;
  page: number;
  size: number;
}

export interface CommentItem {
  id: number,
  user_id: number,
  post_id: number,
  parent_comment_id: number,
  content: String,
  created_at: string,
  is_deleted: number,
  user_info?: {
    user_id: number,
    nickname: string,
    avatar: string
  }
}

export const getCommentList = async (params: GetListParams) => {
  try {
    const res = await getRequest<APIResponse<{ list: CommentItem[], total: number }>, GetListParams>(`/comment/list`, params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const addComment = async (params: AddParams) => {
  try {
    const res = await postRequest<APIResponse<String>, AddParams>("/comment/add", params)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const deleteComment = async (id: number) => {
  try {
    const res = await deleteRequest<APIResponse<String>>(`/comment/delete?comment_id=${id}`)
    return res.data
  } catch (err) {
    console.error(err)
  }
}