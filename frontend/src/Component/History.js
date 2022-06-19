import React from 'react'
import '../Asset/History/History.scss'
import { useState, useEffect } from 'react'
// import ModalAddProduct from './ModalAddProduct'
// import ModalEditProduct from './ModalEditProduct'
import { useSelector, useDispatch } from 'react-redux'

import axios from 'axios'

const History = () => 
{
    
    const [products, setProducts] = useState([])
    const phone = useSelector((state) => state.SignInReducer).phone_number;
    const getProducts = () => {
        axios
            .get("http://127.0.0.1:8000/sale/Orders-listModalCart/")
            .then((response) => {
                // console.log(response)
                return response.data;
            })
            .then((data) => {
                let new_data = []
                for(let i = 0; i < data.length; i++)
                {
                    if(data[i]["id_person"] === phone && data[i]["status"] === true)
                    {
                        new_data.push(data[i])
                    }
                }
                setProducts(new_data)
            })
            .catch((err) => {
                console.log(err);
        });
    }  
    
    useEffect(() => {
        getProducts()
    }, [])

    const dataProductElement = products.map((product, index) => {
        const {id, name_product, price, desc, url, number_product, total_price, datetime} = product
        return(
                <tr key={index}>
                    <td className='data'>{id}</td>
                    <td className='data'>{name_product}</td>
                    <td className='data'>{number_product}</td>
                    <td className='data'>{total_price}</td>
                    <td className='data'>{datetime}</td>
                </tr>
        );
    })
    return(
        <>
            <section className='History' onClick={() => {}}>
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='head'>ID</th>
                            <th className='head'>Name Product</th>
                            <th className='head'>Number Product</th>
                            <th className='head'>Total Price</th>
                            <th className='head'>Date Time </th>
                        </tr>
                    </thead>
                    <tbody>
                            {dataProductElement}
                    </tbody>
                </table>
            </section>

        </>
    );
}

export default React.memo(History)