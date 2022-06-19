import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import ViewCart from '../Component/ViewCart';
import History from '../Component/History';
import ModalCart from '../Component/ModalCart';

const History_Pages = () => {
    return(
            <div className="App">
                <Header />
                <History />
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(History_Pages)