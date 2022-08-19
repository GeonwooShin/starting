import React from "react";
import { useState } from "react";
import { Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import TeamCard from "../components/TeamCard";
import profileSmall from "../images/profileSmall.svg";
import NewTeamCard from "../components/NewTeamCard";

const teamList = [
  {
    id: "1234abc",
    teamName: "순대남",
    introduce: "안녕하세요",
    profile: [
      {
        profileImage: profileSmall,
        profileName: "한둘셋넷다여일덟아열",
        profileManner: "36.5'C",
      },
      {
        profileImage: profileSmall,
        profileName: "secondMember",
        profileManner: "41.6'C",
      },
      {
        profileImage: profileSmall,
        profileName: "thirdMember",
        profileManner: "33.6'C",
      },
      {
        profileImage: profileSmall,
        profileName: "fourthMember",
        profileManner: "37.8'C",
      },
    ],
    university: "순천향대학교",
    department: "디스플레이신소재공",
    teamGender: "FEMALE",
    teamKakaoid: "dlagmltkd98",
  },
  {
    id: "1254abc",
    teamName: "한둘셋넷다여일덟",
    introduce: "반가워요 마진체크중마진체크중",
    profile: [
      {
        profileImage: profileSmall,
        profileName: "한둘셋넷다여일덟",
        profileManner: "36.5'C",
      },
      {
        profileImage: profileSmall,
        profileName: "secondMember",
        profileManner: "41.6'C",
      },
      {
        profileImage: profileSmall,
        profileName: "thirdMember",
        profileManner: "33.6'C",
      },
    ],
    university: "순천향대학교",
    department: "디스플레이신소재공",
    teamKakaoid: "dlagmltkd98margin33",
    teamGender: "FEMALE",
  },
  {
    id: "2134abc",
    teamName: "한둘셋넷다여일덟",
    introduce: "반가워요 마진체크중마진체크중",
    profile: [
      {
        profileImage: profileSmall,
        profileName: "한둘셋넷다여일덟",
        profileManner: "36.5'C",
      },
      {
        profileImage: profileSmall,
        profileName: "secondMember",
        profileManner: "41.6'C",
      },
    ],
    university: "순천향대학교",
    department: "디스플레이신소재공",
    teamKakaoid: "semnil",
    teamGender: "FEMALE",
  },
  {
    id: "1764aqc",
    teamName: "한둘셋넷다여일덟",
    introduce: "반가워요 마진체크중마진체크중",
    profile: [
      {
        profileImage: profileSmall,
        profileName: "한둘셋넷다여일덟",
        profileManner: "36.5'C",
      },
      {
        profileImage: profileSmall,
        profileName: "secondMember",
        profileManner: "41.6'C",
      },
      {
        profileImage: profileSmall,
        profileName: "thirdMember",
        profileManner: "33.6'C",
      },
      {
        profileImage: profileSmall,
        profileName: "fourthMember",
        profileManner: "37.8'C",
      },
    ],
    university: "순천향대학교",
    department: "디스플레이신소재공",
    teamKakaoid: "dlagmltkd98margin33",
    teamGender: "FEMALE",
  },
];

const PushTicket = () => {
  const [isClick, setIsClick] = useState(false);

  const checkTeamListIndex = (idx) => {
    const checkIdxArr = Array(teamList.length).fill(false);
    checkIdxArr[idx] = true;
    setIsClick(checkIdxArr);
  };

  return (
    <Container>
      <div className="title-box">
        <h3>
          <span className="underline">과</span>팅 티켓을 뽑을 팀을 선택하세요.
        </h3>
        <span>선택한 팀카드가 매칭된 상대방에게 전달됩니다.</span>
      </div>
      <Swiper
        style={{
          marginTop: "20px",
          marginBottom: "80px",
        }}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={4}
        className="swiper-container-pushticket"
      >
        {teamList.map((item, idx) => (
          <>
            <SwiperSlide className="slide-team-card">
              <TeamCard
                item={item}
                index={idx}
                isClicked={isClick[idx]}
                checkIndex={checkTeamListIndex}
                key={item.id}
              />
            </SwiperSlide>
            {idx === teamList.length - 1 && (
              <SwiperSlide>
                <NewTeamCard />
              </SwiperSlide>
            )}
          </>
        ))}
      </Swiper>
      <form>
        <div
          className={isClick ? "push-ticket-check" : "push-ticket-check-none"}
        >
          <input type="checkbox" className="push-ticket-check-checkbox" />
          <div>선택하신 팀으로 티켓을 뽑으시겠습니까?</div>
        </div>
        <div className="push-ticket-btn">
          <Button size="large" variant="contained">
            티켓 넣기
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default PushTicket;
