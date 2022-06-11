import React, { useEffect, useState } from "react";
import "./_header.scss";
import image from "../../assets/images/logo.jpg";
import image2 from "../../assets/images/phone.png";
import image3 from "../../assets/images/image7.png";
import { AiOutlineUser } from "react-icons/ai";
// import { AiOutlineHeart } from "react-icons/ai";
import { MdLocalGroceryStore } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaApple } from "react-icons/fa";
import Productanniversary from "../../components/home-components/Anniversary/Productanniversary";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import commerce from "../../lib/Ecommerce";


// import { useParams } from "react-router-dom";

const Header = ({ setShowsidebar, input, setFilterName }) => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    setTimeout(() => {
     commerce.customer.about().then((customer) => setCustomer(customer));
    }, 1500);
  }, [customer]);



  const basket = useSelector((state) => state.basket.value);

  // let params = useParams();

  const openSidebarHandler = () => {
    setShowsidebar(true);
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
  };
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="Header">
      <div className="center">
        <div className="main-search">
          <div className="logo">
            <GiHamburgerMenu
              onClick={openSidebarHandler}
              className="menu-btn"
            />
            <Link to="/">
              <img src={image} alt="logo" />
            </Link>
          </div>
          <div className="searchbar">
            <form>
              <label htmlFor="some">
                <AiOutlineSearch className="search-icon" />
              </label>
              <input
                ref={input}
                id="some"
                type="text"
                placeholder="Axtaris edin..."
              />
            </form>
          </div>
          <div className="icons">
            {customer?.firstname && <p>Welcome <strong className="user">{customer?.firstname}</strong> </p>}
            {commerce.customer.isLoggedIn() ? (
                <Link to='profile/info'><AiOutlineUser className="icon-user" /></Link>
            ) : (
              <Link to="login">
                <AiOutlineUser className="icon-user" />
              </Link>
            )}

            <Link to="basket">
              <MdLocalGroceryStore className="icon-store" />
            </Link>
            <span>{basket ? basket.length : null}</span>
          </div>
        </div>
        <div className="navbar">
          <ul className="navbar-lists">
            { categories && categories.map((category, index) => (
              <li className="navbar-list" key={index}>
                <Link
                  onClick={(e) => {
                    setFilterName(e.target.innerHTML);
                  }}
                  className="router-link-nav"
                  to={`/products/${category.name.toLowerCase()}`}
                >
                  {category.name}
                </Link>
                {category.children.map((item, index) => (
                  <div key={index} className="subcategories">
                    {category.children.map((element, index) => (
                      <div key={index}>
                        <h1>{element.name}</h1>
                        <ul className="sub-lists">
                          {element.children.map((el, index) => (
                            <li key={index} className="sub-list">
                              {el.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <Productanniversary
                      bgColor="bgColor"
                      alignItems="alignItems"
                      fontWeight="fontWeight"
                      fontSize="fontSize"
                      image={image2}
                      image3={image3}
                      title1="AirTag"
                      appleicon={<FaApple />}
                      title3="Əşyalarınızı tapmağın super asan yolu"
                      ptext="79 AZN-dən*"
                      buttonlink="Indi alın"
                    />
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;



