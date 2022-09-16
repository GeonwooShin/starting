import { Container } from "@mui/system";
import React from "react";
import profileXL from "../images/profileXL.svg";
import RecentPost from "../components/RecentPost";
import Point from "../components/Point";
import Coupon from "../components/Coupon";

const profileList = {
  profileImg: profileXL,
  profileName: "한둘셋넷다여일덟",
  profileManner: "36.5'C",
  profileKakaoEmail: "dlagmltkd98@naver.com",
  profileKakaoID: "dlagmltkd98margin33",
  profileGender: "MALE",
  profileUniversity: "순천향대학교",
  profileDepartment: "디스플레이신소재공",
  profileStudentID: 17,
  point: 10000,
  coupon: 0,
};

const Profile = () => {
  return (
    <Container>
      <div className="mypage-container">
        <div className="mypage-profile-container">
          <div
            className="mypage-profile-img"
            style={{
              backgroundImage: `url(${profileList.profileImg})`,
            }}
          ></div>
          <div className="mypage-profile-items">
            <div className="mypage-profile-username">
              {profileList.profileName}
              <span className="mypage-profile-username-span">님</span>
            </div>
            <div className="mypage-profile-manner">
              {profileList.profileManner}
            </div>
            <div className="mypage-profile-kakao-email">
              {profileList.profileKakaoEmail}
            </div>
            <div className="mypage-profile-kakao-id">
              {profileList.profileKakaoID}
            </div>
            <div className="mypage-profile-gender">
              {profileList.profileGender}
            </div>
            <div className="mypage-profile-university">
              {profileList.profileUniversity}
            </div>
            <div className="mypage-profile-department">
              {profileList.profileDepartment}
            </div>
            <div className="mypage-profile-student-id">
              {profileList.profileStudentID}
            </div>
          </div>
        </div>
        <div className="mypage-recent-post-container">
          <RecentPost></RecentPost>
          <div className="mypage-point-coupon-container">
            <Point point={profileList.point}></Point>
            <Coupon coupon={profileList.coupon}></Coupon>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
