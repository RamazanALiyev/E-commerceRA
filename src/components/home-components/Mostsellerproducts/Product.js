import React from "react";
import "./_product.scss";
import {BsFillBasketFill} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {addToBasket} from "../../../Features/BasketSlice";
import alertify from "alertifyjs";

function Product({phone, discount}) {
    const dispatch = useDispatch();
    const bubling = (e) => {
        console.log('phone', phone)
        e.preventDefault()
        let detailobj = {}
        detailobj[phone?.variant_groups?.[0]?.id] = phone?.variant_groups?.[0]?.options?.[0]?.id
        // eslint-disable-next-line no-unused-expressions
        phone?.variant_groups?.[1] ? detailobj[phone?.variant_groups?.[1]?.id] = phone?.variant_groups?.[1]?.options?.[0]?.id : null
        dispatch(addToBasket({id: phone.id, quantity: 1, detail: detailobj}))


    }

    return (
        <div className="Product">
            <div className="product-img">
                <img src={phone?.image?.url} alt="img"/>
            </div>
            <div className="product-info">
                <h1>
                    {phone?.name ? phone?.name : null}
                    {phone?.variant_groups[1]?.options[0]?.name ? ", " + phone?.variant_groups[1]?.options[0]?.name : null}
                    {phone?.variant_groups[0]?.options[0]?.name ? ", " + phone?.variant_groups[0]?.options[0]?.name : null}
                </h1>
                <div className="price">
                    <div>
                        {discount ? <span className="discount">{discount}</span> : null}
                        {discount ? (
                            <span className="count">{phone?.price?.raw + '$'}</span>
                        ) : (
                            <span className="any">{phone?.price?.raw + '$'}</span>
                        )}
                    </div>
                    <div>
                        <BsFillBasketFill onClick={bubling} className="add-basket"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
