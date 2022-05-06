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
            <div className='ModalAddress__Modal'>
            </div>
        </section>
    );
}

export default React.memo(ModalAddress)

// onClick={() => {dispatch(hideModalCart())}}