import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';

const Cart_Page = () => {
    return(
            <div className="App">
                <Header />
                <Footer />
            </div>
    );
}

export default React.memo(Cart_Page)