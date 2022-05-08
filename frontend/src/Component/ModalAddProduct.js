import React from 'react'
import '../Asset/ModalAddProduct/ModalAddProduct.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ModalAddProduct = () => {
    const [productName, setProductName] = useState("")
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
    return(
        <>
                <h3>Add Product</h3>
                <hr></hr>
                <form className='Input__Name' onSubmit={() => {}} method="POST">
                    <label htmlFor='product__name'>Product Name: </label>
                    <input name="product__name" placeholder="Enter ProductName" onChange={
                        (e) => {setProductName(e.target.value)}
                        }></input>
                    <button type='submit'>Add</button>
                </form>
        </>
    );
}

export default React.memo(ModalAddProduct)