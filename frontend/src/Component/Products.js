import React from 'react'
import { useState, useEffect } from 'react'

const Products = () => { 
    const [Products, setProducts] = useState([])
    const elementProducts = Products.map((Product, index) => {
        const {} = Product
        return(
            <>
                
            </>
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

            </div>
        </section>
    );
}

export default React.memo(Products)