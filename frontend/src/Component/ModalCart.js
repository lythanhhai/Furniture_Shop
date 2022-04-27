import React from 'react'
import '../Asset/ModalCart/ModalCart.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showModalCart, hideModalCart } from '../Action/showModal'

import { AiOutlineClose } from "react-icons/ai";
import CartEmpty from './CartEmpty'

const ModalCart = () => {
    var showOrHide = useSelector(state => state.showModalReducer).value
    const dispatch = useDispatch()
    const elementItem = [].map((item, index) => {
        const {} = item
        return(
            <div className='item' key={index}>

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
                <button type='button' className='Button'>VIEW CART</button> 
            </div>
        </section>
    );
}

export default React.memo(ModalCart)