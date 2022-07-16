import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerList = ["배너1", "배너2", "배너3", "배너4"];

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={{ loop: true }}
      className="swiper-container"
    >
      {bannerList.map((banner) => (
        <SwiperSlide>
          <div className="banner-item">{banner}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
