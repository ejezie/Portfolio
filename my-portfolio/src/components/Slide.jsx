import React from "react";
import Icon from "./Icon";
import js_icon from "../images/js.png";
import fire_icon from "../images/fire.png";
import mongo_icon from "../images/mongo.png";
import nodejs_icon from "../images/nodejs.png";
import python_icon from "../images/python.png";
import git_icon from "../images/git.png";
import react_icon from "../images/react.png";
import express_icon from "../images/express.png";
import redux_icon from "../images/redux.png";
import vs_icon from "../images/vs.png";
import css_icon from "../images/css.png";
import html_icon from "../images/html.png";

function Slide() {
  return (
    <div className="slide">
      <div className="slide__title">
        <h2>Tools, Frameworks And Liberies</h2>
        {/* <i class="fad fa-toolbox toolbox"></i> */}
      </div>
      <div className="slide__wrapper">
        <div className="block"></div>
        <div className="slide__track">
          <div className="slide__languages">
            <Icon icon_title={"JavaScript"} icon={js_icon} />
            <Icon icon_title={"Python"} icon={python_icon} />
            <Icon icon_title={"CSS"} icon={css_icon} />
            <Icon icon_title={"HTML"} icon={html_icon} />
            <Icon icon_title={"Firebase"} icon={fire_icon} />
            <Icon icon_title={"MongoDB"} icon={mongo_icon} />
            <Icon icon_title={"Node JS"} icon={nodejs_icon} />
            <Icon icon_title={"Git"} icon={git_icon} />
            <Icon icon_title={"React"} icon={react_icon} />
            <Icon icon_title={"Express Js"} icon={express_icon} />
            <Icon icon_title={"Redux"} icon={redux_icon} />
            <Icon icon_title={"Visual Studio"} icon={vs_icon} />
          </div>
        </div>
        <div className="block__two"></div>
      </div>
    </div>
  );
}

export default Slide;
