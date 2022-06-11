import React, {useEffect, useState} from "react";
import TechnicalComments from "./technichal-comments/TechnicalComments";
import Comments from "./technichal-comments/Comments";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, Thumbs} from "swiper";
import {useParams} from "react-router-dom";
import commerce from "../../lib/Ecommerce";
import "../ProductDetail/_productDetail.scss";
import star from "../../assets/images/Vector.png";
import basket from "../../assets/images/cart.png";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, reset} from "../../Features/Counter";
import {addToBasket} from "../../Features/BasketSlice";
import alertify from "alertifyjs";

const ProductDetail = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    let params = useParams();
    const productId = params.id;
    const [mehsul, setMehsul] = useState({});
    const [productName, setProductName] = useState("");
    const [productName2, setProductName2] = useState("");
    const [color, setColor] = useState("");
    const [memory, setMemory] = useState("");
    const [property, setProperty] = useState([]);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [a, setA] = useState(true);
    const [colorID, setColorID] = useState("");
    const [memoryID, setMemoryID] = useState("");
    const [variantGroup0, setVariantGroup0] = useState('')
    const [variantGroup1, setVariantGroup1] = useState('')


    const bubling = (e) => {
        e.preventDefault();
        let detailobj = {}
        detailobj[variantGroup0] = colorID
        // eslint-disable-next-line no-unused-expressions
        variantGroup1 ? detailobj[variantGroup1] = memoryID : null
        dispatch(addToBasket({id: mehsul.id, quantity: count, detail: detailobj}));
        dispatch(reset())
    };
    useEffect(() => {
        mehsul &&
        Object.keys(mehsul).length === 0 &&
        commerce.products.retrieve(productId).then((product) => {
            setMehsul(product);
            // setProductName(product.name);
            setVariantGroup0(product.variant_groups[0].id)
            setVariantGroup1(product?.variant_groups[1]?.id)
            setProductName2(product?.name);
            setColor(product?.variant_groups[0]?.options[0]?.name);
            setMemory(product?.variant_groups[1]?.options[0]?.name);
            setColorID(product?.variant_groups[0]?.options[0]?.id);
            setMemoryID(product?.variant_groups[1]?.options[0]?.id);
        });
    }, [productId, mehsul]);

    const azalt = () => {
        if (count > 1) {
            dispatch(decrement());
        }
    };

    useEffect(() => {

        setProductName(productName2 + " " + color + " " + (memory ? memory : ''));
    }, [productName2, color, memory]);
    useEffect(() => {
        property.length > 0 && property[0] === "color"
            ? (function () {
                setColor(property[1]);
                setColorID(property[2]);
            })()
            : (function () {
                setMemory(property[1]);
                setMemoryID(property[2]);
            })();
    }, [property]);


    const addClass = (e) => {
        setA(true)
        e.target.setAttribute('class', 'active')
        e.target.nextElementSibling.removeAttribute('class')
    }
    const addClass2 = (e) => {
        setA(false)
        e.target.setAttribute('class', 'active')
        e.target.previousElementSibling.removeAttribute('class')
    }


    return (
        <div className="Product-detail">
            <div className="center">
                <div className="product-img-slider">
                    <p className="path">
                        Hamisi {">"} Telefonlar {">"} Apple{" "}
                    </p>

                    <Swiper
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        loop={true}
                        spaceBetween={2}
                        navigation={true}
                        thumbs={{swiper: thumbsSwiper}}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2"
                    >
                        {mehsul.assets &&
                            mehsul.assets.map((asset, index) => (
                                <SwiperSlide key={index}>
                                    {" "}
                                    <img src={asset.url} alt="aset"/>{" "}
                                </SwiperSlide>
                            ))}
                    </Swiper>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={4}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper"
                    >
                        {mehsul.assets &&
                            mehsul.assets.map((asset, index) => (
                                <SwiperSlide key={index}>
                                    {" "}
                                    <img src={asset.url} alt="aset"/>{" "}
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
                <div className="product-variations">
                    <p className="p-name">{productName}</p>
                    <div className="stars">
                        <img src={star} alt="start"/>
                        <img src={star} alt="start"/>
                        <img src={star} alt="start"/>
                        <img src={star} alt="start"/>
                        <img src={star} alt="start"/>
                        <span className="count">(226)</span>
                        <span className="comments">57 comments</span>
                    </div>
                    <div className="prices">
                        <p className="price">{mehsul.price?.formatted} ₼</p>
                        <div onClick={bubling} className="basket-btn2">
                            <img src={basket} alt="basket"/>
                            <span>Səbətə at</span>
                        </div>
                    </div>

                    <div className="divider"></div>
                    {mehsul.variant_groups &&
                        mehsul.variant_groups.map((variantGroup, index) => (

                            <div className="flex" key={index}>
                <span className="option-name" key={index}>
                  {variantGroup.name}:
                </span>
                                {variantGroup.options.map((option, optionIndex) => (
                                    <div
                                        onClick={() =>
                                            setProperty([variantGroup.name, option.name, option.id])
                                        }
                                        className={
                                            variantGroup.name === "color"
                                                ? `${option.name} color `
                                                : `${option.name} memory`
                                        }
                                        key={optionIndex}
                                    >
                                        {" "}
                                        {variantGroup.name !== "color" && option.name}
                                    </div>
                                ))}
                                <br/>
                            </div>
                        ))}
                    <div className="divider"></div>
                    <div className="basket-counter">
                        <div className="quantity">
                            <p>Miqdar:</p>
                        </div>
                        <button onClick={azalt} className="decrement ">
                            -
                        </button>
                        <span>{count}</span>
                        <button onClick={() => dispatch(increment())} className="increment">
                            +
                        </button>
                    </div>
                    <div onClick={bubling} className="basket-btn">
                        <img src={basket} alt="basket"/>
                        <span>Səbətə at</span>
                    </div>
                </div>
            </div>
            <div className="center2">
                <div className="feedbacks">
                    <h3 className='active' onClick={addClass}>Texniki Xususiyyetler</h3>
                    <h3 onClick={addClass2}>Reyler</h3>
                </div>
                <div className="divider2"></div>
                {a ? <TechnicalComments/> : <Comments/>}
            </div>
        </div>
    );
};

export default ProductDetail;
