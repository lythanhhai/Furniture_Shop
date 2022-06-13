import React from 'react'
import '../Asset/ManageProducts/ManageProducts.scss'
import { useState, useEffect } from 'react'
import ModalAddProduct from './ModalAddProduct'
import ModalEditProduct from './ModalEditProduct'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct, showModalUpdate, hideModalUpdate } from '../Action/showModalProduct'
import axios from 'axios'

const ManageProducts = () => 
{
    const showModalAdd = useSelector(state => state.showModalProductReducer).value
    const ModalUpdate = useSelector(state => state.showModalProductReducer).value_edit
    const [checkAdd, setCheckAdd] = useState(0)
    const [checkEdit, setCheckEdit] = useState(0)
    const [idClick, setIdClick] = useState(-1)
    var id_current = -1
    const dispatch = useDispatch()
    const handleShowModalAdd = () => {
        dispatch(showModalProduct())
    }
    
    const handleHideModalAdd = () => {
        dispatch(hideModalProduct())
    }

    const handleShowModalUpdate = () => {
        dispatch(showModalUpdate())
    }
    
    const handleHideModalUpdate = () => {
        dispatch(hideModalUpdate())
    }

    const getCheckAddSuccess = (data) => {
        // return 
        if(data === 1)
        {
            setCheckAdd(1)
        }
        else
        {
            setCheckAdd(0)
        }
    }
    const getCheckEditSuccess = (data) => {
        // return 
        if(data === 1)
        {
            setCheckEdit(1)
        }
        else
        {
            setCheckEdit(0)
        }
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
    }, [checkAdd, checkEdit])

    const getid = (id)=>
    {
        return id;
    }

    useEffect(() => {
        setIdClick(id_current)
    })

    const handleDelete = (id) => {
        
        axios.delete(`http://127.0.0.1:8000/sale/Product-delete/${id}/`)
        .then(res =>
            {
                console.log(res)
                console.log(res.data)
            }
            
        )
        .catch(err => {console.log(err)})
    }

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
                        <button    className='edit' 
                        onClick={() => {
                            // alert(id_click)
                            id_current = parseInt(id)
                            handleShowModalUpdate();
                           
                        }}>
                            Edit
                        </button>

                       
                        <button className='delete' onClick={() => {
                            handleDelete( Number(id))
                        }}>
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

                    <section className={showModalAdd === 1 && ModalUpdate === 0 ? 'Modal__Show' : 'Modal__Hide'}>
                        <ModalAddProduct getCheckAddSuccess={getCheckAddSuccess}/>
                    </section>

                    <section className={showModalAdd === 0 && ModalUpdate === 1 ? 'Modal__Show' : "Modal__Hide"}>
                        <ModalEditProduct getCheckEditSuccess={getCheckEditSuccess} id={idClick} />
                    </section>
                </div>
            </section>
        </>
    );
}

export default React.memo(ManageProducts)