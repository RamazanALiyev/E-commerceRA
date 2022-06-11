import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./_brands.scss";
// import required modules
import { Pagination } from "swiper";
import Toshiba from "../../../assets/images/toshiba.png";
import Philips from "../../../assets/images/Philips.png";
import Hp from "../../../assets/images/HP.png";
import Electrolux from "../../../assets/images/Electrolux.png";
import Gorenje from "../../../assets/images/gorenje.png";
import Bosch from "../../../assets/images/Bosch.png";
import Electrolux2 from "../../../assets/images/Electrolux.png";

const imgArr = [Toshiba, Philips, Hp, Electrolux, Gorenje, Bosch, Electrolux2];

function Brands() {
  return (
    <>
      <div className="mySwiper brend">
        <Swiper
          slidesPerView={6.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="center"
        >
          {imgArr.map((img, index) => (
            <SwiperSlide className="Brand" key={index}>
              <div className="Brands">
                <img src={img} alt="pic" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
export default Brands;

