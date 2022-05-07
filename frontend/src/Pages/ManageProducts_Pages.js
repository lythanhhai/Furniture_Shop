import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import ViewCart from '../Component/ViewCart';
import ManageProducts from '../Component/ManageProducts';

const Cart_Page = () => {
    return(
            <div className="App">
                <Header />
                <ManageProducts />
                <Footer />
            </div>
    );
}

export default React.memo(Cart_Page)