import { configureStore } from "@reduxjs/toolkit";
import textsSlice from "../slices/textsSlice";

// store 에 어떤 slices 에 정의한 reducer 로 접근할 건지 명시하기
const store = configureStore({
  reducer: {
    texts: textsSlice,
  },
});

export default store;
