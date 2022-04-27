import React from 'react'
import { useState, useEffect } from 'react'
import Image from '../Public/Image/empty-cart.png'
import { FaSearch, FaRegHeart } from "react-icons/fa";
import '../Asset/Products/Products.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { showModalCart } from '../Action/showModal';
import getIndex from '../Action/getIndexProduct'

const Products = () => { 
    const navigate = useNavigate()
    const [Products, setProducts] = useState([Image, Image, Image, Image, Image, Image])
    const handleMouseOver = (i) => {
        const animationWork = document.querySelectorAll('.product .image .button_add')
        const animationWork1 = document.querySelectorAll('.product .image .tool')
    
        animationWork[i].style.animationName = 'animationAddToCart';
        animationWork[i].style.animationDuration = '0.5s';
        animationWork[i].style.animationFillMode = 'forwards';
        animationWork[i].style.animationTimingFunction = 'linear';
        animationWork[i].style.animationIterationCount = '1';
        
        animationWork1[i].style.animationName = 'animationTool';
        animationWork1[i].style.animationDuration = '0.5s';
        animationWork1[i].style.animationFillMode = 'forwards';
        animationWork1[i].style.animationTimingFunction = 'linear';
        animationWork1[i].style.animationIterationCount = '1';

    }

    const handleMouseOut = (i) => {
        const animationWork = document.querySelectorAll('.product .image .button_add')
        const animationWork1 = document.querySelectorAll('.product .image .tool')
        animationWork[i].style.animationName = 'animationAddToCart';
        animationWork[i].style.animationDuration = '0.5s';
        animationWork[i].style.animationFillMode = 'backwards';
        animationWork[i].style.animationTimingFunction = 'linear';
        animationWork[i].style.animationIterationCount = '1';
        
        animationWork1[i].style.animationName = 'animationTool';
        animationWork1[i].style.animationDuration = '0.5s';
        animationWork1[i].style.animationFillMode = 'backwards';
        animationWork1[i].style.animationTimingFunction = 'linear';
        animationWork1[i].style.animationIterationCount = '1';

        // animationWork[i].style.opacity = '0';
        // animationWork[i].style.visibility = 'hidden';

        // animationWork1[i].style.opacity = '0';
        // animationWork1[i].style.visibility = 'hidden';

    }
    const dispatch = useDispatch()
    const handleAddToCart= (i) => {
        localStorage.getItem("accessToken") === 'true'
        ? dispatch(showModalCart())
        : navigate('/SignIn/')

    }

    const handleClickDetail = (index) => {
            navigate(`/Detail/${index}`)
            dispatch(getIndex(index))
    }
    const elementProducts = Products.map((Product, index) => {
        const {} = Product
        return(
            <div className="product" key={index} onMouseOver={() => {
                handleMouseOver(index)
    
            }} onMouseOut={() => {
                handleMouseOut(index)
            }} onClick={() => {
                handleClickDetail(index)
            }}>
                <div className="image">
                    <img src={Image} alt='err'></img>
                    <div className="button_add" onClick={() => {
                        handleAddToCart(index)
                    }}>Add to cart</div>
                    <div className='tool'>
                        <p className="quick_search" onClick={() => {
                            handleClickDetail(index)
                        }}><FaSearch /></p>
                        <p className="wishlist"><FaRegHeart /></p>
                    </div>
                </div>
                <p className="name">3D Geometric Candlestick</p>
                <span className="category">Decor</span>
                <p className="price">$232</p>

            </div>
        )
    })
    return(
        <section className='Product'>
            <h2 className='Product__title'>
                Featured Products
            </h2>
            <p className='Product__desc'>
                Will your clients accept that you go about things order.
            </p>
            <div className='Product__list'>
                {elementProducts}
            </div>
        </section>
    );
}

export default React.memo(Products)