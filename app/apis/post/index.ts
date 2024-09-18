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

export const post_list_with_uid = async ({ page, size, uid }: PageParams & { uid: number }) => {
  try {
    const res = await axiosInstance.get(`/post/list_this_uid?page=${page}&size=${size}&uid=${uid}`)
    return res.data
  } catch (err) {
    console.error(err)
  }
}

export const post_detail = async (id: string, headers:{[key:string]:any} ) => {
  try {
    const res = await axiosInstance.get(`/post/detail/${id}`,{headers})
    return res.data
  } catch (err) {
    console.error(err)
  }
}