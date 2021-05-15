import React from "react";
import laptop from "../images/laptop.jpg";

function AboutSection() {
  return (
    <div className="about__section">
      <div className="image__section">
        <div className="img">
          <img src={laptop} alt="" />
        </div>
        <div className="about__info">
          <h4>
            I am <span>Ejezie Chinedu</span>
          </h4>
          <p>
            I am a web developer who loves to build simple, elegant web pages
            that are fully responsive and user experience friendly. My goal is
            to bring imagination and creativity to life with my codes. I am an
            artist on the world wide web and i am happy to paint your
            imagination and identity.
          </p>
          <div className="about__details"></div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
