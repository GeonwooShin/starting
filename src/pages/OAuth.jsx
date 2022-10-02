import { useEffect } from "react";
import { setLogin } from "../redux/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OAuth = () => {
  const navigate = useNavigate();
  const accessToken = new URL(window.location.href).searchParams.get(
    "accessToken"
  );
  const memberId = new URL(window.location.href).searchParams.get("memberId");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogin({ accessToken, memberId }));
    axios
      .get(`http://13.209.146.204:8080/inputted/${memberId}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        const { data } = res.data;
        if (data) navigate("/");
        else navigate("/signup");
      })
      .catch((err) => console.log(err.response));
  }, []);
  return <div></div>;
};

export default OAuth;
