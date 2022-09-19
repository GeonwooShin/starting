import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: loginSlice,
  },
});

export default store;
