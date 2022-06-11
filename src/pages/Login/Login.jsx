import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.scss";
import { BsFacebook } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import loginimg from '../../assets/images/login-new-img.svg'

const Login = () => {

  const sendLogin = async (e)=>{
    e.preventDefault()
    const url = new URL(
      "https://api.chec.io/v1/customers/email-token"
  );
  
  let headers = {
      "X-Authorization": process.env.REACT_APP_CHECK_PUBLIC_API_KEY,
      "Content-Type": "application/json",
      "Accept": "application/json",
  };
  
  let body = {
      "email": `${e.target[0].value}`,
      "base_url": "http://localhost:3000/login"
  }
  
    await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body)
  })
      .then(response => response.json())
      .then(json => console.log(json));
  }
  return (
    <div className="Login">
      <div className="center">
        <div className="left-side-form">
          <h3>Daxil Ol</h3>
          <div className="social">
            <div className="fb">
              <BsFacebook className="fb-icon" /> <span>Facebook ilə</span>
            </div>
            <div className="gmail">
              <SiGmail className="gmail-icon" /> <span>Gmail ilə</span>
            </div>
          </div>
          <span className="or">və ya</span>
          <form onSubmit={(e)=>sendLogin(e)} className="login-form">
          <div className="email">
              <label htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="nümunə@gmail.com"  />
            </div>
            {/* <div className="password">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Şifrənizi daxil edin" />
              <span>Şifrəni unutmusunuz?</span>
            </div> */}
            <button type="submit" className="form-btn">Daxil ol</button>
          </form>
        
          <div className="register">
            <span>Hesabınız yoxdur? </span>
           <Link to='/register'> <span >Qeydiyyatdan keçin</span></Link>
            </div>
        </div>
        <div className="right-side">
            <div className="img">
                <img src={loginimg} width='500px' alt="loginimg" />
            </div>
            <div className="register">
            <span>Hesabınız yoxdur? </span>
            <Link style={{ textDecoration: 'none' }} to='/register'> <span style={{color:'#2d9cdb',fontSize:'14px'}} >Qeydiyyatdan keçin</span></Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
