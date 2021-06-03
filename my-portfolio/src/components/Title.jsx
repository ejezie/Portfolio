import React,{useEffect} from 'react'

function Title({title, span}) {

    useEffect(() => {
        const selectAppear = document.querySelectorAll(".appear");
        const selectUp = document.querySelectorAll(".shift__up");
        const selectRight = document.querySelectorAll(".shift__right");
        const selectMove = document.querySelectorAll(".move");
    
        let options = {
          threshold: 0.8,
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
        selectMove.forEach((selectedUp) => {
          observer.observe(selectedUp);
        });
        selectRight.forEach((selectedUp) => {
          observer.observe(selectedUp);
        });
      });

    return (
        <div className="title appear move" data-delay= "2.2s">
            {title}
            <span>{span}</span>
        </div>
    )
}

export default Title
