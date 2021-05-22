import React from "react";

function Icon({ icon_title, icon }) {
  return (
    <div className="icon">
      <div className="icon_animate">
        <span>
          <img src={icon} alt="icon" />
        </span>
      </div>
      {/* <p>{icon_title}</p> */}
    </div>
  );
}

export default Icon;
