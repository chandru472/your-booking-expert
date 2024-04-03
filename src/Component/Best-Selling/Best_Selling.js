import React from 'react'
import ams4 from '../../Assets/ams4.webp';
import Navbar from '../Navbar/Navbar';
import Best from './Best';
import InputFiled from '../Input/InputFiled';
import Footer from '../Footer/Footer';
const Best_Selling = () => {
    return (
        <section>
            <Navbar />
            <div  className='flex w-full lg:h-[27rem] md:h-[25rem]  h-[17rem] lg:pt-20 pt-16'>
                <h1 data-aos="zoom-in" data-aos-duration="1000" className='lg:text-[2.6rem] text-xl lg:font-extrabold font-bold text-white z-10 mx-auto my-auto relative'>OUR BEST SELLING PACKAGES</h1>
                <img src={ams4} className='absolute filter brightness-50 z-0 w-full lg:h-[22rem] md:h-[20rem] h-[13rem]  object-cover' />
            </div>
            <div className='lg:pt-16'>
                <Best />
            </div>
            <div className='pt-10 mb-[6rem]'>
                <InputFiled />
            </div>
            <Footer />
        </section>
    )
}

export default Best_Selling
