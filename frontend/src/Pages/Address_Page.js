import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Address from '../Component/Address';
import ModalAdress from '../Component/ModalAdress';

const AccountDetail_Page = () => {
    return( 
            <div className="App">
                <Header />
                <Address />
                <ModalAdress />
                <Footer />
            </div>
    );
}

export default React.memo(AccountDetail_Page)