import React, { useEffect } from "react";
import Title from "../components/Title";
import Slide from "../components/Slide";

function SkillsPage({ isDark }) {
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");
    const selectUp = document.querySelectorAll(".shift__up");
    const selectRight = document.querySelectorAll(".shift__right");
    const selectLeft = document.querySelectorAll(".shift__left");

    let options = {
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style = `transition: all 1s ease-in-out;`;
        }
        entry.target.classList.add("show");
        entry.target.style.animationDelay = entry.target.dataset.delay;
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
  });

  return (
    <div className="skills appear" id="skills">
      <div className="skills__wrapper">
        <div className="skills__heading">
          <Title title={"MY SKILLS"} span={"MY SKILLS"} />
        </div>
        <div className="skills__container">
          <div className="skills__content appear shift__up" data-delay="1s">
            <div className="skills__header appear shift__left" data-delay="2s">
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
            <div className="skills__header appear shift__left" data-delay="2s">
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
  );
}

export default SkillsPage;
