import React from "react";
import "./_mostsellerproducts.scss";
import { AiOutlineRight } from "react-icons/ai";
import Product from "./Product";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Mostsellerproducts = ({ left, right }) => {
  const phones = useSelector((state) => state.phones.phones);
  return (
    <div className="Mostsellerproducts">
      <div className="center">
        <div className="title">
          <p className="left">{left}</p>
          <p className="right">
            {right} <AiOutlineRight className="right-icon" />
          </p>
        </div>
        <div className="cards">
          {phones && phones.length > 0 ? (
            [...phones]
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((phone, index) => (
                <div key={index}>
                  <Link style={{textDecoration: 'none'}}
                    key={index}
                    to={`products/${phone.categories[0].slug}/${phone.id}`}
                  >
                    <Product phone={phone} />
                  </Link>
                </div>
              ))
          ) : (
            <SkeletonTheme  baseColor="white" highlightColor="rgb(231, 231, 231)">
              {" "}
              <p className="w-100">
                {" "}
                <Skeleton height={150} count={1} />
              </p>
              <p className="w-100">
                {" "}
                <Skeleton height={150} count={1} />
              </p>
              <p className="w-100">
                {" "}
                <Skeleton height={150} count={1} />
              </p>
              <p className="w-100">
                {" "}
                <Skeleton height={150} count={1} />
              </p>
            </SkeletonTheme>
          )}
        </div>
      </div>
    </div>
  );
};
export default Mostsellerproducts;
