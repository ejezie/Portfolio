import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";
import me from "../images/me.png";

function HomePage() {
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");
    const selectLeft = document.querySelectorAll(".shift__left");
    const selectRight = document.querySelectorAll(".shift__right");

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log(entry);
          if(entry.target.className === "homepage appear"){
            entry.target.style.animation = `anim1 1s forwards ease-in-out`;
          }
          if(entry.target.className === "home__text shift__left"){
            entry.target.style.animation = `anim2 1s forwards ease-in-out`;
          }
          if(entry.target.className === "home__image shift__right"){
            entry.target.style.animation = `anim3 1s forwards ease-in-out`;
          }
          
        } else {
          entry.target.style.animation = `none`;
        }
      });
    });

    selectAppear.forEach((selectedAppear) => {
      observer.observe(selectedAppear);
    });
    selectLeft.forEach((selectedLeft) => {
      observer.observe(selectedLeft);
    });
    selectRight.forEach((selectedRight) => {
      observer.observe(selectedRight);
    });
  });

  return (
    <div className="homepage appear" id="home">
      <div className="home__wrap">
        <div className="home__content">
          <div className="home__text shift__left">
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
              Contact me<i class="fal fa-paper-plane send"></i>
            </Link>
            <Link to="about" smooth={true} duration={1000} className="scroll">
              <i class="fas fa-mouse mouse"></i>
              <p className="scroll__p">scroll</p>
              <i class="fas fa-long-arrow-alt-down arrow"></i>
            </Link>
          </div>
          <div className="home__image shift__right">
            <img src={me} className="image__border" alt="Ejezie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
