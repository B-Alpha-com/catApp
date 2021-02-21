import React from "react";
import Cats from "./Cats";

const CatList = ({ catsPhoto }) =>
  catsPhoto.map((cat) => <Cats src={cat.src} placeholder={cat.avg_color} />);

export default CatList;
