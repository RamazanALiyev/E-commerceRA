import React from 'react';
import './_newaccessuar.scss';
import {AiOutlineRight} from "react-icons/ai";
import Product from '../Mostsellerproducts/Product';
import {Link} from 'react-router-dom';
import {useSelector} from "react-redux";
import Skeleton, {SkeletonTheme} from "react-loading-skeleton";

const Newaccessuar = ({left, right,}) => {
    const accessuars = useSelector((state) => state.accessuar.accessuars)
    console.log('accessuars', accessuars)
    return (
        <div className='Newaccessuar'>
            <div className="center">
                <div className="title">
                    <p className="left">{left}</p>
                    <p className="right">
                        {right} <AiOutlineRight className="right-icon"/>
                    </p>
                </div>
                <div className="cards">
                    {accessuars && accessuars.length > 0 ?
                        [...accessuars]
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 4)
                            .map((accessuar, index) => (
                                <Link key={index} to={`products/${accessuar.categories[0].slug}/${accessuar.id}`}>
                                    <Product
                                        key={index}
                                        image={accessuar?.image?.url}
                                        text={accessuar?.name}
                                        count={accessuar?.price?.raw + " $"}
                                    />
                                </Link>
                            )) :
                        <SkeletonTheme baseColor="white" highlightColor="lightgray"><p className="w-25"><Skeleton
                            height={150} count={1}/></p>
                            <p className="w-25"><Skeleton height={150} count={1}/></p>
                            <p className="w-25"><Skeleton height={150} count={1}/></p>
                            <p className="w-25"><Skeleton height={150} count={1}/></p>


                        </SkeletonTheme>}
                </div>
            </div>
        </div>
    )
}

export default Newaccessuar;
