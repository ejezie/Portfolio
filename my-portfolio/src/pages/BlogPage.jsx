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
        <Loader
          type="BallTriangle"
          color="#29335f"
          height={60}
          width={60}
          className="loader"
        />
        <div className="blog__content">Coming Soon</div>
      </div>
    </div>
  );
}

export default Blog;
