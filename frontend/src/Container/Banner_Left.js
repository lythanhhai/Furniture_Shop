import React from 'react'
import { useState, useEffect } from 'react'
import '../Asset/Banner/Banner_Left.scss'

const Banner_Left = ({imageCurrent}) => {
    const Image = [
        "https://woodmart.xtemos.com/wp-content/uploads/2018/09/decor-slider-num-1.svg?id=23501",
        "https://woodmart.xtemos.com/wp-content/uploads/2018/09/decor-slider-num-2.svg?id=23501",
        "https://woodmart.xtemos.com/wp-content/uploads/2018/09/decor-slider-num-3.svg?id=23501",
        "https://woodmart.xtemos.com/wp-content/uploads/2018/09/decor-slider-num-4.svg?id=23501",
    ]
    const elementImage = Image.map((image, index) => {
        if(imageCurrent === index)
        {
            return 
            (
                <>
                    <img className='Left__Image' key={index}
                        src={image}
                        alt="error"
                        >
                    </img>
                </>
            );
        }
    })
    return(
        <section className='Left'>
            <img className='Left__Image'
                src={Image[imageCurrent]}
                alt="error"
                >
            </img>
            {/* {elementImage} */}
        </section>
    );
}

export default React.memo(Banner_Left)