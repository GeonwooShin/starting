import axios from "axios";
import React from "react";
import { useEffect } from "react";

const OAuth = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  useEffect(() => {
    axios
      .get("http://localhost:8080/oauth/redirect")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);
  return <div>OAuth</div>;
};

export default OAuth;

// useEffect(() => {
//   const data = {
//     grant_type: "authorization_code",
//     client_id: process.env.REACT_APP_REST_API_KEY,
//     redirect_uri: process.env.REACT_APP_REDIRECT_URI,
//     code,
//     client_secret: process.env.REACT_APP_CLIENT_SECRET_KEY,
//   };
//   const queryString = Object.keys(data)
//     .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
//     .join("&");

//   axios
//     .post("https://kauth.kakao.com/oauth/token", queryString, {
//       headers: {
//         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
//       },
//     })
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// }, []);
