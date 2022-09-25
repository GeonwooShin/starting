import React from "react";
import { useEffect } from "react";
import { setLogin } from "../redux/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const OAuth = () => {
  const accessToken = new URL(window.location.href).searchParams.get(
    "accessToken"
  );
  console.log(accessToken);
  const token = useSelector((state) => state.userSlice.accessToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogin(accessToken));
  }, []);
  return <div>{token}</div>;
};

export default OAuth;
