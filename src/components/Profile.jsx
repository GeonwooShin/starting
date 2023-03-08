import { Container } from "@mui/system";
import React from "react";
import profileXL from "../images/profileXL.svg";
import RecentPost from "../components/RecentPost";
import Point from "../components/Point";
import Coupon from "../components/Coupon";

const Profile = ({ data }) => {
  return (
    <Container>
      <div className="mypage-container">
        <div className="mypage-profile-container">
          <div
            className="mypage-profile-img"
            style={{
              backgroundImage: `url(${data.imageProfileUrl})`,
            }}
          ></div>
          <div className="mypage-profile-items">
            <div className="mypage-profile-username">
              {data.name}
              <span className="mypage-profile-username-span">님</span>
            </div>
            <div className="mypage-profile-manner">{data.temperature}</div>
            <div className="mypage-profile-kakao-email">{data.nickname}</div>
            <div className="mypage-profile-gender">{data.gender}</div>
            <div className="mypage-profile-university">{data.school}</div>
            <div className="mypage-profile-department">{data.department}</div>
            <div className="mypage-profile-student-id">
              {data.uniqSchoolNumber}
            </div>
          </div>
        </div>
        <div className="mypage-recent-post-container">
          <RecentPost></RecentPost>
          <div className="mypage-point-coupon-container">
            <Point></Point>
            <Coupon></Coupon>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
