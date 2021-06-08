import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import me from "../images/me.png";
import Title from "../components/Title";
import laptop from "../images/lap.png";
import screen from "../images/code.gif";
import resume from "../assets/resume.pdf";
import Slide from "../components/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Thumbs } from "swiper";
import "swiper/swiper-bundle.css";
import mewzik from "../images/mewzik.png";
import webp from "../images/webp.png";
import house from "../images/house.png";
import port from "../images/port.png";
import dora from "../images/dora.png";
import movies from "../images/movies.png";


SwiperCore.use([Navigation, Pagination, Thumbs]);

function HomePage({ isDark }) {
  // const [text, image, scroll, visible] = useOnScreen({ rootMargin: "-200px" });

  const items = [
    {
      name: mewzik,
      text: "Tools: HTML, CSS, React, Context API...",
      view: "https://mewzik.vercel.app/",
    },
    {
      name: movies,
      text: " HTML, CSS, React and Axios...",
      view: "https://movies-hub.vercel.app/",
    },
    {
      name: house,
      text: " HTML, CSS and Javascript",
      view: "https://github.com/ejezie",
    },
    {
      name: port,
      text: " HTML, SCSS and React ",
      view: "https://github.com/ejezie",
    },
    {
      name: dora,
      text: " HTML, CSS and Javascript",
      view: "https://github.com/ejezie",
    },
    {
      name: webp,
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
        <h2 className="text__portion__header"> WEB APPLICATION</h2>
        <p>{item.text}</p>
        <div className="slide__button">
          <a href={item.view}>See Demo</a>
        </div>
      </div>
    </SwiperSlide>
  ));

  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");
    const selectUp = document.querySelectorAll(".shift__up");
    const selectRight = document.querySelectorAll(".shift__right");
    const selectLeft = document.querySelectorAll(".shift__left");

    const options = {
      threshold: 0.2,
      rootMargin : "-200px",
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log(entry)
          entry.target.classList.add("show");
          entry.target.style.animationDelay = entry.target.dataset.delay;
        }
      });
    }, options);

    selectAppear.forEach((selectedAppear) => {
      observer.observe(selectedAppear);
    });
    selectUp.forEach((selectedUp) => {
      observer.observe(selectedUp);
    });
    selectLeft.forEach((selectedUp) => {
      observer.observe(selectedUp);
    });
    selectRight.forEach((selectedUp) => {
      observer.observe(selectedUp);
    });
    return ()=>{
      selectAppear.forEach((selectedAppear) => {
        observer.unobserve(selectedAppear);
      });
      selectUp.forEach((selectedUp) => {
        observer.unobserve(selectedUp);
      });
      selectLeft.forEach((selectedUp) => {
        observer.unobserve(selectedUp);
      });
      selectRight.forEach((selectedUp) => {
        observer.unobserve(selectedUp);
      });
    }
  });

  return (
    <div>
      <div className="home__wrap" id="home">
        <div className="home__content">
          <div className="home__text appear shift__up" data-delay="1s">
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
            <Link to="about" smooth={true} duration={1000} className="scroll appear shift__up" data-delay="1.5s">
              <i class="fas fa-mouse mouse"></i>
              <p className="scroll__p">scroll</p>
              <i class="fas fa-long-arrow-alt-down arrow"></i>
            </Link>
          </div>
          <div className="home__image appear shift__up" data-delay="0.5s">
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
            <div className="about__images appear shift__up" data-delay="0.5s">
              <img src={laptop} alt="laptop" className="image__laptop" />
              <img src={screen} alt="screen" className="screen__content" />
            </div>
            <div
              className="description__wrapper appear shift__up"
              data-delay="1s">
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
              <div
                className="about__download appear shift__up"
                data-delay="1.5s">
                <a className="download__link" download href={resume}>
                  Resume <i class="far fa-cloud-download-alt"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="social__link appear shift__up" data-delay="2s">
            <a href="#">
              <i class="fab fa-github"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="#">
              <i class="fab fa-facebook-square"></i>
            </a>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="skills appear" id="skills">
        <div className="skills__wrapper">
          <div className="skills__heading appear">
            <Title title={"MY SKILLS"} span={"MY SKILLS"} />
          </div>
          <div className="skills__container">
            <div className="skills__content appear shift__up" data-delay="1s">
              <div
                className="skills__header appear shift__left"
                data-delay="2s">
                <i class="fas fa-code skills__icon"></i>
                <h2>Frontend Dev Tools</h2>
              </div>
              <div className="skills__list shift__left">
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

            <div className="skills__content appear shift__up" data-delay="1s">
              <div
                className="skills__header appear shift__left"
                data-delay="2s">
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
          slidesPerView={1}
          className="appear shift__up"
          data-delay="1.2s">
          {slides}
        </Swiper>
      </div>
      {/*  */}
      <div className="blog" id="blog">
        <div className="blog__heading appear">
          <Title title={"blogpage"} span={"blogpage"} />
        </div>
        <div className="blog__wrapper">
          <div className="blog__content appear shift__up" data-delay="1.2s">
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
      <div className="contact appear" id="contact">
        <div className="contact__title appear">
          <Title title={"Contact"} span={"Contact"} />
        </div>
        <div className="wrapper">
          <div className="contact__wrapper">
            <div className="contact__icons appear shift__up" data-delay="0.5s">
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
            <form
              className="contact__form appear shift__up"
              data-delay="1s"
              action="">
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
              <a
                href="#"
                className="contact__button appear shift__up"
                data-delay="1.5s">
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
