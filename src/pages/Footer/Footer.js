import React from "react";
import "./_footer.scss";
import footerlogo from "../../assets/images/footerlogo.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { BiCopyright } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="center">
        <div className="top">
          <div className="eachDiv">
            <div className="footerlogo">
              <img src={footerlogo} alt="pic" />
              <p className="logoName">Tello</p>
            </div>
            <div className="socialIcons">
              <FaInstagram className="iconsSocial" />
              <FiFacebook className="iconsSocial" />
              <AiOutlineYoutube className="iconsSocial" />
              <BsTwitter className="iconsSocial" />
            </div>
          </div>
          <div className="eachDiv">
            <h1 className="menu">Menu</h1>
            <ul className="menu-list">
              <li>Yeni</li>
              <li>Endirimlər</li>
              <li>Aksessuarlar</li>
              <li>Bütün brendlər</li>
            </ul>
          </div>
          <div className="eachDiv">
            <h1 className="help">Kömək</h1>
            <ul className="help-list">
              <li>Tez-tez soruşulan suallar</li>
              <li>Çatdırılma xidməti</li>
              <li>Geri qaytarılma şərtləri</li>
            </ul>
          </div>
          <div className="eachDiv">
            <h1 className="contact">Əlaqə</h1>
            <ul className="contact-list">
              <li><GoLocation /><p>M. K. Ataturk avenue 89, Baku, Azerbaijan</p></li>
              <li><HiOutlineMail /><p>example@gmail.com</p></li>
              <li><BsTelephone /><p>*2108</p></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <p><BiCopyright className="copyright"/>PeojectX 2021. Bütün hüquqlar qorunur.</p>
        </div>
        <div className="right">
          <p>Qaydalar və şərtlər</p>
          <p>Məxfilik siyasəti</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
