import React from 'react'
import Header from '../Component/Header';
import SignIn from '../Container/SignIn';
import Footer from '../Component/Footer';


const SignIn_Page = () => {
    return(
            <div className="App">
                <Header />
                <SignIn />
                <Footer />
            </div>
    );
}

export default React.memo(SignIn_Page)