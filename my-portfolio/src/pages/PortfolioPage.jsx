import React, { useState } from "react";
import Title from "../components/Title";
import mewzik from "../images/mewzik.png";
import webp from "../images/webp.png";
import house from "../images/house.png";
import port from "../images/port.png";
import dora from "../images/dora.png";
import movies from "../images/movies.png";

function PortfolioPage() {
  const [current, setCurrent] = useState(0);

  const items = [
    { name: mewzik, text: " httml, css and javascript" },
    { name: webp, text: " httml, css and javascript" },
    { name: house, text: " httml, css and javascript" },
    { name: port, text: " httml, css and javascript" },
    { name: dora, text: " httml, css and javascript" },
    { name: movies, text: " httml, css and javascript" },
  ];

  const lenght = items.length;
  console.log(lenght);

  const nextSlide = () => {
    setCurrent(current === lenght - 1 ? 0 : current + 1);
    console.log("click");
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? lenght - 1 : current - 1);
    // console.log("click");
  };
  console.log(current);

  return (
    <div className="portfolio">
      <div className="portfolio__heading">
        <Title title={"PORTFOLIO"} span={"PORTFOLIO"} />
      </div>

      <div className="portfolio__wrap">
        <i class="fas fa-arrow-circle-left" onClick={prevSlide}></i>
        <i class="fas fa-arrow-circle-right" onClick={nextSlide}></i>
        {items.map((item, index) => (
          <div className="image__wrapper">
            <div
              className={index === current ? "slide active" : "item"}
              key={index}>
              {index === current && (
                <img
                  src={item.name}
                  alt="music_page"
                  className="image__slide"
                />
              )}

              <div className="image__hover">
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortfolioPage;
