import React from 'react'
import { useState, useEffect } from 'react'
import Image from '../Public/Image/empty-cart.png'
import { FaSearch, FaRegHeart } from "react-icons/fa";
import '../Asset/Products/Products.scss'
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { showModalCart } from '../Action/showModal';
import getIndex from '../Action/getIndexProduct'
import axios from 'axios'
import getIdProductAction from '../Action/getIdProductAction';

const Search = () => { 
    const navigate = useNavigate()
    const [Products, setProducts] = useState([])
    const [mouseOver, setMouseOver] = useState(0)
    const [indexCurrent, setIndexCurrent] = useState(-1)

    const handleMouseOver = (i) => {
        setMouseOver(1);
        setIndexCurrent(i)

    }
    
       
        
    
    const handleMouseOut = (i) => {
        setMouseOver(0);
        setIndexCurrent(-1)

    }
   const keywork = useSelector(state => state.getIdProductReducer).id
    console.log(keywork);
    const getProducts = () => {
       
            axios.get(`http://127.0.0.1:8000/sale/Product-search/${keywork}`)
            .then(response => response.data)
            .then(data => {
                setProducts(data)
            })
            .catch(err => {alert(err)})
        
       
    }   
    useEffect(() => {
        getProducts()
    }, [])

    const dispatch = useDispatch()
    
    // console.log(JSON.parse(sessionStorage.getItem("listCart")))
    const handleAddToCart= (i, object) => {
        localStorage.getItem("accessToken") === 'true'
        ? 
        (
            dispatch(showModalCart())
        )
        :
        (
            navigate('/SignIn/')

        )

        // xử lý chọn nhiều 
        const newArray = JSON.parse(sessionStorage.getItem("listCart"))
        let check = 0
        for(let i = 0; i < newArray.length; i++)
        {
            if(object["id"] === newArray[i]["id"])
            {
                // console.log(newArray[i])
                check += 1
                newArray[i] = {
                    ...newArray[i],
                    number: newArray[i]["number"] + 1
                }
                // console.log(newArray[i])
                break;
            }
        }
        // alert(check)
        if(check === 0)
        {
            newArray.push(object)
        }
        sessionStorage.setItem("listCart", JSON.stringify(newArray))
        // console.log(JSON.parse(sessionStorage.getItem("listCart")))
    }
    
    const handleClickDetail = (id) => {
            dispatch(getIdProductAction(id))
            navigate(`/Detail/${id}`)
            dispatch(getIndex(id))
    }
    
    
    const elementProducts = Products.map((Product, index) => {
        const {id, name_product, price, desc, url} = Product
        return(
            <div className="product" key={id} onMouseOver={() => {
                handleMouseOver(id)
    
            }} onMouseOut={() => {
                handleMouseOut(id)
            }} >
                <div className="image">
                    <img src={'http://127.0.0.1:8000' + url} alt='err' onClick={() => {
                    handleClickDetail(id)
            }}></img>
                    <div className={mouseOver === 1 && id === indexCurrent ? "button_add" : "button_add_1"} onClick={() => {
                        const object = {
                            id: id,
                            name_product: name_product,
                            number: 1,
                            price: price,
                            url: url,
                        }
                        handleAddToCart(index, object);
                    }}>Add to cart</div>
                    <div className={mouseOver === 1 && id === indexCurrent ? "tool" : "tool_1"}>
                        <p className="quick_search" onClick={() => {
                            handleClickDetail(id)
                        }}><FaSearch /></p>
                        <p className="wishlist"><FaRegHeart /></p>
                    </div>
                </div>
                <p className="name" onClick={() => {
                    handleClickDetail(id)
            }}>{name_product}</p>
                <span className="category" onClick={() => {
                    handleClickDetail(id)
            }}>Decor</span>
                <p className="price" onClick={() => {
                    handleClickDetail(id)
            }}>{price}</p>

            </div>
        )
    })
   var avay=""
     if(elementProducts.length > 0)
     {
        avay= "Will your clients accept that you go about things order."
     }
     else{
        avay= "Damn!!!! the product doesn't exist, please search again "
     }
    return(
        <section className='Product'>
            <h2 className='Product__title'>
                Featured Products
            </h2>
            <p className='Product__desc'>
               {avay}
            </p>
            <div className='Product__list'>
                {elementProducts}
            </div>
        </section>
    );
}

export default React.memo(Search)



  // const animationWork = document.querySelectorAll('.product .image .button_add')
        // const animationWork1 = document.querySelectorAll('.product .image .tool')
    
        // animationWork[i].style.animationName = 'animationAddToCart';
        // animationWork[i].style.animationDuration = '0.5s';
        // animationWork[i].style.animationFillMode = 'forwards';
        // animationWork[i].style.animationTimingFunction = 'linear';
        // animationWork[i].style.animationIterationCount = '1';
        
        // animationWork1[i].style.animationName = 'animationTool';
        // animationWork1[i].style.animationDuration = '0.5s';
        // animationWork1[i].style.animationFillMode = 'forwards';
        // animationWork1[i].style.animationTimingFunction = 'linear';
        // animationWork1[i].style.animationIterationCount = '1';