import axios from "axios";
import React from "react";
import { useEffect } from "react";

const OAuth = () => {
  const AthorizationURL = new URL(window.location.href).href;
  useEffect(() => {
    axios.get(AthorizationURL).then((res) => console.log(res));
  }, []);
  return <div>OAuth</div>;
};

export default OAuth;
