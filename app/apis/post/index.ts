import axios from "axios"
import { PageParams } from "../type"

export const post_list = async ({page, size}: PageParams) => {
  try {
    const res = await axios.get(`${process.env.baseURL}/post/list?page=${page}&size=${size}`)
    return res.data
  } catch (err) {
    console.error(err)
  }
}