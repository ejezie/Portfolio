import React from "react";
import Title from "../components/Title";

function Blog() {
  return (
    <div className="blog">
      <div className="blog__heading">
        <Title title={"blogpage"} span={"blogpage"} />
      </div>
      <div className="blog__wrapper">
          <div className="blog__content">Coming Soon</div>
      </div>
    </div>
  );
}

export default Blog;
