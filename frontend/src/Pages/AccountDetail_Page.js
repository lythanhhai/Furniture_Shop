import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import AccountDetail from '../Component/AccountDetail';
import ModalCart from '../Component/ModalCart';

const AccountDetail_Page = () => {
    return(
            <div className="App">
                <Header />
                <AccountDetail />
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(AccountDetail_Page)