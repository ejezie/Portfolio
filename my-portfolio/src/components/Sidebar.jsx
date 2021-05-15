import React from "react";
import mypic from "../images/Chinedu.jpg";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="side__wrap">
        <div className="profile">
          <img src={mypic} alt="chinedu" />
        </div>
        <div className="side__links">
          <ul className="list__links">
            <li className="link__item">
              <NavLink to="/" exact activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="link__item">
              <NavLink to="/about" exact activeClassName="active">
                About
              </NavLink>
            </li>
            <li className="link__item">
              <NavLink to="/portfolio" exact activeClassName="active">
                Portfolio
              </NavLink>
            </li>
            <li className="link__item">
              <NavLink to="/blog" exact activeClassName="active">
                Blogs
              </NavLink>
            </li>
            <li className="link__item">
              <NavLink to="/contact" exact activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <footer className="footer">
          <i class="far fa-copyright"></i>
          <p>copy right reserved 2021</p>
        </footer>
      </div>
    </div>
  );
}

export default Sidebar;
