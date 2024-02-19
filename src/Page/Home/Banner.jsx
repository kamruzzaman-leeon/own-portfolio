import React from 'react';
import bannerImag from '../../../public/kamruzzamanLeeon.jpg'
const Banner = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row my-5 flex-1'>
            <div className='p-5  flex flex-col justify-center'>
                <h1 className='text-3xl md:text-5xl font-extrabold'>Hi!<br></br>I am <br></br>Kamruzzaman Leeon</h1>
                <h3 className='text-xl md:text-2xl'>Frontend Developer</h3>
            </div>
            <div className='flex justify-center content-center flex-1'>
                <img className='rounded-lg' src={bannerImag} alt="kamruzzaman Leeon's Image"/>
            </div>
        </div>
    );
};

export default Banner;