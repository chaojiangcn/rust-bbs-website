import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  value: AuthState;
}
// 固定格式
type AuthState = {
  isAuth: Boolean,
  username: string,
  uid: string,
  isModerator: boolean
}

// 一个文件存储一个数据，数据可以是任何格式
const initialState: InitialState = {
  value: {
    isAuth: false,
    username: "",
    uid: "",
    isModerator: false
  } as AuthState
} as InitialState
export const auth = createSlice({
  name: "auth",
  // 对象初始状态
  initialState: initialState,
  reducers: {
    logOut: () => {// 重置全部值
      return initialState
    },
    login: (state, action: PayloadAction<string>) => {
      return {
        value: {
          isAuth: true,
          username: action.payload,
          uid: "asdasdasdawd",
          isModerator: false,
        }
      }
    },
    toggleModerator: (state) => {
      state.value.isModerator = !state.value.isModerator
    }
  }
})

export const { login, logOut } = auth.actions
export default auth.reducer