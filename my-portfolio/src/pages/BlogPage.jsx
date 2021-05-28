import React from "react";
import Loader from "react-loader-spinner";
import Title from "../components/Title";

function Blog() {
  return (
    <div className="blog" id="blog">
      <div className="blog__heading">
        <Title title={"blogpage"} span={"blogpage"} />
      </div>
      <div className="blog__wrapper">
        <div className="blog__content">
          Coming Soon<div className="content__effect"></div>
          <div className="content__effects"></div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
