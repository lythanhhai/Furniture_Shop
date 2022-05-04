import React, { useState } from 'react'
import '../Asset/ModalAddress/ModalAddress.scss'

import { AiOutlineClose } from "react-icons/ai";

const ModalAddress = () => {
    const [show, setShow] = useState(0)
    return(
        <section className={show === 0 ? 'ModalAddress' : "ModalAddress_hide"}>
            <div className='ModalAddress__transparent'>
            </div>
            <div className='ModalAddress__Cart'>
            </div>
        </section>
    );
}

export default React.memo(ModalAddress)

// onClick={() => {dispatch(hideModalCart())}}