import React from 'react'
import logo from '../../Assets/logo2.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
const Footer = () => {
    return (
        <section className='mx-auto'>
            <div data-aos="fade-up" data-aos-duration="1500" className='bg-[#2976b6]  lg:h-[35rem] mx-auto z-20'>
                <div className='flex justify-center'>
                    <div className='bg-white lg:w-[219px] lg:h-[98px] w-[120px] h-[60px] rounded-full border-4 border-[#2976b6]   lg:-mt-10 -mt-5 absolute'>
                        <img className='lg:w-[7rem] w-[5rem]  mx-auto my-auto lg:py-5 py-2' src={logo} alt='logo' />
                    </div>
                </div>
                <div className='md:flex  mt-16 justify-around  lg:mt-20'>
                    <div className='text-white hidden md:block '>
                        <h1 className='lg:text-2xl font-semibold tracking-wide'>UK Customer Service:</h1>
                        <div className='flex mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-5 h-5 mt-1">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <p className='lg:text-xl text-lg ml-1'>01622 960422</p>
                        </div>
                        <h1 className='lg:text-2xl font-semibold tracking-wide lg:mt-10 md:mt-5'>India Customer Service:</h1>
                        <div className='flex mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-5 h-5 mt-1">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <p className='lg:text-xl text-lg  ml-1'>044 4855 4833</p>
                        </div>
                        <div className='flex mt-8 text-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mt-0.5">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <p className='lg:text-xl ml-2 '>contact@yourbookingexpert.co.uk</p>
                        </div>
                        <div className='flex lg:gap-5 gap-3 mt-8 cursor-pointer '>
                            <div className='w-fit bg-white rounded-full p-3 hover:-translate-y-3 duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                <FaInstagram className='text-[#2976b6] lg:w-8 lg:h-8 w-6 h-6' />
                            </div>
                            <div className='w-fit bg-white rounded-full p-3 hover:-translate-y-3 duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                <FaLinkedin className='text-[#2976b6] lg:w-8 lg:h-8 w-6 h-6' />
                            </div>
                            <div className='w-fit bg-white rounded-full p-3 hover:-translate-y-3 duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                <FaSquareFacebook className='text-[#2976b6] lg:w-8 lg:h-8 w-6 h-6' />
                            </div>
                        </div>
                    </div>
                    <div className='text-white  md:text-center tracking-wide ml-5 md:ml-0 lg:mr-24  md:mr-14'>
                        <h1 className='lg:text-2xl text-lg font-semibold  '>Destinations</h1>
                        <p className='lg:text-lg  mt-3'>Asian Countries</p>
                        <p className='lg:text-lg  mt-3'>Europe</p>
                        <p className='lg:text-lg  mt-3'>Middle East</p>
                    </div>
                    <div className='text-white  md:text-center tracking-wide ml-5 md:ml-0 mt-16 md:mt-0'>
                        <h1 className='lg:text-2xl text-lg font-semibold  '>Overview</h1>
                        <p className='lg:text-lg mt-3'>About Us</p>
                        <p className='lg:text-lg mt-3'>Terms & condition</p>
                        <p className='lg:text-lg mt-3'>Privacy & cookie statement</p>
                    </div>
                    <div className='text-white ml-5 mt-16 lg:mt-0 md:hidden'>
                        <h1 className='lg:text-2xl font-semibold tracking-wide'>UK Customer Service:</h1>
                        <div className='flex mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-5 h-5 mt-1">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <p className='lg:text-xl text-lg ml-1'>01622 960422</p>
                        </div>
                        <h1 className='lg:text-2xl font-semibold tracking-wide mt-5'>India Customer Service:</h1>
                        <div className='flex mt-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-5 h-5 mt-1">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <p className='lg:text-xl text-lg  ml-1'>044 4855 4833</p>
                        </div>
                        <div className='flex mt-5'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mt-0.5">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>
                            <p className='text-lg ml-2 '>contact@yourbookingexpert.co.uk</p>
                        </div>
                        <div className='flex gap-5 lg:mt-8 mt-5 cursor-pointer '>
                            <div className='lg:w-fit lg:bg-white lg:rounded-full lg:p-3 hover:-translate-y-3 duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                <FaInstagram className='lg:text-[#2976b6] text-white lg:w-8 lg:h-8 w-6 h-6' />
                            </div>
                            <div className='lg:w-fit lg:bg-white lg:rounded-full lg:p-3 hover:-translate-y-3 duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                <FaLinkedin className='lg:text-[#2976b6] text-white lg:w-8 lg:h-8 w-6 h-6' />
                            </div>
                            <div className='lg:w-fit lg:bg-white lg:rounded-full lg:p-3 hover:-translate-y-3 duration-300 shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
                                <FaSquareFacebook className='lg:text-[#2976b6] text-white lg:w-8 lg:h-8 w-6 h-6' />
                            </div>
                        </div>
                    </div>
                </div>
                <p className='text-center   text-white font-medium lg:text-lg text-sm mt-10 lg:mt-10'>Your Booking Expert © 2023 | Design and Developed By Our Team.</p>
            </div>
        </section>
    )
}

export default Footer
