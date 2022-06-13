import React from 'react'
import '../Asset/ModalAddProduct/ModalAddProduct.scss'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct } from '../Action/showModalProduct'
export const id_pro= 17;
const ModalEditProduct = () => {
    const [productName1, setProductName1] = useState({
       
    })
  
    const form = useRef(null)

    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()

    const showModalAdd = useSelector(state => state.showModalProductReducer).value
    const dispatch = useDispatch()
    const handleShowModalAdd = () => {
        dispatch(showModalProduct())
    }
    const handleHideModalAdd = () => {
        dispatch(hideModalProduct())
    }
    // add product

    const handleAddProduct1= () => {
       
       
        axios
          .get(`http://127.0.0.1:8000/sale/Product-detail/${id_pro}/`)
          .then((response) => {
            // console.log(response);
            setProductName1(response.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      useEffect(() => {
        handleAddProduct1()
    },[])
    const { name_product, price,desc,url} = productName1
    
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        setProductName1({
            ...productName1,
            url: selectedFile
        })

        console.log(selectedFile)
        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(objectUrl)
    }, [selectedFile])

    // useEffect(() => {
        
    //     // console.log(productName)
    // }, [productName])

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    //


    const handleupdate1 = (e) => {
        e.preventDefault()
        const product1= {
            ...productName1
        };
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        axios
          .post(`http://127.0.0.1:8000/sale/Product-update/${id_pro}/`, product1)
          .then((response) => {
            console.log(response);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    return(
        <>      <div className='header_add'>
                    <h3>Add Product</h3>
                    <p onClick={() => {handleHideModalAdd()}}>close</p>
                </div>
                <hr></hr>
                <form className='Input__Name' ref={form} 
                method="POST"
                onSubmit={(e) => {handleupdate1(e)}}>
                    <div className='Input__Name-left'>
                        <label htmlFor='product__name' id="label_name">Product Name: </label>
                        <input name="product__name" id="input_name" placeholder="Enter Product Name"
                        value={name_product}
                         onChange={
                            (e) => {setProductName1({
                                ...productName1,
                                name_product: e.target.value
                            })}
                            }></input>
                        <label htmlFor='product__desc' id="label_description">Description: </label>
                        <input name="product__desc" id="input_description" placeholder="Enter Description" 
                        value={desc} onChange={
                            (e) => {setProductName1({
                                ...productName1,
                                desc: e.target.value
                            })}
                            }></input>
                        <label htmlFor='product__price' id="label_price">Price: </label>
                        <input name="product__price" id="input_price" placeholder="Enter Price"
                        value={price} onChange={
                            (e) => {setProductName1({
                                ...productName1,
                                price: parseFloat(e.target.value)
                            })}
                            }></input>
                        <button type='submit'>Edit</button>
                    </div>
                    <div className='Input__Name-right'>
                       
                        {selectedFile !== undefined ? <img src={preview} /> : <img src={`http://127.0.0.1:8000${url}`} alt="err"></img> }
                        <input type='file' id="input_file" onChange={
                            (e) => {
                                setProductName1({
                                    ...productName1,
                                    url:onSelectFile(e)
                                })}
                            }></input>
                    </div>
                </form>
        </>
    );
}

export default React.memo(ModalEditProduct)