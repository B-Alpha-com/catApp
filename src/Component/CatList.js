import React from "react";
import Cats from "./Cats";

const CatList = ({ catsPhoto }) =>
  catsPhoto.map((cat) => (
    <div className="catList">
      <Cats src={cat.src} placeholder={cat.avg_color} />
    </div>
  ));

export default CatList;
