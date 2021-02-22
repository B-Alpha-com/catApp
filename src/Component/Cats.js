import React from "react";

const Cats = ({ src, placeholder }) => (
  <img className="catImages" placeholder={placeholder} src={src.medium} />
);

export default Cats;
