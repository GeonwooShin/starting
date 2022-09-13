import React from "react";
import { Container } from "@mui/system";
import TeamCardProfile from "./TeamCardProfile";
import profileSmall from "../images/profileSmall.svg";

const MyTeams = () => {
  return (
    <div className="mypage-myfriends-container">
      <div className="mypage-myfriends-title-options">
        <div className="mypage-myfriends-title">나의 팀들</div>
        <div className="mypage-myfriends-option-refresh">새로고침</div>
        <div className="mypage-myfriends-option-add">추가</div>
      </div>
    </div>
  );
};
export default MyTeams;
