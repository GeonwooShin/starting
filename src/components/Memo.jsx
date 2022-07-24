import React from "react";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Memo = () => {
  return (
    <Container>
      <div className="service_title">
        <div>
          <Link to="/blinddate">
            <h1 className="title">
              같이할래?
              <ArrowForwardIosIcon />
            </h1>
          </Link>
        </div>
      </div>
      <div className="service_subtitle">
        <span className="subtitle">이 활동은 어때?</span>
      </div>
    </Container>
  );
};

export default Memo;
