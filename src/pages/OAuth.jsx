import React from "react";
import { useEffect } from "react";

const OAuth = () => {
  const accessToken = new URL(window.location.href).searchParams.get(
    "accessToken"
  );
  console.log(accessToken);
  useEffect(() => {}, []);
  return <div>OAuth</div>;
};

export default OAuth;
