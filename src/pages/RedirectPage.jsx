import React from "react";
import { useSelector } from "react-redux";
import Mypage from "./Mypage";
import Login from "./Login";

const RedirectPage = () => {
  const loginState = useSelector((state) => state.userSlice.loginState);
  return loginState ? <Mypage /> : <Login />;
};

export default RedirectPage;
