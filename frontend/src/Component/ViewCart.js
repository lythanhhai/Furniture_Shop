import React from 'react'
import '../Asset/ViewCart/ViewCart.scss'
import Image from '../Public/Image/empty-cart.png'

const ViewCart = () => {
    const elementItemCart = ['a', 'b', 'c', 'd'].map((product, index) => {
        
        return(
            <tr className='product'>
                <td className='remove'>X</td>
                <td className='img'><img src={Image} alt=""></img></td> 
                <td className='name'>3D Geometric Candlestick</td>
                <td className='price'>$232.00</td>
                <td className='number'>
                    <div className='number__quantity'>
                        <button className='but_sub' type='button'>
                            -
                        </button>
                        <p>1</p>
                        <button className='but_add' type='button'>
                            +
                        </button>
                    </div>
                </td>
                <td className='total'>$232.00</td>

            </tr>
        )
    })
    return(
        <section className='Viewcart'>
                <div className='Viewcart__List'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>PRODUCT</th>
                                <th>PRICE</th>
                                <th>QUANTITY</th>
                                <th>SUBTOTAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            {elementItemCart}
                        </tbody>
                    </table>
                    
                </div>
                
            <div className='Viewcart__Total'>
                <p className='name'>Cart TOTALS</p>
                <div className='subtotal'>
                    <p>Subtotal</p>
                    <p>$123</p>
                </div>
                <div className='shipping'>
                    <p>Shipping</p>
                    <div className='function'>
                        <div className='flat'>
                            <label>Flat rate: $20</label>
                            <input type='radio'/>
                        </div>
                        <div className='free'>
                            <label>Free shipping</label>
                            <input type='radio'/>
                        </div>
                        <p className='change'>Change address</p>
                    </div>
                </div>
                <div className='total'>
                    <p>Total</p>
                    <p>$123456</p>
                </div>
                <div className='button'>
                    <button type='button' className='button_update'>UPDATE CART</button>
                    <button type='button' className='button_proceed'>PROCEED CART</button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ViewCart)