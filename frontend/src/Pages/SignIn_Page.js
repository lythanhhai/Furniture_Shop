import React from 'react'
import Header from '../Component/Header';
import SignIn from '../Container/SignIn';


const SignIn_Page = () => {
    return(
            <div className="App">
                <Header />
                <SignIn />
            </div>
    );
}

export default React.memo(SignIn_Page)