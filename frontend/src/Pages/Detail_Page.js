import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Detail from '../Component/Detail';
import ModalCart from '../Component/ModalCart';

const Detail_Page = () => {
    return(
            <div className="App">
                <Header />
                <Detail />
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(Detail_Page)