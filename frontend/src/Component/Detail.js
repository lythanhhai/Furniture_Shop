import React from 'react'
import '../Asset/Detail/Detail.scss'
import { useNavigate } from 'react-router-dom'
import Image from '../Public/Image/empty-cart.png'
import { Navigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import {showModalCart} from '../Action/showModal'
import axios from 'axios'
import SignInReducer from '../Reducer/SignInReducer'
import { NumberInCart } from '../Action/SignInAction'

const Detail = () => {
    const navigate = useNavigate()
    const elementImage = [Image, Image, Image, Image].map((image, index) => {
        return(
            <>
                <img src={image} alt="err" className='image'></img>
            </>
        );
    })

    const [item, setItem] = useState({
        id: 0,
        name_product: "",
        price: 0,
        desc: "",
        url: "",
    })

    const handleMove = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        const img = document.querySelector('.Detail__Image .image')
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2)";

    }

    const handleLeave = (e) => {
        const img = document.querySelector('.Detail__Image .image')
        img.style.transformOrigin = 'center';
        img.style.transform = "scale(1)";
    }

    const handleNavigateCart = () => {
        // localStorage.getItem("accessToken") === 'true'
        // ? navigate('/ViewCart/')
        // : navigate('/SignIn/')
    }

    const number = useSelector((state) => state.SignInReducer).number_product;
    const dispatch = useDispatch()
    const addOrUpdate = (newArray, object) => {
        let check = 0;
            for (let i = 0; i < newArray.length; i++) {
            // console.log(object["id_product"] === newArray[i]["id_product"] && object["id_person"] === newArray[i]["id_person"])
            // console.log(object["id_product"])
            // console.log(newArray[i]["id_product"])
            if (object["id_product"] === newArray[i]["id_product"] && object["id_person"] === newArray[i]["id_person"] && newArray[i]["status"] === false)
            {
                check += 1;
                const new_object = {
                    ...object,
                    number_product: newArray[i]["number_product"] + numberOfItem,
                    total_price: (newArray[i]["number_product"] + numberOfItem) * object["total_price"]
                }
                // add vao gio hang
                axios
                .post(`http://127.0.0.1:8000/sale/Orders-update/${newArray[i]["id"]}/`, new_object)
                .then((response) => {
                    // console.log(response)
                    dispatch(showModalCart())
                })
                .catch((err) => {
                    console.log(err);
                });
                break;
            }
            }
            // alert(check)
            if (check === 0) {
                // add vao gio hang
                axios
                .post("http://127.0.0.1:8000/sale/Orders-create/", object)
                .then((response) => {
                // console.log(response)
                    dispatch(NumberInCart(number + 1))
                    dispatch(showModalCart())
                })
                .catch((err) => {
                console.log(err);
                });
            }
      }
      const inforLogin = useSelector(state => state.SignInReducer)
      const handleAddToCart = (object) => {
        // inforLogin.access === 1
        // ?
        // (
        //     dispatch(showModalCart())
        // )
        // :
        // (
        //     navigate('/SignIn/')
        // )
    
        // // xử lý chọn nhiều
        let newArray = [];
        axios
          .get("http://127.0.0.1:8000/sale/Orders-list/")
          .then((response) => {
            return response.data;
          })
          .then((data) => {
            newArray = data;
            addOrUpdate(newArray, object)
          })
          .catch((err) => {
            console.log(err);
          });
    
        
      };

    const idOfProduct = useSelector(state => state.getIdProductReducer).id

    const getDetailProduct = () => {
        axios.get(`http://127.0.0.1:8000/sale/Product-detail/${idOfProduct}/`)
        .then(res => {
            return res.data
        })
        .then(data => {
            setItem({
                id: idOfProduct,
                name_product: data["name_product"],
                price: data["price"],
                desc: data["desc"],
                url: data["url"],
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getDetailProduct()
    }, [])

    const [numberOfItem, setNumberOfProduct] = useState(1)
    const increaseNumber = () => {
        setNumberOfProduct(numberOfItem + 1) 
    }

    const decreaseNumber = () => {
        if(numberOfItem === 1)
        {
            setNumberOfProduct(numberOfItem)  
        }
        else  
        {
            setNumberOfProduct(numberOfItem - 1)  
        }
    }

    // update number 
    useEffect(() => {
        setNumberOfProduct(numberOfItem)
    }, [numberOfItem])

    const phone = useSelector((state) => state.SignInReducer).phone_number;
    return(
        <section className='Detail'>
            {/* <div className='Detail__ListImage'>
                {elementImage}
            </div> */}
            <div className='Detail__Image' onMouseLeave={(e) => {
                handleLeave(e)
            }}>

                <img src={"http://127.0.0.1:8000" + item.url} alt="err" className='image' onMouseMove={(e) => {
                handleMove(e)
            }}></img>
            </div>
            <div className='Detail__info'>
                <p className='Detail__info-name'>{item.name_product}</p>
                <p className='Detail__info-price'>${item.price}</p>
                <p className='Detail__info-desc'>{item.desc}</p>
                <div className='Detail__info-add'>
                    <div className='number'>
                        <button className='but_sub' type='button' onClick={() => (
                            decreaseNumber()
                        )}>
                            -
                        </button>
                        <p>{numberOfItem}</p>
                        <button className='but_add' type='button' onClick={() => (
                            increaseNumber()
                        )}>
                            +
                        </button>
                    </div>
                    <button type='button' className='button' onClick={() => {
                        // handleNavigateCart()
                        const object = {
                            total_price: item.price * numberOfItem,
                            status: 0,
                            number_product: numberOfItem,
                            id_person: phone,
                            id_product: item.id,
                        };
                        handleAddToCart(object);
                    }}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Detail)