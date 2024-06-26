import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <h2>Biography</h2>
          <h3>Who We Are</h3>
          <p>
          At MINDWELL THERAPY, we are dedicated to revolutionizing mental health care with a forward-thinking approach. Founded in 2024, our mission is rooted in compassion and innovation, striving to empower individuals on their journey to holistic well-being.
          </p>
          <h3>Our Vision</h3>
          <p>We are working on a MERN STACK PROJECT.</p>
          <p>
          In 2024, we embarked on an ambitious MERN STACK PROJECT aimed at enhancing the accessibility and effectiveness of our services. Through cutting-edge technology and strategic partnerships, we continue to push the boundaries of mental health care, ensuring every individual receives personalized and impactful support.
          </p>
          <h3>Commitment to Excellence</h3>
          <p>Driven by our commitment to excellence, we have embarked on a transformative journey with our MERN STACK PROJECT in 2024. Through cutting-edge technology and strategic partnerships, we aim to enhance accessibility and effectiveness in mental health care delivery.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
