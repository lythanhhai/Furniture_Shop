import React from 'react'
import '../Asset/ModalAddProduct/ModalAddProduct.scss'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct, hideModalUpdate, showModalUpdate } from '../Action/showModalProduct'

const ModalAddProduct = ({getCheckAddSuccess}) => {
    const [productName, setProductName] = useState({
        name_product: "",
        price: 0,
        desc: "",
        url: ""
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
    const handleAddProduct = (e) => {
        e.preventDefault()
        const product = {
            ...productName
        };
        var bodyFormData = new FormData();
        bodyFormData.append('name_product', product["name_product"]);
        bodyFormData.append('price', product["price"]);
        bodyFormData.append('desc', product["desc"]);
        bodyFormData.append('url', selectedFile); 
        axios({
            method: "POST",
            url: "http://127.0.0.1:8000/sale/Product-create/",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => {
              //handle success
              getCheckAddSuccess(1)
              alert("Add Product Success!!!")
              window.location.reload();
              console.log(res);
            }).catch(err => {
              //handle error
              console.log(err);
            });
    }
    
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        setProductName({
            ...productName,
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
    return(
        <>      <div className='header_add'>
                    <h3>Add Product</h3>
                    <p onClick={() => {handleHideModalAdd()}}>close</p>
                </div>
                <hr></hr>
                <form className='Input__Name' ref={form} onSubmit={(e) => {handleAddProduct(e)}}>
                    <div className='Input__Name-left'>
                        <label htmlFor='product__name' id="label_name">Product Name: </label>
                        <input name="product__name" id="input_name" placeholder="Enter Product Name" onChange={
                            (e) => {setProductName({
                                ...productName,
                                name_product: e.target.value
                            })}
                            }></input>
                        <label htmlFor='product__desc' id="label_description">Description: </label>
                        <input name="product__desc" id="input_description" placeholder="Enter Description" onChange={
                            (e) => {setProductName({
                                ...productName,
                                desc: e.target.value
                            })}
                            }></input>
                        <label htmlFor='product__price' id="label_price">Price: </label>
                        <input name="product__price" id="input_price" placeholder="Enter Price" onChange={
                            (e) => {setProductName({
                                ...productName,
                                price: parseFloat(e.target.value)
                            })}
                            }></input>
                        <button type='submit'>Add</button>
                    </div>
                    <div className='Input__Name-right'>
                       
                        {selectedFile !== undefined ? <img src={preview} /> : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="err"></img> }
                        <input type='file' id="input_file" onChange={
                            (e) => {onSelectFile(e);}
                            }></input>
                    </div>
                </form>
        </>
    );
}

export default React.memo(ModalAddProduct)