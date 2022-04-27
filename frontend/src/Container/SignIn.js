import React from 'react'
import '../Asset/SignInOrUp/SignIn.scss'
import { FaFacebookSquare, FaGooglePlusSquare } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    return(
        <section className='Login'>
            <div className='Login__Left'>
                <p className='Login__Left-title'>LOGIN</p>
                <form name="Login__Left-form" className='Login__Left-form'>
                    <div className='Phone_number'>
                        <label htmlFor='phone'>Phone number</label>
                        <input type='text' placeholder='' name='phone'/>

                    </div>
                    <div className='Password'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' placeholder='' name='password'/>
                    </div>

                    <button type='submit' className='but_sub'>LOG IN</button>

                    <div className='Footer_Login'>
                        <div className='remember'>
                            <input type='checkbox' name='remember'></input>
                            <label htmlFor='remember'>Remember me</label>
                        </div>
                        <p>Lost your password?</p>
                    </div>

                    <p className='Login_With'>OR LOGIN WITH</p>

                    <div className='footer_login'>
                        <button type='button' className='fb'>
                            <FaFacebookSquare />
                            <p>Facebook</p>
                        </button>
                        <button type='button' className='gg'>
                            <FaGooglePlusSquare />
                            <p>Google</p>
                        </button>
                    </div>
                </form>
            </div>
            <div className='Login__Right'>
                <h2>REGISTER</h2>
                <p>Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.</p>
                <button type='button' onClick={() => {
                    navigate('/SignUp/');
                }}>REGISTER</button>
            </div>
        </section>
    );
}

export default React.memo(SignIn)