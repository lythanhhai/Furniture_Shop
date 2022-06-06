import React from 'react'
import '../Asset/ManageProducts/ManageProducts.scss'
import { useState, useEffect } from 'react'
import ModalAddProduct from './ModalAddProduct'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct } from '../Action/showModalProduct'
import axios from 'axios'

const ManageProducts = () => 
{
    const showModalAdd = useSelector(state => state.showModalProductReducer).value
    const dispatch = useDispatch()
    const handleShowModalAdd = () => {
        dispatch(showModalProduct())
    }
    const handleHideModalAdd = () => {
        dispatch(hideModalProduct())
    }
    // const [countClick, setCountClick] = useState(0) 
    const [products, setProducts] = useState([])

    const getProducts = () => {
        axios.get('http://127.0.0.1:8000/sale/Product-list/')
        .then(response => response.data)
        .then(data => {

            setProducts(data)
        })
        .catch(err => {alert(err)})
    }   

    useEffect(() => {
        getProducts()
    }, [])

    // const handleAdd = () => {
    //     if(countClick === 0)
    //     {
    //         setShowModal(true)
    //         setCountClick(1)
    //     }
    //     else
    //     {
    //         setShowModal(false)
    //         setCountClick(0)
    //     }
    // }
    // const handleDelete = (index) => {
    //     alert("a")
    //     axios.delete(`http://localhost:8000/Department/${index}/`)
    //     .then(res =>
    //         {
    //             console.log(res)
    //             console.log(res.data)
    //         }
            
    //     )
    //     .catch(err => {console.log(err)})
    // }

    const dataProductElement = products.map((product, index) => {
        const {id, name_product, price, desc, url} = product
        return(
                <tr key={index}>
                    <td className='data'>{id}</td>
                    <td className='data'>{name_product}</td>
                    <td className='data'>{desc}</td>
                    <td className='data'>{price}</td>
                    <td className='data'>{url}</td>
                    <td className='data'>
                        <button className='edit'>
                            Edit
                        </button>
                        <button className='delete' onClick={() => {}}>
                            Delete
                        </button>
                    </td>
                </tr>
        );
    })
    return(
        <>
            <section className='ManageProducts' onClick={() => {}}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='head'>ID</th>
                            <th className='head'>Name</th>
                            <th className='head'>Description</th>
                            <th className='head'>Price</th>
                            <th className='head'>Url</th>
                            <th className='head'></th>
                        </tr>
                    </thead>
                    <tbody>
                            {dataProductElement}
                    </tbody>
                </table>
                <button type='button' className='Button' onClick={() => {
                    handleShowModalAdd()
                }}>Add Product</button>
                <div className='wrap__modal'>

                    <section className={showModalAdd === 1 ? 'Modal__Show' : 'Modal__Hide'}>
                        <ModalAddProduct />
                    </section>
                </div>
            </section>
        </>
    );
}

export default React.memo(ManageProducts)