import React from 'react'
import '../Asset/Detail/Detail.scss'
import { useNavigate } from 'react-router-dom'
import Image from '../Public/Image/empty-cart.png'
import { Navigate } from 'react-router-dom'

const Detail = () => {
    const navigate = useNavigate()
    const elementImage = [Image, Image, Image, Image].map((image, index) => {
        return(
            <>
                <img src={image} alt="err" className='image'></img>
            </>
        );
    })
    const handleMove = (e) => {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        const img = document.querySelector('.Detail__Image .image')
        img.style.transformOrigin = `${x}px ${y}px`;
        img.style.transform = "scale(2)";

    }

    const handleLeave = (e) => {
        const img = document.querySelector('.Detail__Image .image')
        img.style.transformOrigin = 'center';
        img.style.transform = "scale(1)";
    }
    return(
        <section className='Detail'>
            <div className='Detail__ListImage'>
                {elementImage}
            </div>
            <div className='Detail__Image' onMouseLeave={(e) => {
                handleLeave(e)
            }}>

                <img src={Image} alt="err" className='image' onMouseMove={(e) => {
                handleMove(e)
            }}></img>
            </div>
            <div className='Detail__info'>
                <p className='Detail__info-name'>Wall Stickers Clock</p>
                <p className='Detail__info-price'>$210.00</p>
                <p className='Detail__info-desc'>A ac scelerisque adipiscing a vel augue vestibulum facilisi id aptent justo sociis neque a inceptos curae.A dis convallis natoque a sem ad adipiscing at per ullamcorper urna quam eleifend feugiat ut nostra nibh sem aliquam odio.</p>
                <div className='Detail__info-add'>
                    <div className='number'>
                        <button className='but_sub' type='button'>
                            -
                        </button>
                        <p>1</p>
                        <button className='but_add' type='button'>
                            +
                        </button>
                    </div>
                    <button type='button' className='button' onClick={() => {
                        if(localStorage.getItem("accessToken") === true)
                        {

                        }
                        else 
                        {
                            navigate('/SignIn/')
                        }
                    }}>
                        Add To Cart
                    </button>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Detail)