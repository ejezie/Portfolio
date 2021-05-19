import React from "react";
import NavTopTitle from "../components/NavTopTitle";

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
          <NavTopTitle name={"Home"} />
          <NavTopTitle name={"About"} />
          <NavTopTitle name={"Skills"} />
          <NavTopTitle name={"Services"} />
          <NavTopTitle name={"Portfolio"} />
          <NavTopTitle name={"Contact"} />
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
