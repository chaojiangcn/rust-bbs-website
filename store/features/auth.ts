import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '..';
import { deleteCookie } from 'cookies-next';


// 固定格式
type AuthState = {
  isAuth: Boolean,
  nickname: string,
  uid: string,
  isModerator: boolean,
  token: string,
  avatar: string,
}

// 一个文件存储一个数据，数据可以是任何格式
const initialState: AuthState = {
  isAuth: false,
  nickname: "",
  uid: "",
  isModerator: false,
  token: "",
  avatar: "",
}

export const auth = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logOut: () => {// 重置全部值
      deleteCookie("auth")
      return initialState
    },
    login: (state, action: PayloadAction<{ token: string, nickname: string, uid: string, avatar: string }>) => {
      return {
        isAuth: true,
        nickname: action.payload.nickname,
        uid: action.payload.uid,
        isModerator: false,
        token: action.payload.token,
        avatar: action.payload.avatar,
      }
    },
    toggleModerator: (state) => {
      state.isModerator = !state.isModerator
    }
  }
})

export const { login, logOut } = auth.actions
export default auth.reducer


export const getAuth = (state: RootState) => state.auth