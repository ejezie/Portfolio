import React from "react";
import Title from "../components/Title";
import laptop from "../images/lap.png";
import screen from "../images/code.gif";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <div className="about__wrap">
        <Title title={"About Me"} span={"About me"} />
        <div className="about__content">
          <div>
            <div className="about__images">
              <img src={laptop} alt="laptop" className="image__laptop" />
              <img src={screen} alt="screen" className="screen__content" />
            </div>
          </div>
          <div className="description__wrapper">
            <h3>My Introduction</h3>
            <p className="description">
              I am a web developer with knowledge and experience in making
              simple elegant web designs. My goal is to bring to life your
              imagination and idendity just as you want them. I basically turn
              designs into codes.
            </p>
            <div className="about__download">
              <NavLink download="" to="assets/resume.pdf">
                Download <i class="far fa-cloud-download-alt"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
