import React, {useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchPhones } from "../Features/PhoneSlice";
import {fetchAccessuars} from "../Features/AccessuarSlice";


import Mainslider from "../components/home-components/MainSlider-component/Mainslider";
import Mostsellerproducts from "../components/home-components/Mostsellerproducts/Mostsellerproducts";
import Newproducts from "../components/home-components/Newproducts/Newproducts";
import Anniversary from "../components/home-components/Anniversary/Anniversary";
import Newaccessuar from "../components/home-components/Newaccessuar/Newaccessuar";
import Review from "../components/home-components/Review/Review";
import Servicess from "../components/home-components/Servicess/Servicess";
import Brands from "../components/home-components/Brands/Brands";
import "../styles/_loading.scss";


function Home() {
  const productsStatus = useSelector((state) => state.phones.status);
  const accessuarstatus = useSelector((state)=>state.accessuar.status)

  const dispatch = useDispatch();
  useEffect(() => {
    if (productsStatus === "idle") {
      dispatch(fetchPhones())
    }
  }, [productsStatus, dispatch]);
    useEffect(() => {
        if (accessuarstatus === "idle") {
            dispatch(fetchAccessuars())
        }
    }, [accessuarstatus, dispatch]);




  return (
    <div className="Home">
      <Mainslider />
      <Mostsellerproducts
        left="Ən çox satılan məhsullar"
        right="Hamısına bax"
      />
      <Newproducts left="Yeni gələn məhsullar" right="Hamısına bax" />
      <Anniversary />
      {/* <Newaccessuar*/}

      {/*  left="Yeni gələn aksessuarlar"*/}
      {/*  right="Hamısına bax"*/}
      {/*/>*/}
      <Review />
      <Servicess />
      <Brands />

    </div>
  );
}

export default Home;
