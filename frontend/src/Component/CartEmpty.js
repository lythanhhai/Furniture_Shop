import React from 'react'
import '../Public/Image/empty-cart.png'
import '../Asset/ModalCart/CartEmpty.scss'
import Image from '../Public/Image/empty-cart.png'


const CartEmpty = () => {

    return(
        <section className="Cart_Empty">
            <img src={Image} alt="error"></img>
            <p>NO PRODUCTS IN THE CART.</p>
        </section>
    );
}

export default React.memo(CartEmpty)