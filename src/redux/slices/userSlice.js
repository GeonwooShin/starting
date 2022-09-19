import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: false,
  reducers: {
    setLogin: (state, action) => {
      state = true;
    },
  },
});

export default loginSlice;
