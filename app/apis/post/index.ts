import { APIResponse, PageParams } from "../type"
import axiosInstance from "../axiosInstance"

export const post_list: ({ page, size }: PageParams) => Promise<APIResponse<any>> = async ({ page, size }) => {
  try {
    const res = await axiosInstance.get(`/post/list?page=${page}&size=${size}`)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const post_detail = async (id: string) => {
  try {
    const res = await axiosInstance.get("/post/detail/" + id)
    return res.data
  } catch (err) {
    console.error(err)
  }
}