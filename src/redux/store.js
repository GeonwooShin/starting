import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const rootReducer = combineReducers({
  userSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
