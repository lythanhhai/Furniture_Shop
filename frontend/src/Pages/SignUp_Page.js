import React from 'react'
import Header from '../Component/Header';
import SignUp from '../Container/SignUp';
import Footer from '../Component/Footer';


const SignUp_Page = () => {
    return(
            <div className="App">
                <Header />
                <SignUp />
                <Footer />
            </div>
    );
}

export default React.memo(SignUp_Page)