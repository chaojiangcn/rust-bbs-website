import { PageParams } from "../type"
import axiosInstance from "../axiosInstance"

export const post_list = async ({page, size}: PageParams) => {
  try {
    const res = await axiosInstance.get(`/post/list?page=${page}&size=${size}`)
    return res.data
  } catch (err) {
    console.error(err)
  }
}