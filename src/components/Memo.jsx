import React from "react";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MemoItem from "./MemoItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MemoList = [
  { teamName: "순대남", num: 2, gender: "male" },
  { teamName: "하이요", num: 3, gender: "male" },
  { teamName: "여신모임", num: 2, gender: "female" },
  { teamName: "재밌는애들모임", num: 4, gender: "male" },
  { teamName: "여기요", num: 4, gender: "male" },
  { teamName: "공주팟", num: 4, gender: "female" },
];

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
      <Grid style={{ margin: "0" }} container spacing={3} xs={12}>
        {MemoList.map((item) => (
          <Grid item md={4} xs={12}>
            <MemoItem item={item} key={item.teamName} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Memo;
