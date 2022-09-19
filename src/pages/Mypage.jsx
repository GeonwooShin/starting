import React from "react";
import { Container } from "@mui/system";
import Profile from "../components/Profile";
import MyFriends from "../components/MyFriends";
import MyTeams from "../components/MyTeams";

const Mypage = () => {
  return (
    <Container>
      <Profile></Profile>
      <div className="mypage-myfrineds-myteams">
        <MyFriends></MyFriends>
      </div>
    </Container>
  );
};

export default Mypage;
