import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const bannerList = [
  "https://www.namouriverlodge.com/wp-content/uploads/2018/09/web-design-banners-in-psd-photoshop-banner-website-banner-website-banners.jpg",
  "https://marketplace.canva.com/EAEb577lR9o/2/0/1600w/canva-blue-modern-company-digital-web-agency-linkedin-banner-98UfUwHtDy8.jpg",
  "https://www.vianet.com.np/wp-content/uploads/2021/03/web-banner-emi-easy-monthly-internet-2021-01-20.png",
];

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
          <img src={banner} alt="banner" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
