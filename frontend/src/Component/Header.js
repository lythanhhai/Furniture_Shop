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
    return(
        <>
            <section className='Header'>
                <div className='Header__Logo' onClick={() => {
                    navigate('/Home')
                }}>
                    <i className="fa-brands fa-drupal"></i>
                    <p>Furniture Shop</p>
                </div>
                <div className='Header__Function'>
                    <p className='Header__Function-SignIn' onClick={() => {
                    navigate('/SignIn')
                }}>
                    LOGIN / REGISTER</p>
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

