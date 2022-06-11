import { Link } from "react-router-dom";
import "./_newproduct.scss";
import Product from "../Mostsellerproducts/Product";
import { AiOutlineRight } from "react-icons/ai";
import { useSelector } from "react-redux";
import Skeleton,{SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const Newproducts = ({ left, right }) => {
  const phones = useSelector((state) => state.phones.phones);

  return (
    <div className="Newproducts">
      <div className="center">
        <div className="title">
          <p className="left">{left}</p>
          <p className="right">
            {right} <AiOutlineRight className="right-icon" />
          </p>
        </div>
        <div className="cards">
          {phones && phones.length > 0 ?
            [...phones]
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((phone, index) => (
                <Link style={{textDecoration: 'none'}} key={index} to={`products/${phone.categories[0].slug}/${phone.id}`}>
                  <Product
                    phone={phone}
                  />
                </Link>
              )) : <SkeletonTheme baseColor="white" highlightColor="lightgray">  <p className="w-25">  <Skeleton height={150}    count={1}/></p>
               <p className="w-25">  <Skeleton height={150}   count={1}/></p>
               <p className="w-25">  <Skeleton height={150}   count={1}/></p>
               <p className="w-25">  <Skeleton height={150}   count={1}/></p>
         
              
              </SkeletonTheme>}
        </div>
      </div>
    </div>
  );
};

export default Newproducts;
