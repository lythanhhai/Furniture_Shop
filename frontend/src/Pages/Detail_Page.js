import React from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Detail from '../Component/Detail';

const Detail_Page = () => {
    return(
            <div className="App">
                <Header />
                <Detail />
                <Footer />
            </div>
    );
}

export default React.memo(Detail_Page)