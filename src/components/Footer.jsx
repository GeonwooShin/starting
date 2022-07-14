import React from "react";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <h3 className="footer_title">STARTING</h3>
        <div className="footer_info">
          <p>(주)스타팅 | 대표자 : 스타팅 | 사업자번호 : 010-xxxx-xxxx</p>
          <p>주소 | 전라북도 전주시 평택읍 수원로 49길 22 1동 101호</p>
        </div>
        <nav className="footer_nav">
          <ul className="footer_nav_list">
            <li>이용약관</li>
            <li>개인정보취급방침</li>
            <li>스타팅 소개</li>
            <li>공지사항</li>
            <li>신고하기</li>
            <li>문의하기</li>
          </ul>
        </nav>
        <div className="footer_sub_info">
          <p>
            영업시간 : 주중 10~18시 (점심시간 12~13시 / 주말 및 공휴일 휴무)
          </p>
          <p>통신 판매업 신고번호 : 제 2017-순천향대-45445호</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
