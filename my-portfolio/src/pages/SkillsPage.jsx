import React, { useEffect } from "react";
import Title from "../components/Title";
import Slide from "../components/Slide";

function SkillsPage({ isDark }) {
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");
    const selectLeft = document.querySelectorAll(".shift__left");
    const selectRight = document.querySelectorAll(".shift__right");

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log(entry);
          if (entry.target.className === "skills appear") {
            entry.target.style.animation = `anim1 1s forwards ease-in-out`;
          }
          if (entry.target.className === "skills__list shift__left") {
            entry.target.style.animation = `anim2 1s forwards ease-in-out`;
          }
          if (entry.target.className === "skills__content shift__right") {
            entry.target.style.animation = `anim3 1s forwards ease-in-out`;
          }
        } else {
          entry.target.style.animation = `none`;
        }
      });
    });

    selectAppear.forEach((selectedAppear) => {
      observer.observe(selectedAppear);
    });
    selectLeft.forEach((selectedLeft) => {
      observer.observe(selectedLeft);
    });
    selectRight.forEach((selectedRight) => {
      observer.observe(selectedRight);
    });
  });

  return (
    <div className="skills appear" id="skills">
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

          <div className="skills__content shift__right">
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
  );
}

export default SkillsPage;
