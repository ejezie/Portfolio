import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import me from "../images/me.png";

function HomePage() {
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");
    const selectUp = document.querySelectorAll(".shift__up");
    const selectRight = document.querySelectorAll(".shift__right");
    const selectLeft = document.querySelectorAll(".shift__left");

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
    selectUp.forEach((selectedUp) => {
      observer.observe(selectedUp);
    });
    selectLeft.forEach((selectedUp) => {
      observer.observe(selectedUp);
    });
    selectRight.forEach((selectedUp) => {
      observer.observe(selectedUp);
    });
  });

  return (
    <div className="homepage" id="home">
      <div className="home__wrap">
        <div className="home__content">
          <div className="home__text shift__up appear" data-delay="1s">
            <h2>Hi, I AM DARRYL </h2>
            <p className="describe__p">
              An enthusiatic frontend developer with a good eye for simple
              elegant user friendly designs
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="contact__home">
              Contact me<i class="fal fa-paper-plane sendt"></i>
            </Link>
            <Link to="about" smooth={true} duration={1000} className="scroll appear shift__up" data-delay="2s">
              <i class="fas fa-mouse mouse"></i>
              <p className="scroll__p">scroll</p>
              <i class="fas fa-long-arrow-alt-down arrow"></i>
            </Link>
          </div>
          <div className="home__image shift__up appear"data-delay="0.5s">
            <img src={me} className="image__border" alt="Ejezie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
