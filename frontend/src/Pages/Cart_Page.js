import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import ViewCart from '../Component/ViewCart';

const Cart_Page = () => {
    return(
            <div className="App">
                <Header />
                <ViewCart />
                <Footer />
            </div>
    );
}

export default React.memo(Cart_Page)