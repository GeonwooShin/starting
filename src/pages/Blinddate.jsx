import React from "react";
import { Container, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TicketItem from "../components/TicketItem";

const TicketList = [
  { teamName: "순대남", num: 2, gender: "male" },
  { teamName: "하이요", num: 3, gender: "male" },
  { teamName: "여신모임", num: 2, gender: "female" },
  { teamName: "재밌는애들모임", num: 4, gender: "male" },
  { teamName: "여기요", num: 4, gender: "male" },
  { teamName: "공주팟", num: 4, gender: "female" },
  { teamName: "맛있는녀석들", num: 2, gender: "male" },
  { teamName: "3공주", num: 3, gender: "female" },
];

const Blinddate = () => {
  return (
    <Container>
      <div className="ticket-box-container">
        <div className="ticket-box__push">
          <div className="push-ticket-img"></div>
          <Link to="/pushticket">
            <Button size="small" variant="contained">
              티켓 넣기
            </Button>
          </Link>
          <p className="ticket-box-description">
            만들어진 팀들 중에 한 팀을 선택하여 과팅을 신청합니다.
          </p>
        </div>
        <div className="ticket-box__pull">
          <div className="pull-ticket-img"></div>
          <Link to="/pullticket">
            <Button size="small" variant="contained">
              티켓 뽑기
            </Button>
          </Link>
          <p className="ticket-box-description">
            과팅을 신청한 팀들 중 한 팀을 랜덤으로 뽑습니다.
          </p>
        </div>
      </div>
      <div className="ticket-service_title">
        <div>
          <h3 className="ticket_title">
            아래의 팀들이 당신을 기다리고 있어요! ✨
          </h3>
        </div>
      </div>
      <div className="service_subtitle">
        <span className="subtitle">티켓을 뽑아 만나보세요!</span>
      </div>
      <Swiper
        style={{ marginBottom: "100px" }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={4}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={{ loop: true }}
        className="swiper-container"
      >
        {TicketList.map((item) => (
          <SwiperSlide>
            <TicketItem item={item} key={item.teamName} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Blinddate;
