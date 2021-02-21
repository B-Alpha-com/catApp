import React from "react";

const Cats = ({ src, placeholder }) => {
  return (
    <img className="catImages" placeholder={placeholder} src={src.large} />
  );
};

export default Cats;
