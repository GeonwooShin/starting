import React from "react";

const Coupon = ({ coupon }) => {
  return (
    <>
      <div className="mypage-coupon-container">
        <div className="mypage-coupon-title">Coupon</div>
        <div className="mypage-coupon-items">
          <div className="mypage-coupon-coupons">{coupon}</div>
          <div className="mypage-coupon-unit">개</div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
