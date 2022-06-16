import React from 'react'
import '../Asset/ViewCart/ViewCart.scss'
import Image from '../Public/Image/empty-cart.png'
import { useState, useEffect } from 'react'

const ViewCart = () => {
    var itemInCart =  JSON.parse(sessionStorage.getItem("listCart"))
    // console.log(itemInCart === null)
    var condition = itemInCart === null ? [] : itemInCart

    const [numberOfItem, setNumberOfProduct] = useState(1)
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
            setNumberOfProduct(0)
            sessionStorage.setItem("listCart", JSON.stringify(array)) 

    }


    const elementItemCart = condition.map((product, index) => {
        const {id, name_product, price, url, number} = product
        return(
            <tr className='product'>
                <td className='remove' onClick={() => {
                    removeItem(id)
                }}>X</td>
                <td className='img'><img src={`http://127.0.0.1:8000${url}`} alt=""></img></td> 
                <td className='name'>{name_product}</td>
                <td className='price'>{'$' + price}</td>
                <td className='number'>
                    <div className='number__quantity'>
                        <button className='but_sub' type='button' onClick={() => {
                            decreaseNumber(id)
                        }}>
                            -
                        </button>
                        <p>{number}</p>
                        <button className='but_add' type='button' onClick={() => {
                            increaseNumber(id)
                        }}>
                            +
                        </button>
                    </div>
                </td>
                <td className='total'>{"$" + price * number}</td>

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