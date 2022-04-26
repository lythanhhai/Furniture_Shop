import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../Component/Header';
import Banner from '../Component/Banner';
import Products from '../Component/Products';

const Home = () => {
    return(
            <div className="App">
                <Header />
                <Banner />
                <Products />
            </div>
    );
}

export default React.memo(Home)