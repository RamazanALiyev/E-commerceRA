import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import backgrounde from '../../../assets/images/sliderlineargradient.png'
// import { fetchPhones } from "../../../Features/PhoneSlice";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./_mainslider.scss";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Mainslider() {
  const phones = useSelector((state) => state.phones.phones);
  console.log(phones)
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7000,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {phones.slice(0, 3).map((phone, index) => (
          <SwiperSlide key={index} className="Mainslider">
            <div className="center" style={{ backgroundImage: "url(" + backgrounde + ")" }}>
              <div className="slidertext">
                <h1>Buy & Sell</h1>
                <h2>What's Now & Next</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate illum molestiae incidunt distinctio.
                </p>
              </div>
              <div className="sliderimg">
                <img src={phone.image.url} alt='pic' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
export default Mainslider;