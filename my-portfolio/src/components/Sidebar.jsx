import React from "react";
import mypic from "../images/Chinedu.jpg";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="profile">
        <img src={mypic} alt="chinedu" />
      </div>
      <div className="side__links">
        <ul className="list__links">
          <li className="link__item">
            <Link></Link>
          </li>
        </ul>
      </div>
    </div>  
  );
}

export default Sidebar;
