import { toast } from "@/components/ui/use-toast"
import axiosInstance from "../axiosInstance"

type LoginParams = {
  email: string
  password: string
}

export const login = async (req: LoginParams) => {
  try {
    const res = await axiosInstance.post(`/user/login`, req)
    return res.data
  } catch (err) {
    toast({
      title: "网络错误请重试",
      variant: "destructive",
    })
  }
}