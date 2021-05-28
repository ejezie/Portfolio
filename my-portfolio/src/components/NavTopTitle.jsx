import React from "react";
import { Link } from "react-scroll";

function NavTopTitle({ name, id }) {
  return (
    <div>
      <Link to={id} smooth={true} duration={1000} delay={0}>
        <div className="navtoptitle">{name}</div>
      </Link>
    </div>
  );
}

export default NavTopTitle;
