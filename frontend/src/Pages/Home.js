import React from 'react'
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import Products from '../Component/Products';
import ModalCart from '../Component/ModalCart';

const Home = () => {
    return(
            <div className="App">
                <Header />
                <Banner />
                <Products />
                <ModalCart />
            </div>
    );
}

export default React.memo(Home)