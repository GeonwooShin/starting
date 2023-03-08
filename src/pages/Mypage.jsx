import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Profile from "../components/Profile";
import MyFriends from "../components/MyFriends";
import axios from "axios";
import { useSelector } from "react-redux";

const Mypage = () => {
  const [userInfo, setUserInfo] = useState();
  const memberId = useSelector((state) => state.userSlice.memberId);
  const accessToken = useSelector((state) => state.userSlice.accessToken);
  useEffect(() => {
    axios
      .get(`http://13.209.146.204:8080/mypage/${memberId}`, {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setUserInfo(res.data.data);
      })
      .catch((err) => console.log(err.response));
  }, []);
  return (
    <Container>
      {userInfo && <Profile data={userInfo}></Profile>}
      <div className="mypage-myfrineds-myteams">
        <MyFriends></MyFriends>
      </div>
    </Container>
  );
};

export default Mypage;
