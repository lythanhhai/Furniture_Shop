import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import ViewCart from '../Component/ViewCart';
import ModalCart from '../Component/ModalCart';

const Cart_Page = () => {
    return(
            <div className="App">
                <Header />
                <ViewCart />
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(Cart_Page)