import React from "react";
import "../Asset/Header/Header.scss";
import { FaSearch, FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showModalCart, hideModalCart } from "../Action/showModal";
import { Navigate, useNavigate } from "react-router-dom";
import { SignInAction, LogoutAction } from "../Action/SignInAction";
import getIdProductAction from "../Action/getIdProductAction";

const Header = () => {
  const navigate = useNavigate();
  const [numberOfProduct, setNumberOfProduct] = useState(0);
  const showOrHide = useSelector((state) => state.showModalReducer).value;
  const dispatch = useDispatch();
  const handleClickDetail = (keywork) => {
    dispatch(getIdProductAction(keywork));
    navigate(`/search`);
  };
  const handleClickCart = () => {
    if (showOrHide === 0) {
      dispatch(showModalCart());
    } else {
      dispatch(hideModalCart());
    }
  };

  const handleMouseOverAccount = () => {
    const Down = document.querySelector(".Header__Function-Account .Down");
    Down.style.display = "flex";
  };

  const handleMouseOutAccount = () => {
    const Down = document.querySelector(".Header__Function-Account .Down");
    Down.style.display = "none";
  };

  const inforLogin = useSelector((state) => state.SignInReducer);
///

///
  return (
    <>
      <section className="Header">
        <div
          className="Header__Logo"
          onClick={() => {
            navigate("/Home");
          }}
        >
          <i className="fa-brands fa-drupal"></i>
          <p>Furniture Shop</p>
        </div>
        <div className="Header_Search">
          <label htmlFor="search"></label>
          {/* <input
            type="text"
            placeholder="Enter name product"
            // onChange={(e)=>{
            //     handleClickDetail(e.target.value)
            // }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleClickDetail(event.target.value);
              }
            }}
          ></input> */}
           <div className='input-wrapper'>
        <input className="input1"
           type="text"
           placeholder="Search....."
           onKeyPress={(event) => {
             if (event.key === "Enter") {
               handleClickDetail(event.target.value);
             }
           }}
          />
       
      </div>
        </div>
        <div className="Header__Function">
          {inforLogin.access === 0 ? (
            <>
              <p
                className="Header__Function-SignIn"
                onClick={() => {
                  navigate("/SignIn");
                }}
              >
                LOGIN / REGISTER
              </p>
            </>
          ) : (
            <>
              <div className="Header__Function-Account">
                <p
                  className="title"
                  onMouseOver={() => {
                    handleMouseOverAccount();
                  }}
                  onMouseOut={() => {
                    handleMouseOutAccount();
                  }}
                >
                  My Account
                </p>
                {inforLogin.isAdmin === 0 ? (
                  <div
                    className="Down"
                    onMouseOver={() => {
                      handleMouseOverAccount();
                    }}
                    onMouseOut={() => {
                      handleMouseOutAccount();
                    }}
                  >
                    <p
                      onClick={() => {
                        navigate("/Home/");
                      }}
                    >
                      Home
                    </p>
                    <p
                      onClick={() => {
                        navigate("/my-account/AccountDetail");
                      }}
                    >
                      Account Detail
                    </p>
                    <p
                      onClick={() => {
                        navigate("/ViewCart");
                      }}
                    >
                      View Cart
                    </p>
                    <p
                      onClick={() => {
                        navigate("/History");
                      }}
                    >
                      History Orders
                    </p>
                    <p
                      onClick={() => {
                        dispatch(LogoutAction());

                        navigate("/SignIn/");
                      }}
                    >
                      Log Out
                    </p>
                  </div>
                ) : (
                  <div
                    className="Down"
                    onMouseOver={() => {
                      handleMouseOverAccount();
                    }}
                    onMouseOut={() => {
                      handleMouseOutAccount();
                    }}
                  >
                    <p
                      onClick={() => {
                        navigate("/Products/");
                      }}
                    >
                      Add Products
                    </p>
                    <p
                      onClick={() => {
                        dispatch(LogoutAction());

                        navigate("/SignIn/");
                      }}
                    >
                      Log Out
                    </p>
                  </div>
                )}
              </div>
              {inforLogin.isAdmin === 0 ? (
                <>
                  <p className="Header__Function-search">
                    <FaSearch />
                  </p>
                  <p className="Header__Function-list">
                    <FaRegHeart />
                  </p>
                  <p
                    className="Header__Function-cart"
                    numberOfProduct={numberOfProduct}
                    onClick={() => {
                      handleClickCart();
                    }}
                  >
                    <FaCartPlus />
                  </p>
              </>
              ): (<></>)}
            </>
          )}

          
        </div>
      </section>
      {/* <div className="test">

            </div> */}
    </>
  );
};

export default React.memo(Header);
