import React from "react";

const KakaoLogin = () => {
  const KAKAO_AUTH_URL = `http://13.209.146.204:8080/oauth2/authorize/kakao?redirect_uri=http://localhost:3000/oauth2/redirect`;
  return (
    <div>
      <div className="login_container">
        <div className="login_title_container">
          <p>대학생활에 재미를 더하다.</p>
          <p>STARTING.</p>
        </div>
        <p className="login_subtitle">
          카카오 계정으로 빠르고 간편하게 시작하세요.
        </p>
        <a href={KAKAO_AUTH_URL}>
          <button className="kakao_login_btn"></button>
        </a>
      </div>
    </div>
  );
};

export default KakaoLogin;
