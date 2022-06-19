import React, { useEffect } from 'react'
import '../Asset/ModalCart/ModalCart.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showModalCart, hideModalCart } from '../Action/showModal'

import { AiOutlineClose } from "react-icons/ai";
import CartEmpty from './CartEmpty'
import { Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SignInReducer from "../Reducer/SignInReducer";

const ModalCart = () => {
    var showOrHide = useSelector(state => state.showModalReducer).value
    const dispatch = useDispatch()

    var [listCart, setListCart] = useState([])
    const [totalPrice, setPrice] = useState(0.0)

    const navigate = useNavigate()
    const [numberOfItem, setNumberOfProduct] = useState(0)

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
                    if(data[i]["id_person"] === phone)
                    {   
                        price += data[i]["total_price"]
                        new_data.push(data[i])
                    }
                }
                setListCart(new_data)
                setPrice(price)
            })
            .catch((err) => {
                console.log(err);
        });
    }

    useEffect(() => {
        getListCart()
    }, [showOrHide]) 

    useEffect(() => {
        setNumberOfProduct(numberOfItem)
        getListCart()
    }, [numberOfItem])


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
                })
                .catch((err) => {
                    console.log(err);
                });
                break;
            }
        }

    }

    const elementItem = listCart.map((item, index) => {
        const {id, id_product, name_product, number_product, price, url, total_price } = item
        return(
            <div className='item' key={index}>
                <img className='item__url' src={`http://127.0.0.1:8000/media/${url}`}></img>
                <div className='item__info'>
                    <p>{name_product}</p>
                    <div class="quantity">
                        <input type="button" value="-" className="minus" onClick={() => {
                            decreaseNumber(id, price, number_product)
                        }}/>
                        {/* <label className="screen-reader-text" for="quantity_62aa07f704c48">Candlestick Metal quantity</label> */}
                        <input type="number" id="quantity_62aa07f704c48" className="input-text qty text" step="1" min="0" max="" name="quantity" value={number_product} title="Qty" placeholder="" inputmode="numeric" />
                        <input type="button" value="+" className="plus" onClick={() => {
                            increaseNumber(id, price)
                            // alert("1")
                        }}/>
                    </div>
                    <p>{total_price + '$'}</p>
                </div>
                <p className='item__close' onClick={() => {
                    removeItem(id)
                }}>
                    <AiOutlineClose />
                    
                </p>
            </div>
        );
    })
    
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
                    totalPrice === 0 ?
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
                    // <Navigate to="/ViewCart/" />
                    navigate("/ViewCart")
                }}>VIEW CART</button> 
            </div>
        </section>
    );
}

export default React.memo(ModalCart)