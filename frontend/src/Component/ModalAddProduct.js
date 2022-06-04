import React from 'react'
import '../Asset/ModalAddProduct/ModalAddProduct.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct } from '../Action/showModalProduct'

const ModalAddProduct = () => {
    const [productName, setProductName] = useState({

    })
    const showModalAdd = useSelector(state => state.showModalProductReducer).value
    const dispatch = useDispatch()
    const handleShowModalAdd = () => {
        dispatch(showModalProduct())
    }
    const handleHideModalAdd = () => {
        dispatch(hideModalProduct())
    }
    // const handleAddDepartment = () => {
    //     const Department = {
    //         DepartmentName: departmentName,
    //     }
    //     axios.post(`http://localhost:8000/Department/`, Department)
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     })
    // }
    const [selectedFile, setSelectedFile] = useState()
    const [preview, setPreview] = useState()
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }

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
    return(
        <>      <div className='header_add'>
                    <h3>Add Product</h3>
                    <p onClick={() => {handleHideModalAdd()}}>close</p>
                </div>
                <hr></hr>
                <form className='Input__Name' onSubmit={() => {}} method="POST">
                    <div className='Input__Name-left'>
                        <label htmlFor='product__name' id="label_name">Product Name: </label>
                        <input name="product__name" id="input_name" placeholder="Enter Product Name" onChange={
                            (e) => {setProductName(e.target.value)}
                            }></input>
                        <label htmlFor='product__desc' id="label_description">Description: </label>
                        <input name="product__desc" id="input_description" placeholder="Enter Description" onChange={
                            (e) => {setProductName(e.target.value)}
                            }></input>
                        <label htmlFor='product__price' id="label_price">Price: </label>
                        <input name="product__price" id="input_price" placeholder="Enter Price" onChange={
                            (e) => {setProductName(e.target.value)}
                            }></input>
                        <button type='submit'>Add</button>
                    </div>
                    <div className='Input__Name-right'>
                       
                        {selectedFile !== undefined ? <img src={preview} /> : <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" alt="err"></img> }
                        <input type='file' id="input_file" onChange={
                            (e) => {onSelectFile(e); console.log(selectedFile)}
                            }></input>
                    </div>
                </form>
        </>
    );
}

export default React.memo(ModalAddProduct)