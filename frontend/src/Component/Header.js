import React from 'react'
import '../Asset/Header/Header.scss'
import { FaSearch, FaCartPlus, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from 'react';

const Header = () => {
    const [numberOfProduct, setNumberOfProduct] = useState(0)
    return(
        <>
            <section className='Header'>
                <div className='Header__Logo'>
                    <i className="fa-brands fa-drupal"></i>
                    <p>Furniture Shop</p>
                </div>
                <div className='Header__Function'>
                    <p className='Header__Function-SignIn'>LOGIN / REGISTER</p>
                    <p className="Header__Function-search"><FaSearch /></p>
                    <p className="Header__Function-list"><FaRegHeart /></p>
                    <p className="Header__Function-cart" numberOfProduct={numberOfProduct}><FaCartPlus /></p>
                </div>
            </section>
            {/* <div className="test">

            </div> */}
        </>
    )
}

export default React.memo(Header)

