import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import ViewCart from '../Component/ViewCart';
import ManageProducts from '../Component/ManageProducts';
import ModalAddProduct from '../Component/ModalAddProduct';

const ManageProducts_Pages = () => {
    return(
            <div className="App">
                <Header />
                <ManageProducts />
                <Footer />
            </div>
    );
}

export default React.memo(ManageProducts_Pages)