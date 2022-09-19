import React from "react";
import { Link } from "react-router-dom";

const NewTeamCard = () => {
  return (
    <Link to="/mypage">
      <div className="new-team-card-container">
        <div className="plus-icon">+</div>
        <div className="add-new-team">팀 새로 만들기</div>
      </div>
    </Link>
  );
};

export default NewTeamCard;
