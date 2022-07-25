import React from "react";
import TicketItem from "./TicketItem";
import { Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const TicketList = [
  { teamName: "순대남", num: 2, gender: "male" },
  { teamName: "하이요", num: 3, gender: "male" },
  { teamName: "여신모임", num: 2, gender: "female" },
  { teamName: "재밌는애들모임", num: 4, gender: "male" },
  { teamName: "여기요", num: 4, gender: "male" },
  { teamName: "공주팟", num: 4, gender: "female" },
];

const Ticket = () => {
  return (
    <Container maxWidth="lg" className="ticket_container">
      <div className="service_title">
        <div>
          <Link to="/blinddate">
            <h1 className="title">
              과팅할래?
              <ArrowForwardIosIcon />
            </h1>
          </Link>
        </div>
      </div>
      <div className="service_subtitle">
        <span className="subtitle">새로운 친구를 만나봐!</span>
      </div>
      <Grid style={{ margin: "0" }} container spacing={3} xs={12}>
        {TicketList.map((item) => (
          <Grid item md={4} xs={12}>
            <TicketItem item={item} key={item.teamName} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Ticket;
