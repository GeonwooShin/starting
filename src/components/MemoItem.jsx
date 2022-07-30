import React from "react";

const MemoItem = ({ item }) => {
  return (
    <div className="memo-img-container">
      <div className="memo-img"></div>
      <div className="memo-title">
        <span>{item.title}</span>
      </div>
      <div className="memo-text">
        <span>{item.text}</span>
      </div>
      <div className="memo-number">
        <span>
          {item.currentNumber} / {item.maximumNumber}
        </span>
      </div>
      <div className="memo-userName">
        <span>{item.userName}</span>
      </div>
      <div className="memo-manner">
        <span>{item.manner}</span>
      </div>
      <div className="memo-deadline">
        <span>{item.deadline}</span>
      </div>
      <div className="memo-sub-container">
        <div className="memo-location">
          <span>{item.location}</span>
        </div>
        <div className="memo-field">
          <span>{item.field}</span>
        </div>
      </div>
    </div>
  );
};

export default MemoItem;
