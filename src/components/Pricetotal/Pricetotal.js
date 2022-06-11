import React, {useState, useEffect} from 'react';
import './pricetotal.scss'

import commerce from "../../lib/Ecommerce";


const Pricetotal = () => {
    const [carttotal, setCarttotal] = useState([])
    useEffect(() => {
        commerce.cart.retrieve().then((items) => (setCarttotal(items)))
    }, [carttotal])
    return (
        <div className="rightSide">
            <div className='reducerSide'>
                <p className='total'>Ümumi</p>

                <div className="price">
                    <p className='op-name'>Məbləğ </p>
                    <p className='op-count'>{carttotal?.subtotal?.formatted_with_symbol}</p>
                </div>
                <div className="delivery">
                    <p className='op-name'>Çatdırılma</p>
                    <p className='op-count'>$0.00</p>
                </div>
                <div className="gift-packet">
                    <p className='op-name'>Hədiyyə paketi</p>
                    <p className='op-count'>$0.00</p>
                </div>
                <div className="promo">
                    <p className='op-name'>Promo kod</p>
                    <p className='op-count'>$0.00</p>
                </div>
                <div className="divider"></div>
                <div className="total-price">
                    <p className='op-name'>Cəmi</p>
                    <p className='op-count'>{carttotal?.subtotal?.formatted_with_symbol}</p>
                </div>
            </div>
        </div>
    );
};

export default Pricetotal;