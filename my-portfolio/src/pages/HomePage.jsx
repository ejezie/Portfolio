import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import me from "../images/me.png";
import Title from "../components/Title";
import laptop from "../images/lap.png";
import screen from "../images/code.gif";
import resume from "../assets/resume.pdf";
import Slide from "../components/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { gsap, TimelineLite, Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/swiper-bundle.css";
import mewzik from "../images/mewzik.png";
import webp from "../images/webp.png";
import house from "../images/house.png";
import port from "../images/port.png";
import dora from "../images/dora.png";
import movies from "../images/movies.png";

gsap.registerPlugin(ScrollTrigger);

SwiperCore.use([Navigation, Pagination]);

function HomePage({ isDark }) {
  let t1 = new TimelineLite({ delay: 1 });

  useEffect(() => {
    t1.from(
      ".home__image",
      {
        y: 65,
        opacity: 0,
        ease: Power2.easeIn,
        delay: 0,
        duration: 1,
      },
      "Start"
    );
    t1.from(
      ".home__text",
      {
        y: 65,
        opacity: 0,
        ease: Power2.easeIn,
        delay: 0.5,
        duration: 1,
      },
      "Start"
    );
    t1.from(
      ".contact__home",
      {
        y: 65,
        opacity: 0.5,
        ease: Power2.easeIn,
        delay: 1,
        duration: 1.5,
      },
      "Start"
    );
    t1.from(
      ".scroll",
      {
        y: 65,
        opacity: 0,
        ease: Power2.easeIn,
        delay: 1.5,
        duration: 2,
      },
      "Start"
    );
    gsap.from(".about", {
      y: 65,
      opacity: 0,
      ease: Power2.easeIn,
      delay: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".about",
      },
    });
    gsap.from(".skills", {
      y: 65,
      opacity: 0,
      ease: Power2.easeIn,
      delay: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".skills",
      },
    });
    gsap.from(".portfolio", {
      y: 65,
      opacity: 0,
      ease: Power2.easeIn,
      delay: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".portfolio",
      },
    });
    gsap.from(".blog", {
      y: 65,
      opacity: 0,
      ease: Power2.easeIn,
      delay: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".blog",
      },
    });
    gsap.from(".contact", {
      y: 65,
      opacity: 0,
      ease: Power2.easeIn,
      delay: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".contact",
      },
    });
  }, []);
  const items = [
    {
      name: mewzik,
      title: "Mewzik",
      text: "Tools: HTML, CSS, React, Context API...",
      view: "https://mewzik.vercel.app/",
    },
    {
      name: movies,
      title: "Moviezhub",
      text: " HTML, CSS, React and Axios...",
      view: "https://movies-hub.vercel.app/",
    },
    {
      name: house,
      title: "Comfty House",
      text: " HTML, CSS and Javascript",
      view: "https://github.com/ejezie",
    },
    {
      name: port,
      title: "Portfolio",
      text: " HTML, SCSS and React ",
      view: "https://github.com/ejezie",
    },
    {
      name: dora,
      title: "Doragroovykicthen",
      text: " HTML, CSS and Javascript",
      view: "https://github.com/ejezie",
    },
    {
      name: webp,
      title: "Tour",
      text: " HTML, CSS and Javascript",
      view: "https://ejezie.github.io/web-project2/",
    },
  ];
  const slides = items.map((item) => (
    <SwiperSlide
      id={item.name}
      tag="li"
      className="image__wrapper"
      style={{ listStyle: "none" }}>
      <div className="image__portion">
        <img src={item.name} alt="" className="slide__image" />
        <div className="image__hover">
          <div className="view__project">
            <a href={item.view}>VIEW PROJECT</a>
          </div>
        </div>
      </div>
      <div className="text__portion">
        <h2 className="text__portion__header">{item.title}</h2>
        <p>{item.text}</p>
        <div className="slide__button">
          <a href={item.view}>See Demo</a>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div>
      <div className="home__wrap" id="home">
        <div className="home__content">
          <div className="home__text">
            <h2>Hi, I AM DARRYL </h2>
            <p className="describe__p">
              An enthusiatic frontend developer with a good eye for simple
              elegant user friendly designs
            </p>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              className="contact__home">
              Contact me<i class="fal fa-paper-plane sendt"></i>
            </Link>
            <Link to="about" smooth={true} duration={1000} className="scroll">
              <i class="fas fa-mouse mouse"></i>
              <p className="scroll__p">scroll</p>
              <i class="fas fa-long-arrow-alt-down arrow"></i>
            </Link>
          </div>
          <div className="home__image">
            <img src={me} className="image__border" alt="Ejezie" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="about" id="about">
        <div className="about__wrap">
          <div className="about__title appear">
            <Title title={"About Me"} span={"About me"} />
          </div>
          <div className="about__content">
            <div className="about__images">
              <img src={laptop} alt="laptop" className="image__laptop" />
              <img src={screen} alt="screen" className="screen__content" />
            </div>
            <div className="description__wrapper">
              <h3>MY INTRODUCTION</h3>
              <p className="description">
                I am a web developer with knowledge and experience in making
                simple elegant web designs. My goal is to bring to life your
                imagination and identity just as you want them. I basically turn
                designs into codes. I love to code, to spend time designing and
                making highly responsive website for my clients. To me a webpage
                is more, it defines your identity and brand message. Doing this
                isn't just work for me, its fun and its a part of my life that i
                continue to enjoy.
              </p>
              <div className="about__download">
                <a className="download__link" download href={resume}>
                  Resume <i class="far fa-cloud-download-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="social__link">
            <a href="https://github.com/ejezie">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://github.com/ejezie">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/ejezie">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="https://github.com/ejezie">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="skills" id="skills">
        <div className="skills__wrapper">
          <div className="skills__heading">
            <Title title={"MY SKILLS"} span={"MY SKILLS"} />
          </div>
          <div className="skills__container">
            <div className="skills__content">
              <div className="skills__header">
                <i class="fas fa-code skills__icon"></i>
                <h2>Frontend Dev Tools</h2>
              </div>
              <div className="skills__list">
                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">HTML</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__html"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">CSS</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__css"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">JavaSript</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__javascript"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">React</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__react"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">SASS</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__sass"></span>
                </div>
              </div>
            </div>

            <div className="skills__content">
              <div className="skills__header">
                <i class="fas fa-server skills__icon icon__two"></i>
                <h2>Backend Dev Tools</h2>
              </div>
              <div className="skills__list">
                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">Node Js</h3>{" "}
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__node"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">Express Js</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__express"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">Mongo DB</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__mongo"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">Python</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__python"></span>
                </div>

                <div className="skills__data">
                  <div className="skills__title">
                    <h3 className="skills__name">Django</h3>
                  </div>
                </div>
                <div className="skill__bar">
                  <span className="skill__percentage skill__django"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Slide isDark={isDark} />
      </div>
      {/*  */}
      <div className="portfolio" id="portfolio">
        <div className="portfolio__heading">
          <Title title={"PORTFOLIO"} span={"PORTFOLIO"} />
        </div>
        <Swiper
          id="main"
          tag="section"
          wrapperTag="ul"
          navigation
          pagination
          slidesPerView={1}>
          {slides}
        </Swiper>
      </div>
      {/*  */}
      <div className="blog" id="blog">
        <div className="blog__heading">
          <Title title={"blogpage"} span={"blogpage"} />
        </div>
        <div className="blog__wrapper">
          <div className="blog__content">
            <p>Coming Soon</p>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="contact" id="contact">
        <div className="contact__title">
          <Title title={"Contact"} span={"Contact"} />
        </div>
        <div className="wrapper">
          <div className="contact__wrapper">
            <div className="contact__icons" data-delay="0.5s">
              <div className="icon__call icon">
                <i class="far fa-phone-alt"></i>
                <div className="call__text">
                  <h3>Call Me</h3>
                  <span>08142074224</span>
                </div>
              </div>
              <div className="icon__email icon">
                <i class="far fa-envelope"></i>
                <div className="call__text">
                  <h3>Email</h3>
                  <span>ejeziechinedu07@gmail.com</span>
                </div>
              </div>
              <div className="icon_local icon">
                <i class="far fa-map-marker-alt icon__location"></i>
                <div className="call__text">
                  <h3>Location</h3>
                  <span>Lagos</span>
                </div>
              </div>
            </div>
            <form className="contact__form" action="">
              <div className="name__email">
                <div className="contact__content" id="contact__content1">
                  <label htmlFor="">Name</label>
                  <input type="text" className="contact__input" />
                </div>
                <div className="contact__content">
                  <label htmlFor="">Email</label>
                  <input type="text" className="contact__input" />
                </div>
              </div>
              <div className="contact__content">
                <label htmlFor="">Project Type</label>
                <input type="text" className="contact__input" />
              </div>
              <div className="contact__content">
                <label htmlFor="">Message</label>
                <textarea
                  name=""
                  className="contact__input"
                  id=""
                  cols="30"
                  rows="7"></textarea>
              </div>
              <a href="https://gmail.com" className="contact__button">
                Send Message <i class="fal fa-paper-plane send"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
