import React, { useState } from 'react'
import '../Asset/ModalAddress/ModalAddress.scss'
import { useDispatch, useSelector } from 'react-redux';
import { showModalUpdate, hideModalUpdate } from '../Action/showModalAddress';

import { AiOutlineClose } from "react-icons/ai";

const ModalAddress = () => {
    const dispatch = useDispatch()
    const showOrNot = useSelector(state => state.showModalAddressReducer).value
    const showModal = () => {
        
    }
    const hideModal = () => {
        dispatch(hideModalUpdate())
    }
    return(
        <section className={showOrNot === 1 ? 'ModalAddress' : "ModalAddress_hide"}>
            <div className='ModalAddress__transparent' onClick={() => {
                hideModal()
            }}>
            </div>
            <form className='ModalAddress__Update'>
                <p className='ModalAddress__Update-title'>Update Address</p>
                <div className='ModalAddress__Update-nameAndNumber'>
                    <div className='fullname'>
                        <label htmlFor='name'>Fullname</label>
                        <input type="text" name="name"/>
                    </div>
                    <div className='phone'>
                        <label htmlFor='phone'>Phone Number</label>
                        <input type="text" name="phone"/>
                    </div>
                </div>
                <div className='ModalAddress__Update-chooseCity'>
                    <label htmlFor=''>City, District, wards</label>
                    <select className='choose'>
                        <option>aaa</option>
                        <option>bbb</option>
                        <option>ccc</option>
                    </select>
                </div>
                <div className='ModalAddress__Update-specific'>
                    <label htmlFor='specificAddress'>Specific Address</label>
                    <input type="text" name="specificAddress"/>
                </div>
                <button className='Button__Update'>Update</button>
            </form>
        </section>
    );
}

export default React.memo(ModalAddress)

// onClick={() => {dispatch(hideModalCart())}}