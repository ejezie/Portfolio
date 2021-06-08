import React, { useEffect } from "react";

function Title({ title, span }) {
  useEffect(() => {
    const selectAppear = document.querySelector(".appear");
    const selectTitle = document.querySelector(".title");

    let options = {
      // threshold: 0.2,
      marginRoot : "0px, 0px, -200px, 0px",
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          entry.target.style = `transition: all 1s ease-in-out;`;
        }
        entry.target.classList.add("show");
        entry.target.style.animationDelay = entry.target.dataset.delay;
        console.log(entry)
      });
    }, options);

    observer.observe(selectAppear);
    observer.observe(selectTitle);
  });

  return (
    <div className="title appear" data-delay="0s">
      {title}
      <span>{span}</span>
    </div>
  );
}

export default Title;
