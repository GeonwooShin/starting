import React from "react";
import { Container, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Blinddate = () => {
  return (
    <Container>
      <div className="ticket-box-container">
        <div className="ticket-box__push">
          <div className="push-ticket-img"></div>
          <Button size="small" variant="contained">
            티켓 넣기
          </Button>
          <p className="ticket-box-description">
            만들어진 팀들 중에 한 팀을 선택하여 과팅을 신청합니다.
          </p>
        </div>
        <div className="ticket-box__pull">
          <div className="pull-ticket-img"></div>
          <Button size="small" variant="contained">
            티켓 뽑기
          </Button>
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
    </Container>
  );
};

export default Blinddate;
