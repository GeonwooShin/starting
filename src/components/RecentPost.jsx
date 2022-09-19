import React from "react";
import { Container } from "@mui/system";

const recentPostList = [
  {
    id: "1234abc",
    category: "같이탈래?",
    title: "22시 51분 신창역->순천향대 후문",
    date: "22.08.15",
    state: "모집중",
  },
  {
    id: "6234abq",
    category: "같이탈래?",
    title: "22시 51분 신창역->향설 1관",
    date: "22.08.15",
    state: "마감",
  },
  {
    id: "6534abc",
    category: "같이탈래?",
    title: "22시 51분 신창역->순천향대 후문",
    date: "22.08.15",
    state: "마감",
  },
];

const RecentPost = () => {
  return (
    <Container>
      <div className="recent-post-container">
        <div className="recent-post-subject">최근 내가 작성한 글</div>
        <div className="recent-post-info">
          {recentPostList.map((item) => (
            <div className="recent-post-items">
              <div className="recent-post-category">{item.category}</div>
              <div className="recent-post-title">{item.title}</div>
              <div className="recent-post-date">{item.date}</div>
              <div className="recent-post-state">{item.state}</div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default RecentPost;
