import React, { useCallback } from 'react'
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
import { NumberInCart } from '../Action/SignInAction';
import SignInReducer from '../Reducer/SignInReducer';

const Search = () => { 
    const navigate = useNavigate()
    const [Products, setProducts] = useState([])
    const [mouseOver, setMouseOver] = useState(0)
    const [check, setCheck] = useState(0)
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
   const number = useSelector((state) => state.SignInReducer).number_product;
   const phone = useSelector((state) => state.SignInReducer).phone_number;
    // console.log(keywork);
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
    }, [keywork])

    const dispatch = useDispatch()
    
    const addOrUpdate = (newArray, object) => {
        let check = 0;
            for (let i = 0; i < newArray.length; i++) {
                if (object["id_product"] === newArray[i]["id_product"] && object["id_person"] === newArray[i]["id_person"] && newArray[i]["status"] === false)
                {
                    check += 1;
                    const new_object = {
                        ...object,
                        number_product: newArray[i]["number_product"] + 1,
                        total_price: (newArray[i]["number_product"] + 1) * object["total_price"]
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
                  console.log(response)
                  dispatch(NumberInCart(number + 1))
                  dispatch(showModalCart())
                })
                .catch((err) => {
                console.log(err);
                });
            }
      }
      const inforLogin = useSelector(state => state.SignInReducer)
      const handleAddToCart = (i, object) => {

        // // xử lý chọn nhiều
        let newArray = [];
        axios
          .get("http://127.0.0.1:8000/sale/Orders-list/")
          .then((response) => {
            // console.log(response)
            return response.data;
          })
          .then((data) => {
            newArray = data;
            // console.log(newArray)
            addOrUpdate(newArray, object)
            
          })
          .catch((err) => {
            console.log(err);
          });
    
        
      };
    
    const handleClickDetail = (id) => {
            dispatch(getIdProductAction(id))
            navigate(`/Detail`)
            dispatch(getIndex(id))
    }
    
    
    const elementProducts = Products.map((Product, index) => {
        const { id, name_product, price, desc, url } = Product;
        return (
          <div
            className="product"
            key={id}
            onMouseOver={() => {
              handleMouseOver(id);
            }}
            onMouseOut={() => {
              handleMouseOut(id);
            }}
          >
            <div className="image">
              <img
                src={"http://127.0.0.1:8000" + url}
                alt="err"
                onClick={() => {
                  handleClickDetail(id);
                }}
              ></img>
              <div
                className={
                  mouseOver === 1 && id === indexCurrent
                    ? "button_add"
                    : "button_add_1"
                }
                onClick={() => {
                  const object = {
                    total_price: price * 1,
                    status: 0,
                    number_product: 1,
                    id_person: phone,
                    id_product: id,
                  };

                  handleAddToCart(index, object);
                }}
              >
                Add to cart
              </div>
              <div
                className={
                  mouseOver === 1 && id === indexCurrent ? "tool" : "tool_1"
                }
              >
                <p
                  className="quick_search"
                  onClick={() => {
                    handleClickDetail(id);
                  }}
                >
                  <FaSearch />
                </p>
                <p className="wishlist">
                  <FaRegHeart />
                </p>
              </div>
            </div>
            <p
              className="name"
              onClick={() => {
                handleClickDetail(id);
              }}
            >
              {name_product}
            </p>
            <span
              className="category"
              onClick={() => {
                handleClickDetail(id);
              }}
            >
              Decor
            </span>
            <p
              className="price"
              onClick={() => {
                handleClickDetail(id);
              }}
            >
              {"$" + price}
            </p>
          </div>
        );
      });
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
                {elementProducts.length > 0 ? elementProducts : <img className='image__noProduct' src="https://www.imepress.com/assets/images/no-product.jpg" alt="err" />}
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