import React from "react";
import { NavLink } from "react-router-dom";

function NavBottom() {
  return (
    <div className="navbottom">
      <nav className="bottom__navwrap">
        <NavLink to="/" className="nav__name">
          Ejezie
        </NavLink>
        <div className="nav__menu">
          <ul className="nav__gridlist">
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i class="far fa-home"></i><p>Home</p> 
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i class="far fa-user"></i><p>About</p> 
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i class="far fa-file-alt"></i><p>Skills</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i class="far fa-briefcase"></i><p>Services</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i class="far fa-image"></i><p>Portfolio</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to="/">
                <i class="far fa-envelope-open-text"></i><p>Contactme</p>
              </NavLink>
            </li>
            <i class="fas fa-times nav__close"></i>
          </ul>
        </div>
        <div className="nav__buttons">
          <div className="nav__toggle">
            <i class="fas fa-th-large"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBottom;
