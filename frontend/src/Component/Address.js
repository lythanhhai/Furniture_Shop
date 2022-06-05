import React from 'react' 
import '../Asset/Address/Address.scss';
import { useDispatch, useSelector } from 'react-redux';
import { showModalUpdate } from '../Action/showModalAddress';
import axios from "axios";
import { useState, useEffect } from 'react'
export const phone = "0985367105";
const Address = () => {
    const dispatch = useDispatch()
    const showOrNot = useSelector(state => state.showModalAddressReducer).value
    const handleUpdate = () => {
        dispatch(showModalUpdate())
    }

    const handleDelete = () => {

    }


    //

    const [inforPerson, setInforPerson] = useState({
        // phone_number: "",
        // user_name: "",
        // pass_word: "",
        // address:"",
      });
    
      const handleRegister = () => {
       
       
        const headers = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
          }
        axios
          .get(`http://127.0.0.1:8000/sale/Customer-get/${phone}`)
          .then((response) => {
            // console.log(response);
            setInforPerson(response.data)
          })
          .catch((err) => {
            console.log(err);
          });
      };
      useEffect(() => {
        handleRegister()
    },[])
    const { user_name, phone_number,address} = inforPerson
    return (
        <section className='Address'>
            <p className='Address__title'>My Address</p>
            <div className='Address__detail'>
                <div className='Address__detail-fullname'>
                    <p className='part'>Fullname: </p>
                    <p className='content'>{ user_name}</p>
                </div>
                <div className='Address__detail-phone'>
                    <p className='part'>Phone Number: </p>
                    <p className='content'>{phone_number}</p>
                </div>
                <div className='Address__detail-address'>
                    <p className='part'>Address: </p>
                    <p className='content'>{address}</p>
                </div>
            </div>
            <div className='Address__button'>
                <button className='Address__button-update' onClick={
                    () => {
                        handleUpdate();
                    }
                }>Update</button>
                <button className='Address__button-delete'>Delete</button>
            </div>
        </section>
  );
            
            };   
        
export default React.memo(Address);

