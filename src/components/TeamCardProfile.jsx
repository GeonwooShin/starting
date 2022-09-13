import React from "react";

// styled components 적용 필요 -> length 4, 3, 2일때 profile 변경
// if else 문으로 중복된 코드 가능하면 최적화 작업필요

const TeamCardProfile = ({ profile }) => {
  return (
    <div className="teamcard-profile-items">
      <div
        className="teamcard-profile-img"
        style={{
          backgroundImage: `url(${profile.profileImage})`,
          width: "30px",
          height: "30px",
        }}
      ></div>
      <div className="teamcard-profile-name">
        <span>{profile.profileName}</span>
      </div>
      <div className="teamcard-profile-manner">
        <span>{profile.profileManner}</span>
      </div>
    </div>
  );
};

export default TeamCardProfile;
