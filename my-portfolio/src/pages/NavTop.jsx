import React from "react";
import NavTopTitle from "../components/NavTopTitle";
import { NavLink } from "react-router-dom";

function NavTop() {
  return (
    <div className="navtop">
      <div className="navtop__wrap">
        <div className="navtopname__wrap">
          <NavTopTitle name={"Darryl"} />
          <i class="fas fa-file-code"></i>
        </div>
        <div className="right">
          <div className="navtop__sub">
            <NavLink to="/">
              <NavTopTitle name={"Home"} />
            </NavLink>
            <NavLink to="/about">
              <NavTopTitle name={"About"} />
            </NavLink>
            <NavLink to="/skills">
            <NavTopTitle name={"Skills"} />
            </NavLink>
            <NavLink to="/blog">
            <NavTopTitle name={"Blog"} />
            </NavLink>
            <NavLink to="/portfolio">
            <NavTopTitle name={"Portfolio"} />
            </NavLink>
            <NavLink to="/contact">
            <NavTopTitle name={"Contact"} />
            </NavLink>
          </div>
          <div className="moon__sun">
            <div className="moon"></div>
            <div className="sun"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTop;
