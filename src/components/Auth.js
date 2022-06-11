import React,{useEffect} from "react";
import commerce from "../lib/Ecommerce";
import { useParams, Navigate } from "react-router-dom";

const Auth = () => {
  let params = useParams();
  const id = params.id;
  useEffect(()=>{
    commerce.customer
    .getToken(`${id}`, "save= true")
},[id])
  return (
    <div>
      {(localStorage.getItem("commercejs_customer_token")) && <Navigate to="/" replace={true} />}
      Auth
    </div>
  );
};

export default Auth;
