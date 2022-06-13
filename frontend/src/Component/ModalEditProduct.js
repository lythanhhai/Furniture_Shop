import React from 'react'
import '../Asset/ModalAddProduct/ModalAddProduct.scss'
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct } from '../Action/showModalProduct'
export const id_pro = 17;
const ModalEditProduct = ({getCheckEditSuccess, id}) => {
    const [productName, setProductName] = useState({
       
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

    const handleGetDetailProduct = () => {
       
        // alert(id);
        axios
          .get(`http://127.0.0.1:8000/sale/Product-detail/${id}/`)
          .then((response) => {
            // console.log(response);
            setProductName(response.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
    useEffect(() => {
        handleGetDetailProduct()
    }, [id])

    const { name_product, price, desc, url} = productName
    
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

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        // I've kept this example simple by using the first image instead of multiple
        setSelectedFile(e.target.files[0])
    }

    //


    const handleupdate = (e) => {
        e.preventDefault()
        const product= {
            ...productName
        };
        // const headers = {
        //     "Access-Control-Allow-Origin": "*",
        //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
        //   }
        // axios
        //   .post(`http://127.0.0.1:8000/sale/Product-update/${id}/`, product)
        //   .then((response) => {
        //     getCheckEditSuccess(1)
        //     console.log(response.data);
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        var bodyFormData = new FormData();
        bodyFormData.append('name_product', product["name_product"]);
        bodyFormData.append('price', product["price"]);
        bodyFormData.append('desc', product["desc"]);
        console.log(selectedFile)
        bodyFormData.append('url', selectedFile); 
        axios({
            method: "POST",
            url: `http://127.0.0.1:8000/sale/Product-update/${id}/`,
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          }).then(res => {
              getCheckEditSuccess(1)
              console.log(res);
            }).catch(err => {
              console.log(err);
            });
      };
    return(
        <>      <div className='header_add'>
                    <h3>Edit Product</h3>
                    <p onClick={() => {handleHideModalAdd()}}>close</p>
                </div>
                <hr></hr>
                <form className='Input__Name' ref={form} onSubmit={(e) => {handleupdate(e)}}>
                    <div className='Input__Name-left'>
                        <label htmlFor='product__name' id="label_name">Product Name: </label>
                        <input name="product__name" id="input_name" placeholder="Enter Product Name"
                        value={name_product}
                         onChange={
                            (e) => {setProductName({
                                ...productName,
                                name_product: e.target.value
                            })}
                            }></input>
                        <label htmlFor='product__desc' id="label_description">Description: </label>
                        <input name="product__desc" id="input_description" placeholder="Enter Description" 
                        value={desc} onChange={
                            (e) => {setProductName({
                                ...productName,
                                desc: e.target.value
                            })}
                            }></input>
                        <label htmlFor='product__price' id="label_price">Price: </label>
                        <input name="product__price" id="input_price" placeholder="Enter Price"
                        value={price} onChange={
                            (e) => {setProductName({
                                ...productName,
                                price: parseFloat(e.target.value)
                            })}
                            }></input>
                        <button type='submit'>Edit</button>
                    </div>
                    <div className='Input__Name-right'>
                       
                        {selectedFile !== undefined ? <img src={preview} /> : <img src={`http://127.0.0.1:8000${url}`} alt="err"></img> }
                        <input type='file' id="input_file" onChange={
                            (e) => {
                                setProductName({
                                    ...productName,
                                    url:onSelectFile(e)
                                })}
                            }></input>
                    </div>
                </form>
        </>
    );
}

export default React.memo(ModalEditProduct)