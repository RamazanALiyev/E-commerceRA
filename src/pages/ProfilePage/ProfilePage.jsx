import React, {useEffect} from "react";
import Profilesection from "./components/ProfileSection/Profilesection";
import './profilepage.scss'
import {useDispatch} from "react-redux";
import {addData} from "../../Features/PersonalInfo";
import {Outlet} from 'react-router-dom'

// import {Routes,Route} from 'react-router-dom'
// import Basket from "../Basket/Basket";

const ProfilePage = () => {
    const dispatch = useDispatch()


    useEffect(()=>{
        const id = localStorage.getItem('commercejs_customer_id')
        const url = new URL(
            `https://api.chec.io/v1/customers/${id}`
        );
            const KEY = process.env.REACT_APP_CHECK_SECRET_API_KEY
        let headers = {
            "X-Authorization": KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };

        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => dispatch(addData(json)));
    },[])

    return (
        <div className='ProfilePage'>
            <div className="center d-flex">
            <Profilesection/>


                    <Outlet/>
            </div>
        </div>
    );
};

export default ProfilePage;



