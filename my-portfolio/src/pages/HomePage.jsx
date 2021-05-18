import React from "react";
import CanvasText from "../components/CanvasText";
import {NavLink} from "react-router-dom"
import me from "../images/me.png";

function HomePage() {
  return (
    <div className="homepage">
      <CanvasText />
      <div className="home__wrap">
        <div className="home__content">
          <div className="home__image">
            <img src={me} className="image__border" alt="Ejezie" />
          </div>
          <div className="home__text">
            <h2>Hi, I AM EJEZIE </h2>
            <p>
              An enthusiatic frontend developer with good eye for simple elegant
              user friendly designs
            </p>
            <NavLink to="/contacts">
              Contact me
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
