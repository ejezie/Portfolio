import React from "react";

function HomePage() {
  return (
    <div className="homepage">
      <div className="hero">
        <h2>
          {" "}
          HI! <i class="fas fa-hand-paper"></i> I AM <span>EJEZIE CHINEDU</span>{" "}
          A WEB DEVELOPER
        </h2>
        <p>I PUT YOU ON THE WORLD WIDE WEB...</p>
      </div>
      <section>
        <div className="earth"></div>
        {/* <div className="circle"> */}
        {/* </div> */}
      </section>
      <div className="fade"></div>
    </div>
  );
}

export default HomePage;
