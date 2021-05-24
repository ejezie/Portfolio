import React from "react";
import Title from "../components/Title";
import laptop from "../images/lap.png";
import screen from "../images/code.gif";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about__wrap">
        <div className="about__title">
          <Title title={"About Me"} span={"About me"} />
        </div>
        <div className="about__content">
          <div className="about__images">
            <img src={laptop} alt="laptop" className="image__laptop" />
            <img src={screen} alt="screen" className="screen__content" />
          </div>
          <div className="description__wrapper">
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
              <NavLink
                className="download__link"
                download
                to="assets/resume.pdf">
                Resume <i class="far fa-cloud-download-alt"></i>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="social__link">
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
          <a href="#"><i class="fab fa-twitter-square"></i></a>
          <a href="#"><i class="fab fa-facebook-square"></i></a>
        </div>
      </div>
    </div>
  );
}

export default About;
