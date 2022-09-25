import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: false,
  accessToken: "",
  userId: "",
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loginState = true;
      state.accessToken = action.payload;
    },
  },
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
