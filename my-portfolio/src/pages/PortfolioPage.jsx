import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");

    let options = {
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style = `transition: all 1s ease-in-out;`;
        }
        entry.target.classList.add("show");
        entry.target.style.animationDelay = entry.target.dataset.delay;
      });
    }, options);

    selectAppear.forEach((selectedAppear) => {
      observer.observe(selectedAppear);
    });
  });

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
        <div className="slide__button">
          <a href={item.view}>See Demo</a>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__heading">
        <Title title={"PORTFOLIO"} span={"PORTFOLIO"} />
      </div>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        navigation
        pagination
        slidesPerView={1}
        className="appear shift__up" data-delay ="2.2s">
        {slides}
      </Swiper>
    </div>
  );
}

export default PortfolioPage;
