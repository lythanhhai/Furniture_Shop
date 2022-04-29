import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import AccountDetail from '../Component/AccountDetail';

const AccountDetail_Page = () => {
    return(
            <div className="App">
                <Header />
                <AccountDetail />
                <Footer />
            </div>
    );
}

export default React.memo(AccountDetail_Page)