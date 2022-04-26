import React from 'react'
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import Products from '../Component/Products';
import ModalCart from '../Component/ModalCart';
import Footer from '../Component/Footer';

const Home = () => {
    return(
            <div className="App">
                <Header />
                <Banner />
                <Products />
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(Home)