import React from "react";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__name">
            <h2>Darryl</h2>
            <p>Frontend Developer</p>
          </div>
          <div className="footer__links">
            <Link className="link" to="skills" smooth={true} duration={1000}>
              Skills
            </Link>
            <Link className="link" to="portfolio" smooth={true} duration={1000}>
              Portfolio
            </Link>
            <Link className="link" to="contact" smooth={true} duration={1000}>
              ContactMe
            </Link>
          </div>
          <div className="footer__social">
            <a href="https://github.com/ejezie">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://github.com/ejezie">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ejezie">
              <i class="fab fa-twitter-square"></i>
            </a>
          </div>
        </div>
        <div className="trade__mark">
          <i class="far fa-copyright"></i>
          <p>Darryl. All right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
