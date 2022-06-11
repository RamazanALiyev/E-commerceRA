import React, { useEffect, useState } from "react";
import "../Basket/_basket.scss";
import { BsBasket } from "react-icons/bs";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteBasket, updateBasket } from "../../Features/BasketSlice";
import { Oval } from "react-loading-icons";
import alertify from "alertifyjs";
import TotalSection from "../../components/Pricetotal/TotalSection";

const Basket = () => {
  const [a, setA] = useState([]);
  console.log("a", a);
  const basket = useSelector((state) => state.basket.value);
  const loading = useSelector((state) => state.basket.status);

  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    alertify
      .confirm("Silməyə əminsiniz?", function () {
        alertify.success("Deleted");
        dispatch(deleteBasket(id));
      })
      .setHeader("")
      .set("labels", { ok: "Bəli!", cancel: "Xeyir!" });
  };

  const decrement = (id, quantity) => {
    alertify.success("Mehsulun sayi ugurla azaldildi");
    dispatch(
      updateBasket({
        id: id,
        quantity: quantity - 1,
      })
    );
  };

  const increment = (id, quantity) => {
    alertify.success("Mehsulun sayi ugurla artirildi");
    dispatch(
      updateBasket({
        id: id,
        quantity: quantity + 1,
      })
    );
  };

  if (loading === "loading") {
    return (
      <div className="black-page">
        <Oval stroke="#00D68F" className="loading" />
        <p>Məhsullar yüklənir</p>
      </div>
    );
  }

  return (
    <div className="Basket">
      <div className="center">
        {basket && basket.length === 0 ? (
          <div className="empty-basket">
            <BsBasket className="basket-icon" />
            <p className="empty-basket-p">Səbətiniz hal-hazırda boşdur</p>
            <Link className="basket-link" to="/">
              Alış-verişə davam et{" "}
            </Link>
          </div>
        ) : (
          <div className="scrollBasket">
            <p className="product-count">Səbət ( {basket?.length} məhsul)</p>
            {basket &&
              basket.map((eachBasket, index) => (
                <div key={index} className="full-basket">
                  <div className="input">
                    {/*<input id="productinBasket" type="checkbox"/>*/}
                  </div>
                  <label htmlFor="productinBasket">
                    <div className="basketProductImg">
                      <img src={eachBasket.image.url} alt="pic" />
                    </div>
                    <div className="basketProductDetail">
                      <p>
                        {eachBasket.name},
                        {eachBasket?.selected_options[0]?.option_name},
                        {eachBasket?.selected_options[1]?.option_name}
                      </p>
                      <div className="colorPrice">
                        <p>
                          <span>Rəng:</span>
                          <span>
                            {eachBasket.selected_options[0].option_name}
                          </span>
                        </p>
                        <p>
                          <span></span>
                          <span>{eachBasket.line_total.formatted}</span>
                        </p>
                        <div className="basketProtuctcopy">
                          <button
                            disabled={eachBasket.quantity === 1 ? true : false}
                            onClick={() =>
                              decrement(eachBasket.id, eachBasket.quantity)
                            }
                          >
                            -
                          </button>
                          <span>{eachBasket.quantity}</span>
                          <button
                            onClick={() =>
                              dispatch(
                                increment(eachBasket.id, eachBasket.quantity)
                              )
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="basketProtuct">
                      <button
                        disabled={eachBasket.quantity === 1 ? true : false}
                        onClick={() =>
                          decrement(eachBasket.id, eachBasket.quantity)
                        }
                      >
                        -
                      </button>
                      <span>{eachBasket.quantity}</span>
                      <button
                        onClick={() =>
                          dispatch(
                            increment(eachBasket.id, eachBasket.quantity)
                          )
                        }
                      >
                        +
                      </button>
                    </div>
                  </label>
                  <div className="delete">
                    <RiDeleteBinLine
                      className="deleteIcon"
                      onClick={() => deleteHandler(eachBasket.id)}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
        {basket && basket.length !== 0 && <TotalSection />}
      </div>
    </div>
  );
};

export default Basket;
