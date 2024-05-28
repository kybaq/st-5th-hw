import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("texts")
  ? JSON.parse(localStorage.getItem("texts"))
  : [];

const textsSlice = createSlice({
  name: "texts", // state 이름 정의
  initialState, // state 초기화
  reducers: {
    // action creater 와 reducer 동시 정의
    // 여긴 reducer
    onAddText: (state, action) => {
      localStorage.setItem("texts", JSON.stringify(action.payload));
      return [...state, action.payload];
    },
  },
});

export const { onAddText } = textsSlice.actions; // action creation
export default textsSlice.reducer;
