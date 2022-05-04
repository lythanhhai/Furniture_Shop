import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Address from '../Component/Address';

const AccountDetail_Page = () => {
    return(
            <div className="App">
                <Header />
                <Address />
                <Footer />
            </div>
    );
}

export default React.memo(AccountDetail_Page)