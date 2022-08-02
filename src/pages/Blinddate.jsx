import React from "react";
import { Container, Button } from "@mui/material";

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
    </Container>
  );
};

export default Blinddate;
