import React, {useEffect} from 'react';
import './Pinformation.scss'
import {useDispatch, useSelector} from "react-redux";
import {addName, addSurname, addEmail, addPhone,changeBtn} from "../../../Features/PaymentInfo";


const Personalnformation = () => {
    const name1 = useSelector((state) => state.payment.name)
    const surname1 = useSelector((state) => state.payment.surname)
    const email1 = useSelector((state) => state.payment.email)
    const phone1 = useSelector((state) => state.payment.phone)

    useEffect(()=>{
        if(name1 !=='' && surname1 !=='' && email1 !=='' && phone1 !==''){
            dispatch(changeBtn(false))
        }else{
            dispatch(changeBtn(true))
        }
    })


    const dispatch = useDispatch()

    const name = (e) => {
        dispatch(addName(e.target.value))
    }
    const surname = (e) => {
        dispatch(addSurname(e.target.value))
    }
    const email = (e) => {
        dispatch(addEmail(e.target.value))
    }
    const phone = (e) => {
        dispatch(addPhone(e.target.value))
    }
    return (
        <>
            <form>

                <div className="fullname d-flex  mb-3">
                    <div className="name d-flex flex-column me-4">
                        <label htmlFor="name">Ad</label>
                        <input value={name1} onChange={(e) => name(e)} required={true} id='name' type="text"
                               placeholder='Adınızı daxil edin'/>
                    </div>
                    <div className="surname d-flex flex-column">
                        <label htmlFor="surname">Soyad</label>
                        <input value={surname1} onChange={(e) => surname(e)} required={true} id='surname' type="text"
                               placeholder='Soyadınızı daxil edin'/>
                    </div>
                </div>

                <div className='phone-email d-flex'>
                    <div className="number d-flex flex-column me-4">
                        <label htmlFor="number">Mobil nömrə</label>
                        <input value={phone1} onChange={(e) => phone(e)} required={true} id='number' type="number"
                               placeholder='+99450XXXXXXX'/>
                    </div>
                    <div className="email d-flex flex-column">
                        <label htmlFor="email">Email</label>
                        <input value={email1} onChange={(e) => email(e)} required={true} id='email' type="email"
                               placeholder='nümunə@gmail.com'/>
                    </div>
                </div>
            </form>
        </>
    );
};

export default Personalnformation;