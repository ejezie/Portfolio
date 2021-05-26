import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import Title from "../components/Title";
import mewzik from "../images/mewzik.png";
import webp from "../images/webp.png";
import house from "../images/house.png";
import port from "../images/port.png";
import dora from "../images/dora.png";
import movies from "../images/movies.png";

SwiperCore.use([Navigation, Pagination, Thumbs]);

function PortfolioPage() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const items = [
    { name: mewzik, text: " httml, css and javascript" },
    { name: movies, text: " httml, css and javascript" },
    { name: house, text: " httml, css and javascript" },
    { name: port, text: " httml, css and javascript" },
    { name: dora, text: " httml, css and javascript" },
    { name: webp, text: " httml, css and javascript" },
  ];
  const slides = items.map((item) => (
    <SwiperSlide
      id={item.name}
      tag="li"
      className="image__wrapper"
      style={{ listStyle: "none" }}>
      <img src={item.name} alt="" className="slide__image" />
      <div className="image__hover">
        <p>{item.text}</p>
      </div>
    </SwiperSlide>
  ));
  const thumbs = items.map((item) => (
    <SwiperSlide
      id={`${item.name}-thumb`}
      tag="li"
      style={{ listStyle: "none" }}>
      <img src={item.name} alt="" className="thumb__image" />
    </SwiperSlide>
  ));

  return (
    <div className="portfolio">
      <div className="portfolio__heading">
        <Title title={"PORTFOLIO"} span={"PORTFOLIO"} />
      </div>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}>
        {slides}
      </Swiper>
      {/* <Swiper
        id="thumbs"
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={4}>
        {thumbs}
      </Swiper> */}
    </div>
  );
}

export default PortfolioPage;
