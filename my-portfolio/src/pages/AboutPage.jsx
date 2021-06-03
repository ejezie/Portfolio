import React, { useEffect } from "react";
import Title from "../components/Title";
import laptop from "../images/lap.png";
import screen from "../images/code.gif";
import resume from "../assets/resume.pdf"

function About() {
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
    <div className="about" id="about">
      <div className="about__wrap">
        <div className="about__title appear">
          <Title title={"About Me"} span={"About me"} />
        </div>
        <div className="about__content">
          <div className="about__images appear shift__up" data-delay = "0.5s">
            <img src={laptop} alt="laptop" className="image__laptop" />
            <img src={screen} alt="screen" className="screen__content" />
          </div>
          <div className="description__wrapper appear shift__up" data-delay = "1s">
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
            <div className="about__download appear shift__up" data-delay = "1.5s">
              <a className="download__link" download href={resume}>
                Resume <i class="far fa-cloud-download-alt"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="social__link appear shift__up" data-delay = "2s">
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
