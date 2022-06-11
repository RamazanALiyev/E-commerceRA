import React from "react";
import Pricetotal from "./Pricetotal";
import "./_totalsection.scss";
import { Link } from "react-router-dom";

const TotalSection = () => {
  return (
    <div className="d-flex flex-column">
      <Pricetotal />
      <Link to="/payment">
        {" "}
        <button className="confirm-order">Sifarişi təsdiqlə</button>
      </Link>
    </div>
  );
};

export default TotalSection;
