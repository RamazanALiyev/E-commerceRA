import React, { useEffect, useState } from "react";
import "../Products/_product.scss";
import FilterProduct from "./FilterProduct";
import { Accordion } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Oval } from "react-loading-icons";
import { addToFilter } from "../../Features/Filtered";
import alertify from "alertifyjs";

function Products({ filterName, setFilterName }) {
    const dispatch = useDispatch()
    const datas = useSelector((state) => state.products.products);
    console.log(datas)

    const [minVal, setMinVal] = useState(0)
    const [maxVal, setMaxVal] = useState(9999)


    const minInputVal = (e) => {
        setMinVal(e.target.value)
    }
    const maxInputVal = (e) => {
        if (e.target.value > minVal) {
            setMaxVal(e.target.value)
        } else if (isNaN(e.target.value)) {
            setMaxVal(9999)
        } else if (e.target.value === '') {
            setMaxVal(null)
        }
    }

    const handlechange = (name) => {
        setFilterName(name);
    };

    useEffect(() => {
        let filtered = datas.filter((data, index) => minVal <= data?.price?.raw && data?.price?.raw <= maxVal)
        dispatch(addToFilter(filtered))
        console.log(maxVal, 'maxval')
    }, [minVal, maxVal, datas, dispatch])
    const categories = useSelector((state) => state.categories.categories);
    const loading = useSelector((state) => state.products.status);
    if (loading === "loading") {
        return (
            <div className="black-page">
                <Oval stroke="#00D68F" className="loading" />
                <p>Məhsullar yüklənir</p>
            </div>
        );
    }

    return (
        <div className="Products">
            <div className="center">
                <div className="orderFilter">
                    <div className="order">Sıralama</div>
                    <div className="filtering">Filterləmələr</div>
                </div>
                <div className="pathCross">
                    <p>
                        Ana Sehife {">"} Telefonlar {">"} Apple {">"}
                    </p>
                </div>
                <div className="filterProducts">
                    <div className="filter">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Brend</Accordion.Header>
                                <Accordion.Body>
                                    {categories.map((brands, index) => (
                                        <div className="brandsPro" key={index}>
                                            <Link className="link" to={`/products/${brands.name.toLowerCase()}`}>
                                                <input
                                                    id={index}
                                                    type="checkbox"
                                                    checked={brands.name.toLowerCase() === filterName.toLowerCase() ? true : false}
                                                    onChange={() => handlechange(brands.name)}
                                                />
                                                <label htmlFor={index}>{brands.name}</label>
                                            </Link>
                                        </div>
                                    ))}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Qiymət</Accordion.Header>
                                <Accordion.Body>
                                    <form onSubmit={(e) => e.preventDefault()} className='priceFilter'>
                                        <div className='inputParentLower'>
                                            <input value={minVal} onChange={minInputVal} />
                                            <span>₼</span>
                                        </div>
                                        <div className='inputParentUpper'>
                                            <input value={maxVal} onChange={maxInputVal} />
                                            <span>₼</span>
                                        </div>
                                        <button className='d-none' type='submit'></button>
                                    </form>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                    <FilterProduct filterName={filterName} />
                </div>
            </div>
        </div>
    );
}

export default Products;

// onChange={() => setFilterName(brands.name)}
