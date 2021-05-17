import React from "react";
import CanvasText from "../components/CanvasText";

function HomePage() {
  return (
    <div className="homepage">
      <div className="home__wrap home__grid">
        <div className="home__content">
          <div className="home__image">
            <svg
              id="visual"
              viewBox="0 0 900 600"
              width="600"
              height="600"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1">
              <g transform="translate(432.81838912410234 302.76395180951215)">
                <path
                  d="M121 -140.5C151.5 -90.5 167.3 -45.3 178.7 11.4C190.1 68.1 197.2 136.2 166.7 179.7C136.2 223.2 68.1 242.1 6.4 235.8C-55.4 229.4 -110.8 197.8 -135.8 154.3C-160.8 110.8 -155.4 55.4 -147.5 7.9C-139.6 -39.6 -129.2 -79.2 -104.2 -129.2C-79.2 -179.2 -39.6 -239.6 2.8 -242.4C45.3 -245.3 90.5 -190.5 121 -140.5"
                  fill="none"
                  stroke="#29335f"
                  stroke-width="6"></path>
              </g>
            </svg>
          </div>
          <CanvasText />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
