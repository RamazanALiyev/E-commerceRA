import React from "react";
import "../sidebar/_sidebar.scss";

import { GiCancel } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Sidebar = ({ setShowsidebar, focusInput, setFilterName }) => {
  const closeSidebarHandler = () => {
    setShowsidebar(false);
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  };
  const handler = (e) =>{
    setFilterName(e.target.innerHTML);
    setShowsidebar(false)
    document.getElementsByTagName("body")[0].style.overflow = "scroll";
  }
  const categories = useSelector((state)=>state.categories.categories)
  return (
    <div className="sidebar">
      <motion.div
        whileInView={{ x: ["-100%", "0%"] }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="sidebar-header">
          <GiCancel onClick={closeSidebarHandler} className="cancel" />
          <h1 className="title">
            Project <span className="x">X</span>
          </h1>

          <BsSearch onClick={focusInput} className="search" />
        </div>
        <ul className="menu-links">
          {categories.map((item, i) => (
            <li key={i} className="menu-link">
              <Link onClick={handler}
                className="router-link-nav"
                to={`/products/${item.name.toLowerCase()}`}
              >
                {item.name}
              </Link>
              {["Hamısı", "Apple", "Redmi", "Aksesuarlar"].includes(
                item.name
              ) && <AiOutlineArrowRight />}
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
          <button className="login">Daxil ol</button>
          <button className="registration">Qeydiyyat</button>
        </div>
      </motion.div>
    </div>
  );
};
export default Sidebar;
