import React from 'react'
import '../Asset/ViewCart/ViewCart.scss'
import Image from '../Public/Image/empty-cart.png'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SignInReducer from "../Reducer/SignInReducer";
import { useSelector, useDispatch } from 'react-redux'
import { NumberInCart } from '../Action/SignInAction'

const ViewCart = () => {
    var [listCart, setListCart] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [numberOfItem, setNumberOfProduct] = useState(0)
    const [totalPrice, setPrice] = useState(0.0)
    const [totalNewPrice, setTotalNewPrice] = useState(totalPrice)
    const [count, setCount] = useState(0)

    const phone = useSelector((state) => state.SignInReducer).phone_number;
    const getListCart = () => {
        axios
            .get("http://127.0.0.1:8000/sale/Orders-listModalCart/")
            .then((response) => {
                // console.log(response)
                return response.data;
            })
            .then((data) => {
                let new_data = []
                let price = 0
                for(let i = 0; i < data.length; i++)
                {
                    if(data[i]["id_person"] === phone && data[i]["status"] === false)
                    {
                        price += data[i]["total_price"]
                        new_data.push(data[i])
                    }
                }
                setListCart(new_data)
                setPrice(price)
                setTotalNewPrice(price)
            })
            .catch((err) => {
                console.log(err);
        });
    }

    useEffect(() => {
        getListCart()
    }, [numberOfItem])

    const number = useSelector((state) => state.SignInReducer).number_product;
    const increaseNumber = (id, price) => {
        const newArray = listCart
        for(let i = 0; i < newArray.length; i++)
        {
            if(id === newArray[i]["id"])
            {                
                const new_object = {
					id_product: newArray[i]["id_product"],
					id_person: newArray[i]["id_person"],
					status: newArray[i]["status"],
					total_price: (newArray[i]["number_product"] + 1) * price,
					number_product: newArray[i]["number_product"] + 1,
				}
                // console.log(price)
                // console.log(new_object)
                axios
                .post(`http://127.0.0.1:8000/sale/Orders-update/${id}/`, new_object)
                .then((response) => {
                    console.log(response)
                    // setNumberOfProduct(new_object["number_product"])
                    setNumberOfProduct(!numberOfItem)

                })
                .catch((err) => {
                    console.log(err);
                });
                break;
            }
        }
    }

    const decreaseNumber = (id, price, number_product) => {
        if(number_product === 1)
        {
            const newArray = listCart
            for(let i = 0; i < newArray.length; i++)
            {
                if(id === newArray[i]["id"])
                {                
                    // const new_object = {
                    //     id_product: newArray[i]["id_product"],
                    //     id_person: newArray[i]["id_person"],
                    //     status: newArray[i]["status"],
                    //     total_price: newArray[i]["number_product"] * price,
                    //     number_product: newArray[i]["number_product"] + 1,
                    // }

                    axios
                    .delete(`http://127.0.0.1:8000/sale/Orders-delete/${id}/`)
                    .then((response) => {
                        console.log(response)
                        setNumberOfProduct(!numberOfItem)
                        dispatch(NumberInCart(number - 1))
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                    break;
                }
            }
        }
        else  
        {
            const newArray = listCart
            for(let i = 0; i < newArray.length; i++)
            {
                if(id === newArray[i]["id"])
                {                
                    const new_object = {
                        id_product: newArray[i]["id_product"],
                        id_person: newArray[i]["id_person"],
                        status: newArray[i]["status"],
                        total_price: (newArray[i]["number_product"] - 1) * price,
                        number_product: newArray[i]["number_product"] - 1,
                    }

                    axios
                    .post(`http://127.0.0.1:8000/sale/Orders-update/${id}/`, new_object)
                    .then((response) => {
                        console.log(response)
                        // setNumberOfProduct(new_object["number_product"])
                        setNumberOfProduct(!numberOfItem)
                    })
                    .catch((err) => {
                        console.log(err);
                    });
                    break;
                }
            }
            }
    }

    const removeItem = (id) => {

        const newArray = listCart
        for(let i = 0; i < newArray.length; i++)
        {
            if(id === newArray[i]["id"])
            {                

                axios
                .delete(`http://127.0.0.1:8000/sale/Orders-delete/${id}/`)
                .then((response) => {
                    console.log(response)
                    setNumberOfProduct(!numberOfItem)
                    dispatch(NumberInCart(number - 1))
                })
                .catch((err) => {
                    console.log(err);
                });
                break;
            }
        }

    }
    
    const handleOrder = () => {
        const newArray = listCart
        for(let i = 0; i < newArray.length; i++)
        {
                var today = new Date();
                var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                // var timezone = today.getTimezoneOffset()
                var dateTime = date+' '+time;
                const new_object = {
					...newArray[i],
					status: 1,
                    datetime: dateTime,
				}
                // console.log(price)
                // console.log(new_object)
                axios
                .post(`http://127.0.0.1:8000/sale/Orders-update/${new_object["id"]}/`, new_object)
                .then((response) => {
                    console.log(response)
                    // setNumberOfProduct(new_object["number_product"])
                    
                })
                .catch((err) => {
                    console.log(err);
                });
        }
        setNumberOfProduct(!numberOfItem)
        dispatch(NumberInCart(number - newArray.length))    
    }

    const inforLogin = useSelector((state) => state.SignInReducer)
    // onsole.log(inforLogin)
    const elementItemCart = listCart.map((product, index) => {
        const {id, id_product, name_product, number_product, price, url, total_price } = product
        return(
            <tr className='product'>
                <td className='remove' onClick={() => {
                    removeItem(id)
                }}>X</td>
                <td className='img'><img src={`http://127.0.0.1:8000/media/${url}`} alt=""></img></td> 
                <td className='name'>{name_product}</td>
                <td className='price'>{'$' + price}</td>
                <td className='number'>
                    <div className='number__quantity'>
                        <button className='but_sub' type='button' onClick={() => {
                            decreaseNumber(id, price, number_product)
                        }}>
                            -
                        </button>
                        <p>{number_product}</p>
                        <button className='but_add' type='button' onClick={() => {
                            increaseNumber(id, price)
                        }}>
                            +
                        </button>
                    </div>
                </td>
                <td className='total'>{"$" + price * number_product}</td>

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
                    <p>${totalPrice}</p>
                </div>
                <div className='shipping'>
                    <p>Shipping</p>
                    <div className='function'>
                        <div className='flat'>
                            <label>Flat rate: $20</label>
                            <input type='checkbox' value={20} onChange={(e) => {
                                if(e.target.checked && count === 0)
                                {
                                    setCount(1)
                                    setTotalNewPrice(totalPrice + parseInt(e.target.value))
                                }
                                else if(e.target.checked === false && count === 1)
                                {
                                    setCount(0)
                                    setTotalNewPrice(totalPrice)
                                }
                            }}/>
                        </div>
                        <div className='free'>
                            <label>Free shipping</label>
                            <input type='checkbox'/>
                        </div>
                        <p className='change' onClick={() => {
                            navigate("/my-account/AccountDetail")
                        }}>Change address</p>

                    </div>
                </div>
                <div className='address'>
                    <p className='oke' onClick={() => {
                           
                        }}>Current Address: {inforLogin.address}</p>
                </div>

                <div className='total'>
                    <p>Total</p>
                    <p>${totalNewPrice}</p>
                </div>
                <div className='button'>
                    {/* <button type='button' className='button_update'>UPDATE CART</button> */}
                    <button type='button' className='button_proceed' onClick={() => {
                            handleOrder()
                    }}>PROCEED CART</button>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ViewCart)