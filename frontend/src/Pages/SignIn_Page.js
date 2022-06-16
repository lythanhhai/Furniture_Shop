import React from 'react'
import Header from '../Component/Header';
import SignIn from '../Container/SignIn';
import Footer from '../Component/Footer';
import ModalCart from '../Component/ModalCart'


const SignIn_Page = () => {
    return(
            <div className="App">
                <Header />
                <SignIn />
                {/* <ModalCart /> */}
                <Footer />
            </div>
    );
}

export default React.memo(SignIn_Page)