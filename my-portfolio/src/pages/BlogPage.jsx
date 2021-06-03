import React, { useEffect } from "react";
import Loader from "react-loader-spinner";
import Title from "../components/Title";

function Blog() {
  useEffect(() => {
    const selectAppear = document.querySelectorAll(".appear");

    let options = {
      threshold: 0.5,
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          console.log(entry);
          if (entry.target.className === "blog appear") {
            entry.target.style.animation = `anim1 1s forwards ease-in-out`;
          }
        } else {
          entry.target.style.animation = `none`;
        }
      });
    });

    selectAppear.forEach((selectedAppear) => {
      observer.observe(selectedAppear);
    });
  });

  return (
    <div className="blog" id="blog">
      <div className="blog__heading">
        <Title title={"blogpage"} span={"blogpage"} />
      </div>
      <div className="blog__wrapper">
        <div className="blog__content appear shift__up" data-delay="2.2s">
          <p>Coming Soon</p>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Blog;
