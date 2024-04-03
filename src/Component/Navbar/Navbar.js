import React from 'react'
import logo from '../../Assets/logo2.png'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
import { IoMenu } from "react-icons/io5";
const Navbar = () => {
    const scrollToTop = () =>
    {
        window.scrollTo(0,0)
    }

    const menuClick = () => {
        var menu = document.getElementById('mobileMenu');
        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    }
    return (
        <div className='fixed z-50 w-full'>
            <nav className='bg-white   shadow-[0_3px_10px_rgb(0,0,0,0.2)] ' style={{ fontFamily: '"League spartan",sans-serif' }}>
                <div className='flex justify-between'>
                    <div data-aos="flip-right" data-aos-duration="1500" className='lg:ml-16 ml-5 lg:my-2 my-3'>
                        <img className='lg:w-32 md:w-24 w-20' src={logo} alt='logo' />
                    </div>
                    < div className='mt-1.5 md:mr-5 mr-2' >
                        <button className="lg:hidden p-3 " onClick={menuClick}>
                            <IoMenu className='md:w-8 md:h-8 w-7 h-7 text-[#2976b6]' />
                        </button>
                    </div >
                    <div className='mx-auto my-auto lg:block  hidden '>
                        <ul className='flex lg:gap-12 font-semibold tracking-wide text-[#2976b6]  ml-96'>
                            <Link to="/best-selling"><li onClick={scrollToTop} data-aos="flip-right" data-aos-duration="1500" className='cursor-pointer hover:scale-110 duration-300'>Best Selling</li></Link>
                            <Link to="/Packages" ><li onClick={scrollToTop} data-aos="flip-right" data-aos-duration="1500" className='cursor-pointer hover:scale-110 duration-300'>Packages</li></Link>
                            <HashLink smooth to="/#OurDestination"><li data-aos="flip-right" data-aos-duration="1500" className='cursor-pointer hover:scale-110 duration-300'>Destination</li></HashLink>
                            <Link to="/Contact-us"><li onClick={scrollToTop} data-aos="flip-right" data-aos-duration="1500" className='cursor-pointer hover:scale-110 duration-300'>Contact Us</li></Link>
                        </ul>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1500" className='bg-[#2976b6] mr-14 w-52 lg:block  hidden '>
                        <div className='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6 mt-6 ml-5 text-white">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>
                            <a href='tel:+916369842254' className='list-none  text-center text-xl font-light mt-[1.35rem] ml-2 text-white'>+91 6369842254</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-lg sm:px-8   text-[#2976b6] tracking-wide">
                    <ul id="mobileMenu" className=" hidden   flex-wrap  font-bold  mt-20 h-screen  ">
                        <Link to="/"><li onClick={scrollToTop} className="flex  justify-center hover:bg-[#2976b6] w-80 py-1.5 rounded-lg mx-auto hover:text-white">
                            Home</li></Link>
                        <Link to='/best-selling'><li onClick={scrollToTop} className="flex  justify-center mt-5 hover:bg-[#2976b6] w-80 py-1.5 rounded-lg mx-auto hover:text-white">
                            Best Selling</li></Link>
                        <Link to='/Packages'><li onClick={scrollToTop} className="flex  justify-center mt-5 hover:bg-[#2976b6] w-80 py-1.5 rounded-lg mx-auto hover:text-white">
                            Packages</li></Link>
                        <HashLink smooth to="/#OurDestination"><li className="flex  justify-center mt-5 hover:bg-[#2976b6] w-80 py-1.5 rounded-lg mx-auto hover:text-white">
                            Destination</li></HashLink>
                        <Link to='/Contact-us'> <li onClick={scrollToTop} className="flex  justify-center mt-5 hover:bg-[#2976b6] w-80 py-1.5 rounded-lg mx-auto hover:text-white">
                            Contact Us</li></Link>
                        <Link to='/Contact'> <a onClick={scrollToTop} href='tel:+916369842254' className="flex justify-center  mt-5 hover:bg-[#2976b6] w-80 py-1.5 rounded-lg mx-auto hover:text-white">
                            Call Now</a></Link>
                    </ul>
                </div>
            </nav >
        </div >
    )
}

export default Navbar
