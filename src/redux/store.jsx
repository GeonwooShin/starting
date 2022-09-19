import { configureStore, createSlice } from "@reduxjs/toolkit";

const acessToken = createSlice({
  name: "accessTokenReducer",
  initialState: "",
  reducers: {},
});

const store = configureStore({ reducer: acessToken.reducer });

export default store;
