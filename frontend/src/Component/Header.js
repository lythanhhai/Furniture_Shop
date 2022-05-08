import React from 'react'
import '../Asset/Header/Header.scss'
import { FaSearch, FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { showModalCart, hideModalCart } from '../Action/showModal';
import { Navigate, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate()
    const [numberOfProduct, setNumberOfProduct] = useState(0)
    const showOrHide = useSelector(state => state.showModalReducer).value
    const dispatch = useDispatch()
    
    const handleClickCart = () => {
        if(showOrHide === 0)
        {
            dispatch(showModalCart())
        }
        else
        {
            dispatch(hideModalCart())
        }
    }
    const handleMouseOverAccount = () => {
        const Down = document.querySelector('.Header__Function-Account .Down')
        Down.style.display = "flex"
    }
    const handleMouseOutAccount = () => {
        const Down = document.querySelector('.Header__Function-Account .Down')
        Down.style.display = "none"
    }
    return(
        <>
            <section className='Header'>
                <div className='Header__Logo' onClick={() => {
                    navigate('/Home')
                }}>
                    <i className="fa-brands fa-drupal"></i>
                    <p>Furniture Shop</p>
                </div>
                <div className='Header_Search'>
                    <label htmlFor='search'></label>
                    <input type="text" placeholder="Enter name product"></input>
                </div>
                <div className='Header__Function'>
                    {
                        localStorage.getItem("accessToken") === 'false' ? (<>
                                <p className='Header__Function-SignIn' onClick={() => {
                                        navigate('/SignIn')
                                    }}>LOGIN / REGISTER</p>
                        </>) : (<>
                            <div className='Header__Function-Account'>
                                <p className='title' onMouseOver={() => {
                                    handleMouseOverAccount()
                                }}
                                onMouseOut={() => {
                                    handleMouseOutAccount()
                                }}>My Account</p>
                                {
                                    localStorage.getItem('isAdmin') === 'false'
                                    ? (
                                        <div className='Down' onMouseOver={() => {
                                            handleMouseOverAccount()
                                        }}
                                        onMouseOut={() => {
                                            handleMouseOutAccount()
                                        }}>
                                            <p onClick={() => {
                                                navigate('/Home/')
                                            }}>Home</p>
                                            <p onClick={() => {
                                                navigate('/MyAccount/AccountDetail')
                                            }}>Account Detail</p>
                                            <p onClick={() => {
                                                navigate('/MyAccount/Address/')
                                            }}>Address</p>
                                            <p onClick={() => {
                                                navigate('/SignIn/')
                                            }}>Log Out</p>
                                        </div>
                                    )
                                    : 
                                    (
                                        <div className='Down' onMouseOver={() => {
                                            handleMouseOverAccount()
                                        }}
                                        onMouseOut={() => {
                                            handleMouseOutAccount()
                                        }}>
                                            <p onClick={() => {
                                                navigate('/Products/')
                                            }}>Add Products</p>
                                            <p onClick={() => {
                                                navigate('/SignIn/')
                                            }}>Log Out</p>
                                        </div>
                                    )
                                }
                                
                            </div>
                            
                                    </>)
                    }
                    
                    <p className="Header__Function-search"><FaSearch /></p>
                    <p className="Header__Function-list"><FaRegHeart /></p>
                    <p className="Header__Function-cart" numberOfProduct={numberOfProduct} onClick={
                        () => {
                            handleClickCart()
                        }
                    }><FaCartPlus /></p>
                </div>
            </section>
            {/* <div className="test">

            </div> */}
        </>
    )
}

export default React.memo(Header)

