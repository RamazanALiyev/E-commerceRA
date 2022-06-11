import React, {useState, useEffect, useRef} from "react";
import Home from "./pages/Home";
import Header from "./pages/Header-component/Header";
import Sidebar from "./pages/Header-component/sidebar/Sidebar";
import Footer from "./pages/Footer/Footer";
import Products from "./pages/Products/Products";
import Basket from "./pages/Basket/Basket";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Auth from "./components/Auth";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import commerce from "./lib/Ecommerce";
import Notfound from "./pages/Notfound/Notfound";
import Status from "./pages/Status/Status";

import {Outlet, Navigate, Route, Routes} from "react-router-dom";
import {fetchCategories} from "./Features/CategorySlice";
import {fetchProducts} from "./Features/AllSlice";
import {getBasket} from "./Features/BasketSlice";

import {useSelector, useDispatch} from "react-redux";
import Payment from "./pages/Payment/Payment";
import Pinfo from "./components/ProfilePage/Personal/Pinfo";
import Orders from "./pages/ProfilePage/components/Orders/Orders";

function App() {
    const dispatch = useDispatch();
    const productsStatus = useSelector((state) => state.categories.status);
    const cardStatus = useSelector((state) => state.basket.status);
    const [showsidebar, setShowsidebar] = useState(false);
    const [filterName, setFilterName] = useState(null);

    useEffect(() => {
        if (productsStatus === "idle") {
            dispatch(fetchCategories());
        }
    }, [productsStatus, dispatch]);

    useEffect(() => {
        let pathname = window.location.pathname.split("/");
        let productNamePath = pathname[pathname.length - 1];

        setFilterName(productNamePath);
    }, []);

    useEffect(() => {
        filterName && dispatch(fetchProducts(filterName));
    }, [dispatch, filterName]);

    useEffect(() => {
        if (cardStatus === "idle") {
            dispatch(getBasket());
        }
    }, [cardStatus, dispatch]);

    const focusInput = () => {
        setShowsidebar(false);
        document.getElementsByTagName("body")[0].style.overflow = "scroll";
        input.current.focus();
    };
    const input = useRef();

    return (
        <div className="App">
            <Header
                setFilterName={setFilterName}
                input={input}
                setShowsidebar={setShowsidebar}
            />
            {showsidebar && (
                <Sidebar
                    setFilterName={setFilterName}
                    focusInput={focusInput}
                    setShowsidebar={setShowsidebar}
                />
            )}
            <Outlet/>
            <Routes>
                {/* <Route>  */}
                <Route index element={<Home/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path ='/products' element={ <Navigate replace to="/products/hamisi" /> }/>
                <Route
                    path="/products/:productname"
                    element={
                        <Products filterName={filterName} setFilterName={setFilterName}/>
                    }
                ></Route>
                <Route path="products/:productname/:id" element={<ProductDetail/>}/>
                <Route path="basket" element={<Basket/>}/>
                {!commerce.customer.isLoggedIn() && <Route path="login" element={<Login/>}/>}
                {!commerce.customer.isLoggedIn() && <Route path="register" element={<Register/>}/>}
                {!commerce.customer.isLoggedIn() && <Route path="register/account" element={<Status/>}/>}
                <Route path="login/:id" element={<Auth/>}/>
                {commerce.customer.isLoggedIn() &&

                    <Route path="profile" element={<ProfilePage/>}>

                        <Route index element={ <Navigate replace to="/profile/info" /> }/>
                        <Route path='info' element={<Pinfo/>}/>
                        <Route path='orders' element={<Orders/>}/>

                    </Route>}

                <Route path="payment" element={<Payment/>}/>
                <Route path="*" element={<Notfound/>}/>


            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
