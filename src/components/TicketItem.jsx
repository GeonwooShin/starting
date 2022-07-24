import React from "react";

const TicketItem = ({ item }) => {
  return (
    <div className="ticket_img_container">
      <div className="ticket_img"></div>
      <div className="ticket_team">
        <span>{item.teamName}</span>
      </div>
      <div className="ticket_num">
        <span>{item.num}</span>
      </div>
      <div className="ticket_gender">
        <span>{item.gender}</span>
      </div>
    </div>
  );
};

export default TicketItem;
