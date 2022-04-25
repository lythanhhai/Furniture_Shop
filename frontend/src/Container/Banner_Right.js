import React from 'react'
import { useState, useEffect } from 'react'
import '../Asset/Banner/Banner_Right.scss'

const Banner_Right = ({imageCurrent}) => {
    const Image = [
        "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/09/decor-slide-4-right-img.jpg?id=23490",
        "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/09/decor-slide-3-right-img.jpg?id=23495",
        "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/09/decor-slide-2-right-img.jpg?id=23499",
        "https://z9d7c4u6.rocketcdn.me/wp-content/uploads/2018/09/decor-slide-1-right-img.jpg?id=23503",
    ]
    return(
        <section className='Right'>
            <img className='Right__Image'
                src={Image[imageCurrent]}
                alt="error"
                >
            </img>
        </section>
    );
}

export default React.memo(Banner_Right)