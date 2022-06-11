import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import "../Register/register.scss";
import {BsFacebook} from "react-icons/bs";
import {SiGmail} from "react-icons/si";
import loginimg from "../../assets/images/login-new-img.svg";
import {useDispatch, useSelector} from "react-redux";
import {checkstatus} from "../../Features/RegisterStatus";
import alertify from "alertifyjs";

const Register = () => {
  const [checked,setChecked] = useState(false)
  const navigate = useNavigate()
  const status = useSelector((state) => state.registerStatus.value);

  console.log('status',status)
  const dispatch = useDispatch();
  const AddUser = async (e) => {
    e.preventDefault();
    const url = new URL("https://api.chec.io/v1/customers");
    const SecretApiKey = process.env.REACT_APP_CHECK_SECRET_API_KEY;
    let headers = {
      "X-Authorization": SecretApiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    let body = {
      email: `${e.target[2].value}`,
      phone: `${e.target[3].value}`,
      firstname: `${e.target[0].value}`,
      lastname: `${e.target[1].value}`,
      external_id: null,
    };

    let customer = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    if(customer?.status === 201){
     dispatch(checkstatus(customer.status));
      navigate('account')
    }
    else{
      dispatch(checkstatus(customer.status));
      alertify.error('Could not create User')
      dispatch(checkstatus(null))
    }



   
  
  };


  return (
    <div className="Register">
      <div className="center">
        <div className="left-side-form">
          <h3>Qeydiyyat</h3>
          <div className="social">
            <div className="fb">
              <BsFacebook className="fb-icon" /> <span>Facebook ilə</span>
            </div>
            <div className="gmail">
              <SiGmail className="gmail-icon" /> <span>Gmail ilə</span>
            </div>
          </div>
          <span className="or">və ya</span>
          <form onSubmit={(e) => AddUser(e)} className="login-form">
            <div className="name">
              <label htmlFor="name">Ad</label>
              <input  required={true} type="text" id="name" placeholder="Ad daxil edin" />
            </div>
            <div className="name">
              <label htmlFor="surname">Soyad</label>
              <input
                  required={true}
                type="text"
                id="surname"
                placeholder="Soyadınızı daxil edin"
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input  required={true} type="email" id="email" placeholder="nümunə@gmail.com" />
            </div>
            <div className="number">
              <label htmlFor="number">Mobil nömrə</label>
              <input   required={true} type="tel"  id="number" placeholder="+994XXXXXXX" />
            </div>

            <div className="agreements">
              <input onChange={()=> setChecked(!checked)} checked={checked} type="checkbox" />
              <p>
                {" "}
                <span>İstifadəçi şərtləri </span> ilə razıyam
              </p>
            </div>
            <button type="submit" disabled={!checked} className={checked ? 'form-btn-green' : 'form-btn-gray'}>
              Qeydiyyat
            </button>
          </form>

          <div className="login">
            <span>Artıq hesabınız var? </span>
            <Link to="/login">
              {" "}
              <span>Daxil olun </span>
            </Link>
          </div>
        </div>
        <div className="right-side">
          <div className="img">
            <img src={loginimg} width="500px" alt="loginimg" />
          </div>
          <div className="login">
            <span>Artıq hesabınız var? </span>
            <Link style={{ textDecoration: "none" }} to="/login">
              {" "}
              <span className="enter">Daxil olun </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
