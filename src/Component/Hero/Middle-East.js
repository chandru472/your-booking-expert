import React from 'react'
import Navbar from '../Navbar/Navbar';
import europe_video from '../../Assets/middle-east-video.mp4';
import dubai1 from '../../Assets/dubai1.avif';
import dubai2 from '../../Assets/dubai2.avif';
import dubai3 from '../../Assets/dubai3.avif';
import dubai4 from '../../Assets/dubai4.avif';
import dubai5 from '../../Assets/dubai5.avif';
import dubai6 from '../../Assets/dubai6.avif';
import dubai7 from '../../Assets/dubai7.avif';
import InputFiled from '../Input/InputFiled';
import Footer from '../Footer/Footer';
const Middle_East = () => {
    return (
        <section className='mx-auto'>
            <Navbar />
            <div className='flex w-full md:h-[25rem] h-[17rem] lg:pt-20 pt-16'>
                <video className='absolute filter brightness-50 z-0 w-full lg:h-[22rem] md:h-[20rem] h-[13rem]  object-cover ' autoPlay muted loop>
                    <source src={europe_video} className='' type='video/mp4'></source>
                </video>
                <h1 className='lg:text-[2.6rem] md:text-3xl  text-2xl md:font-extrabold font-bold text-white z-10 mx-auto my-auto relative uppercase'>middle east</h1>
            </div>
            <div className='pt-16'>
                <p className='text-center text-[#000000] font-bold lg:text-xl lg:tracking-wide'>Packages in Middle East</p>
                <div className='md:flex flex-wrap justify-center md:gap-14 mt-5 mb-20 md:p-10'>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Exclusive Dubai</h1>
                        <img src={dubai4} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Fly Dubai</h1>
                        <img src={dubai1} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Sea World-Abu Dhabi</h1>
                        <img src={dubai2} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Ultimate Dubai</h1>
                        <img src={dubai1} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Dubai Fully Loaded</h1>
                        <img src={dubai7} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Abu Dhabai Fully Loaded</h1>
                        <img src={dubai6} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Relax Dubai</h1>
                        <img src={dubai5} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Combo Dubai - Abu Dhabi</h1>
                        <img src={dubai4} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Adventure Dubai</h1>
                        <img src={dubai3} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Safari Dubai - Abu Dhabi</h1>
                        <img src={dubai2} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Cruize Fest - Costa Toscana Dubai</h1>
                        <img src={dubai1} className='box-image' />
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

export default Middle_East;
