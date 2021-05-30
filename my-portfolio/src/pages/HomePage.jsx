import React from "react";
import CanvasText from "../components/CanvasText";
import { Link } from "react-scroll";
import me from "../images/me.png";

function HomePage() {
  return (
    <div className="homepage" id="home">
      <div className="home__wrap">
        <div className="home__content">
          <div className="home__text">
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
          <div className="home__image">
            <img src={me} className="image__border" alt="Ejezie" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
