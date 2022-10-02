import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginState: false,
  accessToken: "",
  memberId: "",
  userInfo: "",
};

const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.loginState = true;
      state.accessToken = action.payload.accessToken;
      state.memberId = action.payload.memberId;
    },
  },
});

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;
