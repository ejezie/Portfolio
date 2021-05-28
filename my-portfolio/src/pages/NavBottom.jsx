import React, { useState } from "react";
import { Link } from "react-scroll";

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
        <Link to="home" smooth={true} duration={1000} className="nav__name">
          Darryl
        </Link>
        <div className={`nav__menu ${navToggle && "shownavmenu"}`}>
          <ul className="nav__gridlist">
            <li className="nav__item">
              <Link
                smooth={true}
                duration={1000}
                className="nav__link"
                onClick={toggleNavMenu}
                to="home">
                <i class="far fa-home"></i>
                <p>Home</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                smooth={true}
                duration={1000}
                className="nav__link"
                onClick={toggleNavMenu}
                to="about">
                <i class="far fa-user"></i>
                <p>About</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                smooth={true}
                duration={1000}
                className="nav__link"
                onClick={toggleNavMenu}
                to="blog">
                <i class="far fa-file-alt"></i>
                <p>Blog</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                smooth={true}
                duration={1000}
                className="nav__link"
                onClick={toggleNavMenu}
                to="skills">
                <i class="far fa-tools"></i>
                <p>Skills</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                smooth={true}
                duration={1000}
                className="nav__link"
                onClick={toggleNavMenu}
                to="portfolio">
                <i class="far fa-image"></i>
                <p>Portfolio</p>
              </Link>
            </li>
            <li className="nav__item">
              <Link
                smooth={true}
                duration={1000}
                className="nav__link"
                onClick={toggleNavMenu}
                to="contact">
                <i class="far fa-envelope-open-text"></i>
                <p>Contact</p>
              </Link>
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
