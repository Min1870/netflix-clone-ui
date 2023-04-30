import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./services/listSlice";
import { authApi } from "./api/authApi";
import authSlice from "./services/authSlice";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    list: listSlice,
    authSlice: authSlice
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(authApi.middleware),
});