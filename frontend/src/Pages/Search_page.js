import React from 'react'
import ModalCart from '../Component/ModalCart';
import Footer from '../Component/Footer';
import Search from '../Component/search';
import Header from '../Component/Header';
import Search_bar from '../Component/search_bar';
const Search1 = () => {
  
    return(
        <div className="App"> 
      <Search_bar />
                <Search/>
                <ModalCart />
                <Footer />
            </div>
    );
}

export default React.memo(Search1)