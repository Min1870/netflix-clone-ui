import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      Cookies.set("user", JSON.stringify(state.user));
      Cookies.set("token", state.token);
    },
    removerUser: (state) => {
      (state.user = null), (state.token = null), Cookies.remove("user");
      Cookies.remove("token");
    },
  },
});

export const { addUser, removerUser } = authSlice.actions;

export default authSlice.reducer;
