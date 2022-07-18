import React from "react";
import { Link } from "react-router-dom";

const menuList = [
  { name: "과팅할래?", route: "/blinddate" },
  { name: "같이할래?", route: "/dotogether" },
  { name: "여기갈래?", route: "/restaurant" },
  { name: "어디볼래?", route: "/rentedroom" },
];

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="header-logo">
          <Link to="/">starting</Link>
        </div>
        <div className="header-user-container">
          <Link to="/login" className="login-btn">
            로그인/회원가입
          </Link>
          <Link to="/" className="mypage-btn">
            마이페이지
          </Link>
        </div>
      </div>
      <nav className="nav-menu">
        {menuList.map((menu) => (
          <li key={menu.name}>
            <Link className="menu-item" to={menu.route}>
              {menu.name}
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Header;
