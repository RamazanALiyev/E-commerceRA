import React, {useEffect, useState} from 'react';
import './delivery.scss'
import {useDispatch, useSelector} from "react-redux";
import {
    addAdress, addCity,
    addCountry,
    addFullname,
    changeBtn,
    addIso2
} from "../../../Features/PaymentInfo";

const Delivery = () => {
    const fullname1 = useSelector((state) => state.payment.fullname)
    const adress1 = useSelector((state) => state.payment.adress)
    const country1 = useSelector((state) => state.payment.country)
    const city1 = useSelector((state) => state.payment.city)
    const isoCount = useSelector((state) => state.payment.Iso2)

    useEffect(()=>{
        if(fullname1 !=='' && adress1 !=='' && city1 !==''){
            dispatch(changeBtn(false))
        }else{
            dispatch(changeBtn(true))
        }
    })


    const dispatch = useDispatch()

    const fullname = (e) => {
        dispatch(addFullname(e.target.value))
    }

    const adress = (e) => {
        dispatch(addAdress(e.target.value))
    }
    const country2 = (e,i) => {
        dispatch(addCountry(e.target.value))
    }
    const city = (e) => {
        dispatch(addCity(e.target.value))
    }
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch("https://countriesnow.space/api/v0.1/countries/iso")
            .then((data) => data.json())
            .then((response) => setCountry(response.data));
    }, []);

    useEffect(() => {
        country && country.forEach((item, index) => {
            if (country1 == index) {
                console.log('working',item?.Iso2)
                dispatch(addIso2(item?.Iso2));
            }
        });
    }, [country, country1, dispatch])
    console.log('country', isoCount)
    console.log('1', country1)


    return (
        <div className='delivery'>
            <form>
            <div className='fullname-adress'>
                <div className="fullname">
                    <label htmlFor="fullname">Ad və Soyad</label>
                    <input onChange={(e) => fullname(e)} required={true}  id='fullname' placeholder='Ad və Soyadınızı daxil edin.' type="text"/>
                </div>
                <div className="adress">
                    <label htmlFor="adress">Ünvan</label>
                    <input onChange={(e) => adress(e)} required={true}  id='adress' placeholder='Ünvanı daxil edin.' type="text"/>
                </div>
            </div>
            <div className="country-city">
                <div className="country">
                    <label htmlFor="country">Ölkə</label>
                    <select onChange={country2}  required={true} name="country" placeholder='Ölkə' id="country">
                        {country && country.map((el,index)=>(
                            <option  key={index} value={index}>{el?.name}</option>
                        ))}
                    </select>
                </div>
                <div className="city">
                    <label htmlFor="city">Şəhər</label>
                    <input onChange={(e) => city(e)} required={true}  id='city' placeholder='Şəhəri daxil edin.' type="text"/>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Delivery;