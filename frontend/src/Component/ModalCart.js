import React, { useEffect } from 'react'
import '../Asset/ModalCart/ModalCart.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showModalCart, hideModalCart } from '../Action/showModal'

import { AiOutlineClose } from "react-icons/ai";
import CartEmpty from './CartEmpty'
import { useNavigate } from 'react-router-dom'

const ModalCart = () => {
    var showOrHide = useSelector(state => state.showModalReducer).value
    const dispatch = useDispatch()
    var itemInCart =  JSON.parse(sessionStorage.getItem("listCart"))
    // console.log(itemInCart === null)
    var condition = itemInCart === null ? [] : itemInCart
    const navigate = useNavigate()
    const [numberOfItem, setNumberOfProduct] = useState(0)
    const increaseNumber = (id) => {
        const newArray = JSON.parse(sessionStorage.getItem("listCart"))
        for(let i = 0; i < newArray.length; i++)
        {

            if(id === newArray[i]["id"])
            {                
                newArray[i] = {
                    ...newArray[i],
                    number: newArray[i]["number"] + 1
                }
                setNumberOfProduct(newArray[i]["number"])
                break;
            }
        }
        sessionStorage.setItem("listCart", JSON.stringify(newArray))
    }
    useEffect(() => {
        setNumberOfProduct(numberOfItem)
    }, [numberOfItem])

    const decreaseNumber = (id) => {
        if(numberOfItem === 1)
        {
            const newArray = JSON.parse(sessionStorage.getItem("listCart"))
            const array = []
            for(let i = 0; i < newArray.length; i++)
            {

                if(id === newArray[i]["id"])
                {                
                    continue
                }
                else 
                {
                    array.push(newArray[i])
                }
            }
            setNumberOfProduct(0)
            sessionStorage.setItem("listCart", JSON.stringify(array)) 
        }
        else  
        {
            const newArray = JSON.parse(sessionStorage.getItem("listCart"))
            for(let i = 0; i < newArray.length; i++)
            {

                if(id === newArray[i]["id"])
                {                
                    newArray[i] = {
                        ...newArray[i],
                        number: newArray[i]["number"] - 1
                    }
                    setNumberOfProduct(newArray[i]["number"])
                    break;
                }
            }
            sessionStorage.setItem("listCart", JSON.stringify(newArray))
        }
    }

    const removeItem = (id) => {

            const newArray = JSON.parse(sessionStorage.getItem("listCart"))
            const array = []
            for(let i = 0; i < newArray.length; i++)
            {

                if(id === newArray[i]["id"])
                {                
                    continue
                }
                else 
                {
                    array.push(newArray[i])
                }
            }
            setNumberOfProduct(-10)
            sessionStorage.setItem("listCart", JSON.stringify(array)) 

    }

    const elementItem = condition.map((item, index) => {
        const {id, name_product, number, price, url } = item
        return(
            <div className='item' key={index}>
                <img className='item__url' src={`http://127.0.0.1:8000${item.url}`}></img>
                <div className='item__info'>
                    <p>{name_product}</p>
                    <div class="quantity">
                        <input type="button" value="-" className="minus" onClick={() => {
                            decreaseNumber(id)
                        }}/>
                        {/* <label className="screen-reader-text" for="quantity_62aa07f704c48">Candlestick Metal quantity</label> */}
                        <input type="number" id="quantity_62aa07f704c48" className="input-text qty text" step="1" min="0" max="" name="quantity" value={number} title="Qty" placeholder="" inputmode="numeric" />
                        <input type="button" value="+" className="plus" onClick={() => {
                            increaseNumber(id)
                            // alert("1")
                        }}/>
                    </div>
                    <p>{price + '$'}</p>
                </div>
                <p className='item__close' onClick={() => {
                    removeItem(id)
                }}>
                    <AiOutlineClose />
                    
                </p>
            </div>
        );
    })
    const [totalPrice, setPrice] = useState(0.0)
    return(
        <section className={showOrHide === 1 ? 'ModalCart' : "ModalCart_hide"}>
            <div className='ModalCart__transparent' onClick={() => {dispatch(hideModalCart())}}>

            </div>
            <div className='ModalCart__Cart'>
                <div className='ModalCart__Cart-top'>
                    <p className='title'>Shopping cart</p>
                    <div onClick={() => {dispatch(hideModalCart())}}>
                        <p className='close'>
                            <AiOutlineClose />
                        </p>
                        <p className='close_text'>Close</p>
                    </div>
                </div> 
                {
                    totalPrice === 1 ?
                    (<>
                        <CartEmpty />
                    </>)
                    :
                    (<>
                            <div className='ModalCart__Cart-list'>
                                {elementItem}
                            </div>
                            <div className='ModalCart__Cart-price'>
                                <p className='title'>SUBTOTAL</p>
                                <p className='price'>${totalPrice}</p>
                            </div> 
                    </>)
                }   
                <button type='button' className='Button' onClick={() => {
                    navigate("/ViewCart")
                }}>VIEW CART</button> 
            </div>
        </section>
    );
}

export default React.memo(ModalCart)