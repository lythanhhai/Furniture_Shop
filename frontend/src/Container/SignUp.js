import React from "react";
import "../Asset/SignInOrUp/SignUp.scss";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [inforPerson, setInforPerson] = useState({
    phone_number: "",
    user_name: "",
    pass_word: "",
    id_address: 0,
  });

  const handleRegister = (e) => {
    e.preventDefault()
    const infor = {
        ...inforPerson
    };
    const headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
      }
    axios
      .post("http://127.0.0.1:8000/sale/Customer-create/", infor)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();
  return (
    <section className="Register">
      <div className="Register__Left">
        <p className="Register__Left-title">REGISTER</p>
        <form
          name="Register__Left-form"
          method="POST"
          className="Register__Left-form"
          onSubmit={(e) => {
            handleRegister(e);
          }}
        >
          <div className="Username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder=""
              name="Username"
              onChange={(e) => {
                setInforPerson({
                  ...inforPerson,
                  user_name: e.target.value,
                });
              }}
            />
          </div>
          <div className="Phone_number">
            <label htmlFor="phone">Phone number</label>
            <input
              type="text"
              placeholder=""
              name="phone"
              onChange={(e) => {
                setInforPerson({
                  ...inforPerson,
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
                setInforPerson({
                  ...inforPerson,
                  pass_word: e.target.value,
                });
              }}
            />
          </div>

          <p className="infor">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our <a>privacy policy.</a>
          </p>
          <button type="submit" className="but_sub" >
            Register
          </button>
          {/* onClick={() => {
            navigate("/Home/");
          }} */}
        </form>
      </div>
      <div className="Register__Right">
        <h2>LOGIN</h2>
        <p>
          Login here by filling you're username and password or use your
          favorite social network account to enter to the site. Site login will
          simplify the purchase process and allows you to manage your personal
          account.
        </p>
        <button
          type="button"
          onClick={() => {
            navigate("/SignIn/");
          }}
        >
          LOGIN
        </button>
      </div>
    </section>
  );
};

export default React.memo(SignUp);
