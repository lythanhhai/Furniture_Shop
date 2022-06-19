import React, { useEffect } from "react";
import "../Asset/SignInOrUp/SignIn.scss";
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import { useNavigate, Navigate } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { SignInAction, LogoutAction, ChangeAddress } from "../Action/SignInAction";

const SignIn = () => {
  const navigate = useNavigate();

  const [inforSignIn, setInforSignIn] = useState({
    phone_number: "",
    pass_word: "",
  });

  const inforLogin = useSelector(state => state.SignInReducer)
  const dispatch = useDispatch()

  const handleSignIn = (e) => {
    e.preventDefault();
    const infor = {
      ...inforSignIn,
    };

    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    };

    axios
      .post("http://127.0.0.1:8000/sale/Customer-SignIn/", infor)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        
        if (data.key_per === 0) {
          console.log(data)
          dispatch(SignInAction(data.key_per, data.phone_number))
          dispatch(ChangeAddress(data.address))
          navigate("/Home")
          
        } else if (data.key_per === 1) {
          dispatch(SignInAction(data.key_per, data.phone_number))
          dispatch(ChangeAddress(data.address))
          navigate("/admin/manage-products")
        } else {
          console.log(typeof data.key_per);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <section className="Login">
      <div className="Login__Left">
        <p className="Login__Left-title">LOGIN</p>
        <form
          name="Login__Left-form"
          className="Login__Left-form"
          onSubmit={(e) => {
            handleSignIn(e);
          }}
          method="POST"
        >
          <div className="Phone_number">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              placeholder=""
              name="phone"
              onChange={(e) => {
                setInforSignIn({
                  ...inforSignIn,
                  phone_number: e.target.value,
                });
              }}
            />
          </div>
          <div className="Password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder=""
              name="password"
              onChange={(e) => {
                setInforSignIn({
                  ...inforSignIn,
                  pass_word: e.target.value,
                });
              }}
            />
          </div>

          <button type="submit" className="but_sub">
            LOG IN
          </button>

          <div className="Footer_Login">
            <div className="remember">
              <input type="checkbox" name="remember"></input>
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Lost your password?</p>
          </div>

          <p className="Login_With">OR LOGIN WITH</p>

          <div className="footer_login">
            <button type="button" className="fb">
              <FaFacebookSquare />
              <p>Facebook</p>
            </button>
            <button type="button" className="gg">
              <FaGooglePlusSquare />
              <p>Google</p>
            </button>
          </div>
        </form>
      </div>
      <div className="Login__Right">
        <h2>REGISTER</h2>
        <p>
          Registering for this site allows you to access your order status and
          history. Just fill in the fields below, and we’ll get a new account
          set up for you in no time. We will only ask you for information
          necessary to make the purchase process faster and easier.
        </p>
        <button
          type="button"
          onClick={() => {
            navigate("/SignUp/");
          }}
        >
          REGISTER
        </button>
      </div>
    </section>
  );
};

export default React.memo(SignIn);
