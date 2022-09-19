import React from "react";

const Point = ({ point }) => {
  return (
    <>
      <div className="mypage-point-container">
        <div className="mypage-point-title">Ting Point</div>
        <div className="mypage-point-items">
          <div className="mypage-point-points">{point}</div>
          <div className="mypage-point-unit">points</div>
        </div>
      </div>
    </>
  );
};

export default Point;
