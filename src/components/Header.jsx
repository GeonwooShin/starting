import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <nav className="header-routes-container">
          <Link to="/blinddate" className="header-routes">
            과팅할래?
          </Link>
          <Link to="/dotogether" className="header-routes">
            같이할래?
          </Link>
          <Link to="/restaurant" className="header-routes">
            여기갈래?
          </Link>
          <Link to="/rentedroom" className="header-routes">
            어디볼래?
          </Link>
        </nav>
        <nav className="header-item-container">
          <Link to="/login" className="header-item">
            로그인/회원가입
          </Link>
          <div className="header-item">마이페이지</div>
        </nav>
      </div>
    </>
  );
};

export default Header;
