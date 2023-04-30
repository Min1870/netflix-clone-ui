import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  myList: [],
};

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    addList: (state, { payload }) => {
      const isExisted = state.myList.find((item) => item.id === payload.id);
      if (isExisted) {
        return state;
      } else {
        state.myList = [...state.myList, { ...payload }];
      }
      Cookies.set("list", JSON.stringify(state.myList));
    },
  },
});

export const { addList } = listSlice.actions;

export default listSlice.reducer;
