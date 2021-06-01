import React, { useEffect } from "react";
import Title from "../components/Title";
import laptop from "../images/lap.png";
import screen from "../images/code.gif";

function About() {
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");
    const selectLeft = document.querySelectorAll(".shift__left");
    const selectRight = document.querySelectorAll(".shift__right");

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log(entry);
          if (entry.target.className === "about appear") {
            entry.target.style.animation = `anim1 1s forwards ease-in-out`;
          }
          if (entry.target.className === "about__images shift__left") {
            entry.target.style.animation = `anim2 1s forwards ease-in-out`;
          }
          if (entry.target.className === "description__wrapper shift__right") {
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
    <div className="about appear" id="about">
      <div className="about__wrap">
        <div className="about__title">
          <Title title={"About Me"} span={"About me"} />
        </div>
        <div className="about__content">
          <div className="about__images shift__left">
            <img src={laptop} alt="laptop" className="image__laptop" />
            <img src={screen} alt="screen" className="screen__content" />
          </div>
          <div className="description__wrapper shift__right">
            <h3>MY INTRODUCTION</h3>
            <p className="description">
              I am a web developer with knowledge and experience in making
              simple elegant web designs. My goal is to bring to life your
              imagination and identity just as you want them. I basically turn
              designs into codes. I love to code, to spend time designing and
              making highly responsive website for my clients. To me a webpage
              is more, it defines your identity and brand message. Doing this
              isn't just work for me, its fun and its a part of my life that i
              continue to enjoy.
            </p>
            <div className="about__download">
              <a className="download__link" download href="assets/resume.pdf">
                Resume <i class="far fa-cloud-download-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="social__link">
          <a href="#">
            <i class="fab fa-github"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
