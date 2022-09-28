import React from "react";
import { useSelector } from "react-redux";
import Mypage from "./Mypage";

const RedirectPage = () => {
  const loginState = useSelector((state) => state.userSlice.loginState);
  return loginState ? <Mypage /> : <Home />;
};

export default RedirectPage;
