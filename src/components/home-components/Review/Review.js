import React from "react";
import "./_review.scss";
import Bigrew from "../Review/big-rew/Bigrew";
import Smallrew from "./small-rew/Smallrew";
import backimage from '../../../assets/images/image2.png'
import backimage2 from '../../../assets/images/image7.png'


const Review = () => {
  return (
    <div className="review">
      <div className="center">
        <div className="all-rews">
          <Bigrew background = {backimage} device={"Telefon"} countpro={"Məhsul sayı: 322"} gotoproduc={"Məhsullara keçid  >"}/>
          <div  className="small">
            <Smallrew background = {backimage2} device={"Smart saat"} countpro={"Məhsul sayı: 46"} gotoproduc={"Məhsullara keçid  >"} />
            <Smallrew background = {backimage2} device={"Aksessuar"} countpro={"Məhsul sayı: 891"} gotoproduc={"Məhsullara keçid  >"}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Review;
