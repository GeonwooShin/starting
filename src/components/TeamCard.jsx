import React from "react";
import TeamCardProfile from "./TeamCardProfile";

const TeamCard = ({ item, index, isClicked, checkIndex }) => {
  return (
    <div
      onClick={() => checkIndex(index)}
      className={
        isClicked ? "team-card-container-active" : "team-card-container"
      }
    >
      <div className="team-name">
        <span>{item.teamName}</span>
      </div>
      <div className="team-introduce">
        <span>{item.introduce}</span>
      </div>
      <div className="teamcard-profile-container">
        {item.profile.map((profile, idx) => (
          <TeamCardProfile profile={profile} key={idx} />
        ))}
      </div>
      <div className="team-info-firstline-container">
        <div className="university">
          <span>{item.university}</span>
        </div>
        <div>|</div>
        <div className="department">
          <span>{item.department}</span>
        </div>
      </div>
      <div className="team-info-secondline-container">
        <div className="team-kakaoid">
          <span>{item.teamKakaoid}</span>
        </div>
        <div>|</div>
        <div className="team-gender">
          <span>{item.teamGender}</span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
