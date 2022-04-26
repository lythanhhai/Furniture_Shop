import React from 'react'
import '../Asset/Footer/Footer.scss'
import { FaFacebookF, FaTwitter, FaPinterest, FaLinkedinIn, FaMailBulk} from "react-icons/fa";
import { Navigate, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate()
  
    return(
        <>
            <section className='Footer'>
                <div className='Footer__Logo' onClick={() => {
                    navigate('/Home')
                }}>
                    <i className="fa-brands fa-drupal"></i>
                    <p>Furniture Shop</p>
                </div>
                <div className='Footer__Contact'>
                    <button className='facebook'>
                        <FaFacebookF />
                    </button>
                    <button className='facebook'>
                        <FaTwitter />
                    </button>
                    <button className='facebook'>
                        <FaPinterest />
                    </button>
                    <button className='facebook'>
                        <FaLinkedinIn />
                    </button>
                    <button className='facebook'>
                        <FaMailBulk />
                    </button>
                </div>
            </section>
        </>
    )
}

export default React.memo(Footer)

