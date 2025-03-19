import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brand1 from '../assets/brand1.svg';
import brand2 from '../assets/brand2.svg';
import brand3 from '../assets/brand3.svg';
import brand6 from '../assets/brand6.svg';
import brand7 from '../assets/brand7.svg';


function Carousel() {
    const brands = [
        { img: brand1 },
        { img: brand2 },
        { img: brand3 },
        { img: brand6 },
        { img: brand7 },
        { img: brand2 },
        { img: brand3 },
        { img: brand6 },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6, 
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 2000,
        arrows: false,
    };

    return (
        <div className="w-full px-12 py-20">
            <Slider {...settings}>
                {brands.map((item, index) => (
                    <div key={index} className="flex justify-center items-center">
                        <img src={item.img} alt={`Brand ${index + 1}`} className="w-32 h-auto" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
