import React from 'react'
import Navbar from '../Navbar/Navbar';
import india_video from '../../Assets/india-video.mp4';
import india4 from '../../Assets/india4.jpg';
import bhutan from '../../Assets/bhutan.jpg';
import nepal from '../../Assets/nepal.jpg';
import srilanka from '../../Assets/srilanka.jpg';
import InputFiled from '../Input/InputFiled';
import Footer from '../Footer/Footer';
const Asian_Countries = () => {
    return (
        <section className='mx-auto'>
            <Navbar />
            <div className='flex w-full md:h-[25rem] h-[17rem] lg:pt-20 pt-16'>
                <video className='absolute filter brightness-50 z-0 w-full lg:h-[22rem] md:h-[20rem] h-[13rem]  object-cover ' autoPlay muted loop>
                    <source src={india_video} className='' type='video/mp4'></source>
                </video>
                <h1 className='lg:text-[2.6rem] md:text-3xl  text-2xl md:font-extrabold font-bold text-white z-10 mx-auto my-auto relative'>ASIAN COUNTRIES</h1>
            </div>
            <div className='pt-10'>
                <p className='text-center text-[#000000] font-bold lg:text-xl lg:tracking-wide'>Asian Countries with Packages</p>
                <div className='md:flex flex-wrap justify-center md:gap-14 mt-5 mb-20 md:p-10'>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>India</h1>
                        <img src={india4} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Bhutan</h1>
                        <img src={bhutan} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Nepal</h1>
                        <img src={nepal} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Sir lanka</h1>
                        <img src={srilanka} className='box-image' />
                    </div>
                </div>
                <InputFiled />
                <div className='pt-24'>
                    <Footer />
                </div>
            </div>
        </section>
    )
}

export default Asian_Countries
