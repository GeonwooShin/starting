import React from "react";
import TicketItem from "./TicketItem";

const Ticket = () => {
  const TicketList = [
    { teamName: "순대남", num: 2, gender: "male" },
    { teamName: "하이요", num: 3, gender: "male" },
    { teamName: "여신모임", num: 2, gender: "female" },
    { teamName: "재밌는애들", num: 4, gender: "male" },
    { teamName: "여기요", num: 4, gender: "male" },
    { teamName: "공주팟", num: 4, gender: "female" },
  ];
  return (
    <div className="ticket_container">
      {TicketList.map((item) => (
        <TicketItem item={item} key={item.teamName} />
      ))}
    </div>
  );
};

export default Ticket;
