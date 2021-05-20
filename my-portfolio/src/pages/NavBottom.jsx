import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavBottom() {
  const [navToggle, setNavToggle] = useState(false);

  let navMenuClass = ["nav__menu"];
  if (navToggle) {
    navMenuClass.push("shownavmenu");
  }
  const toggleNavMenu = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="navbottom">
      <nav className="bottom__navwrap">
        <NavLink to="/" className="nav__name">
          Darryl
        </NavLink>
        <div className={navMenuClass.join(" ")}>
          <ul className="nav__gridlist">
            <li className="nav__item">
              <NavLink
                className="nav__link"
                onClick={toggleNavMenu}
                onClick={toggleNavMenu}
                to="/">
                <i class="far fa-home"></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                className="nav__link"
                onClick={toggleNavMenu}
                onClick={toggleNavMenu}
                to="/about">
                <i class="far fa-user"></i>
                <p>About</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" onClick={toggleNavMenu} to="/">
                <i class="far fa-file-alt"></i>
                <p>Blog</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" onClick={toggleNavMenu} to="/">
                <i class="far fa-tools"></i>
                <p>Skills</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" onClick={toggleNavMenu} to="/">
                <i class="far fa-image"></i>
                <p>Portfolio</p>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" onClick={toggleNavMenu} to="/">
                <i class="far fa-envelope-open-text"></i>
                <p>Contact</p>
              </NavLink>
            </li>
          </ul>
          <i class="fas fa-times nav__close" onClick={toggleNavMenu}></i>
        </div>
        <div className="nav__buttons">
          <div className="nav__toggle" onClick={toggleNavMenu}>
            <i class="fas fa-th-large"></i>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBottom;
