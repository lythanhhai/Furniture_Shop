import React from 'react'
import '../Asset/ModalAdd/ModalAdd.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ModalAddProduct = ({showModal}) => {
    const [productName, setProductName] = useState("")
    const handleAddDepartment = () => {
        const Department = {
            DepartmentName: departmentName,
        }
        axios.post(`http://localhost:8000/Department/`, Department)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
    }
    return(
        <section className={showModal === true ? 'Modal__Show' : 'Modal__Hide'}>
                <h3>Add Product</h3>
                <hr></hr>
                <form className='Input__Name' onSubmit={() => {}} method="POST">
                    <label htmlFor='product__name'>Department Name: </label>
                    <input name="product_name" placeholder="Enter ProductName" onChange={
                        (e) => {setProductName(e.target.value)}
                        }></input>
                    <button type='submit'>Add</button>
                </form>
        </section>
    );
}

export default React.memo(ModalAddProduct)