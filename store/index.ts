"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import authReducer from "./features/auth";
import { persistReducer } from "redux-persist";
import createWebStorage from "redux-persist/es/storage/createWebStorage";


const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const storage =
  typeof window !== "undefined"
    ? createWebStorage("session")
    : createNoopStorage();

// 本地化数据
// configure which keuy we want to persist
const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["isAuth","uid",'token'],
};


const rootReducer = combineReducers({
  counter: counterReducer,
  auth: persistReducer(authPersistConfig, authReducer),
  //add all your reducers here
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});


export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
