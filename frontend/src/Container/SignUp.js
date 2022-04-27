import React from 'react'
import '../Asset/SignInOrUp/SignUp.scss'

import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    return(
        <section className='Register'>
            <div className='Register__Left'>
                <p className='Register__Left-title'>REGISTER</p>
                <form name="Register__Left-form" className='Register__Left-form'>
                    <div className='Username'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' placeholder='' name='Username'/>
                    </div>
                    <div className='Phone_number'>
                        <label htmlFor='phone'>Phone number</label>
                        <input type='text' placeholder='' name='phone'/>

                    </div>
                    <div className='Password'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='' name='password'/>
                    </div>
                    

                    <p className='infor'>
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a>
                    privacy policy.</a>
                    </p>
                    <button type='submit' className='but_sub'>Register</button>


                </form>
            </div>
            <div className='Register__Right'>
                <h2>LOGIN</h2>
                <p>Login here by filling you're username and password or use your favorite social network account to enter to the site. Site login will simplify the purchase process and allows you to manage your personal account.</p>
                <button type='button' onClick={() => {
                    navigate('/SignIn/');
                }}>LOGIN</button>
            </div>
        </section>
    );
}

export default React.memo(SignUp)