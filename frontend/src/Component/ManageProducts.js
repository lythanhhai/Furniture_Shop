import React from 'react'
import '../Asset/ManageProducts/ManageProducts.scss'
import { useState, useEffect } from 'react'
import ModalAddProduct from './ModalAddProduct'
import { useSelector, useDispatch } from 'react-redux'
import { showModalProduct, hideModalProduct } from '../Action/showModalProduct'
// import axios from 'axios'

const ManageProducts = () => 
{
    const showModalAdd = useSelector(state => state.showModalProductReducer).value
    const dispatch = useDispatch()
    const handleShowModalAdd = () => {
        alert(showModalAdd)
        dispatch(showModalProduct())
    }
    const handleHideModalAdd = () => {
        alert(showModalAdd)
        dispatch(hideModalProduct())
    }
    // const [countClick, setCountClick] = useState(0) 
    // const [departments, setDepartment] = useState([])

    // const getDepartment = () => {
    //     axios.get('http://localhost:8000/Department/')
    //     .then(response => response.data)
    //     .then(data => {
    //         //console.log(data); 
    //         setDepartment(data)
    //     })
    //     .catch(err => {alert(err)})
    // }

    // useEffect(() => {
    //     getDepartment()
    // },[])

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

    // const dataDepartmentElement = departments.map((department, index) => {
    //     const {DepartmentId, DepartmentName} = department
    //     return(
    //             <tr key={index}>
    //                 <td className='data'>{DepartmentId}</td>
    //                 <td className='data'>{DepartmentName}</td>
    //                 <td className='data'>
    //                     <button className='edit'>
    //                         Edit
    //                     </button>
    //                     <button className='delete' onClick={() => {handleDelete(index)}}>
    //                         Delete
    //                     </button>
    //                 </td>
    //             </tr>
    //     );
    // })
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
                        </tr>
                    </thead>
                    <tbody>

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