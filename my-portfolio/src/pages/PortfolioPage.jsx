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
    {
      name: mewzik,
      text: "Tools: HTML, CSS, React, Context API...",
      view: "https://mewzik.vercel.app/",
    },
    {
      name: movies,
      text: " HTML, CSS, React and Axios...",
      view: "https://movies-hub.vercel.app/",
    },
    {
      name: house,
      text: " HTML, CSS and Javascript",
      view: "https://github.com/ejezie",
    },
    {
      name: port,
      text: " HTML, SCSS and React ",
      view: "https://github.com/ejezie",
    },
    {
      name: dora,
      text: " HTML, CSS and Javascript",
      view: "https://github.com/ejezie",
    },
    {
      name: webp,
      text: " HTML, CSS and Javascript",
      view: "https://ejezie.github.io/web-project2/",
    },
  ];
  const slides = items.map((item) => (
    <SwiperSlide
      id={item.name}
      tag="li"
      className="image__wrapper"
      style={{ listStyle: "none" }}>
      <div className="image__portion">
        <img src={item.name} alt="" className="slide__image" />
        <div className="image__hover">
          <div className="view__project">
            <a href={item.view}>VIEW PROJECT</a>
          </div>
        </div>
      </div>
      <div className="text__portion">
        <h2 className="text__portion__header"> WEB APPLICATION</h2>
        <p>{item.text}</p>
        <div className="slide__button"><a href={item.view}>See Demo</a></div>
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
        thumbs={{ swiper: thumbsSwiper }}
        slidesPerView={1}>
        {slides}
      </Swiper>
      {/* <Swiper
        id="thumbs"
        className = "thumbnail"
        onSwiper={setThumbsSwiper}
        spaceBetween={0}
        slidesPerView={6}>
        {thumbs}
      </Swiper> */}
    </div>
  );
}

export default PortfolioPage;
