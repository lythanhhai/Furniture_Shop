import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Address from '../Component/Address';
import ModalAdress from '../Component/ModalAdress';
import ModalCart from '../Component/ModalCart';

const AccountDetail_Page = () => {
    return( 
            <div className="App">
                <Header />
                <Address />
                <ModalAdress />
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(AccountDetail_Page)