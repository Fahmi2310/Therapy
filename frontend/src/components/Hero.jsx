import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <>
      <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
          At MINDWELL THERAPY, we lead the way in mental health innovation, offering a comprehensive range of pioneering healthcare services. With a relentless commitment to compassionate care and expertise, our visionary team designs personalized wellness solutions that empower individuals to achieve profound and sustainable well-being. We redefine possibilities in mental health, ensuring every journey with us is transformative, purposeful, and inspiring.
          </p>
        </div>
        <div className="banner">
          <img src={imageUrl} alt="hero" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Hero;
