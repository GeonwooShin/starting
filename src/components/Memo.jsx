import React from "react";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import MemoItem from "./MemoItem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MemoList = [
  {
    title: "공모전하실분",
    text: "이거 온양에서 하는 공모전인데요",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "3시축구차실분",
    text: "저흰 에환공입니다 11대11 ㄱㄱ",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "어쩔티비 저쩔티비",
    text: "ㅈㄱㄴ",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "점메추 저메추 받습니다~ 성의있게 부탁드려요!",
    text: "신창이 거기서 거기긴 한데 맛있는거 부탁드려요 아 근데 혼밥하기 좀 괜찮은 곳으로 부탁드려요 너무 사람많으면 정신없고 시끄러워용~~ 같이 먹을사람 있으면 같이 ㄱㄱ 싫으면 말고 어쩔티비 저쩔티비 응~ 아무말 대잔치 ㄱㄱ 아무말 고~",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "점메추 저메추 받습니다~ 성의있게 부탁드려요!",
    text: "신창이 거기서 거기긴 한데 맛있는거 부탁드려요",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "점메추 저메추 받습니다~ 성의있게 부탁드려요!",
    text: "신창이 거기서 거기긴 한데 맛있는거 부탁드려요",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "점메추 저메추 받습니다~ 성의있게 부탁드려요!",
    text: "신창이 거기서 거기긴 한데 맛있는거 부탁드려요",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
  {
    title: "점메추 저메추 받습니다~ 성의있게 부탁드려요!",
    text: "신창이 거기서 거기긴 한데 맛있는거 부탁드려요",
    currentNumber: 1,
    maximumNumber: 3,
    userName: "윤팍",
    manner: 36.5,
    deadline: "2022년08월21일",
    location: "신창",
    field: "공모전",
  },
];

const Memo = () => {
  return (
    <Container>
      <div className="service_title">
        <div>
          <Link to="/dotogether">
            <h1 className="title">
              같이할래? 🙌
              <ArrowForwardIosIcon />
            </h1>
          </Link>
        </div>
      </div>
      <div className="service_subtitle">
        <span className="subtitle">이 활동은 어때?</span>
      </div>
      <Grid style={{ margin: "0" }} container spacing={1} xs={12}>
        {MemoList.map((item) => (
          <Grid item md={12 / 5} xs={12}>
            <MemoItem item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Memo;
