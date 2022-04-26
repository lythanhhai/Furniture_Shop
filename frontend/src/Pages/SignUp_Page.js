import React from 'react'
import Header from '../Component/Header';
import SignUp from '../Container/SignUp';


const SignUp_Page = () => {
    return(
            <div className="App">
                <Header />
                <SignUp />
            </div>
    );
}

export default React.memo(SignUp_Page)