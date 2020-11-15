import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Intro() {
  React.useEffect(() => {
    AOS.init({ duration: 500, anchorPlacement: "top-right" });
  }, []);
  return (
    <section className="intro">
      <div className="intro-containter">
        <div className="intro-content">
          <h1
            className="heading-name"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Make a Diet Easliy, Just Drag The Food You Want
          </h1>
          <p
            className="site-description"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            We Make Diets More Easy And Fun To Do What Are Waiting For Try To Do
            One Youself
          </p>
          <a
            href="#meals"
            class="try-button"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            Try Now
          </a>
        </div>
        <div className="intro-pic">
          <img
            src="./styles/imgs/food.jpg"
            className="pic"
            data-aos="fade-up-left"
            data-aos-delay="300"
          />
        </div>
      </div>
    </section>
  );
}
export default Intro;
