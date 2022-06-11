import React from "react";
import Service from "../Servicess/service/Service";
import "./_servicess.scss";
import box from "../../../assets/images/box.png";
import card from "../../../assets/images/card-pos.png";
import medal from "../../../assets/images/medal-star.png";

const Servicess = () => {
  return (
    <div className="services">
      <div className="center">
        <div className="all-services">
          <Service
            img={box}
            title={"Çatdırılma"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
          />
          <Service
            img={card}
            title={"Kredit"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
          />
          <Service
            img={medal}
            title={"Zəmanət"}
            text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit "}
          />
        </div>
      </div>
    </div>
  );
};

export default Servicess;
