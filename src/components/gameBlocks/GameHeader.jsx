import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./GameHeader.css";

function GameHeader(props) {
  function makeSlides(slide) {
    return (
      <SwiperSlide>
        <img src={slide.src} alt="Project Screenshot" />
      </SwiperSlide>
    );
  }

  return (
    <div className="gamepage-header">
      <Swiper modules={[Pagination, Autoplay]} spaceBetween={50} slidesPerView={1} loop={true} pagination={{ clickable: true }} autoplay={{ delay: 4000, pauseOnMouseEnter: true }}>
        {props.imageList.map(makeSlides)}
      </Swiper>
      <h1>{props.title}</h1>
    </div>
  );
}

export default GameHeader;
