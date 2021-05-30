import React, { useState } from "react";
import NavTopTitle from "../components/NavTopTitle";
import { Link } from "react-scroll";

function NavTop({ switchTheme }) {
const [star, setStar] = useState('reveal');

const m

  return (
    <div className="navtop">
      <div className="navtop__wrap">
        <div className="navtopname__wrap">
          <NavTopTitle name={"Darryl"} />
          <i class="fas fa-file-code"></i>
        </div>
        <div className="right">
          <div className="navtop__sub">
            <Link smooth={true} to="home">
              <NavTopTitle name={"Home"} id={"home"} />
            </Link>
            <Link smooth={true} to="/about">
              <NavTopTitle name={"About"} id={"about"} />
            </Link>
            <Link smooth={true} to="/skills">
              <NavTopTitle name={"Skills"} id={"skills"} />
            </Link>
            <Link smooth={true} to="/blog">
              <NavTopTitle name={"Blog"} id={"blog"} />
            </Link>
            <Link smooth={true} to="/portfolio">
              <NavTopTitle name={"Portfolio"} id={"portfolio"} />
            </Link>
            <Link smooth={true} to="/contact">
              <NavTopTitle name={"Contact"} id={"contact"} />
            </Link>
          </div>
          <div className="moon__sun">
            <div className="moon"></div>
            <div className="sun" onClick={switchTheme}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
