import React from 'react'
import '../Asset/ModalCart/ModalCart.scss'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ModalCart = () => {
    const [show, setShow] = useState(0)
    var showOrHide = useSelector(state => state.showModalReducer).value
    return(
        <section className={showOrHide === 1 ? 'ModalCart' : "ModalCart_hide"}>
        {/* </section><section className='ModalCart'> */}
            <div className='ModalCart__transparent'>

            </div>
            <div className='ModalCart__Cart'>

            </div>
        </section>
    );
}

export default React.memo(ModalCart)