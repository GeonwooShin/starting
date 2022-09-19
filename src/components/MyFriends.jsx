import React from "react";
import { Container } from "@mui/system";
import TeamCardProfile from "./TeamCardProfile";
import profileSmall from "../images/profileSmall.svg";

const myFreindsList = [
  {
    profileImage: profileSmall,
    profileName: "한둘셋넷다여일덟",
  },
  {
    profileImage: profileSmall,
    profileName: "한둘셋넷다여일덟",
  },
  {
    profileImage: profileSmall,
    profileName: "한둘셋넷다여일덟",
  },
  {
    profileImage: profileSmall,
    profileName: "한둘셋넷다여일덟",
  },
];

const MyFriends = () => {
  return (
    <Container>
      <div className="mypage-myfriends-container">
        <div className="mypage-myfriends-title-options">
          <div className="mypage-myfriends-title">나의 친구들</div>
          <div className="mypage-myfriends-option-refresh">새로고침</div>
          <div className="mypage-myfriends-option-add">추가</div>
        </div>
        <div className="mypage-myfriends-friends-container">
          {myFreindsList.map((profile) => (
            <TeamCardProfile profile={profile} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default MyFriends;
