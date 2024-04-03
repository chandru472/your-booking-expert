import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Swal from 'sweetalert2'
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import Navbar from '../Navbar/Navbar';
import bgvideo from '../../Assets/hero-video2.mp4';
import flow from '../../Assets/flow-x.svg';
import flowy from '../../Assets/flow-y.svg';
import asia from '../../Assets/asia.jpg';
import dubai4 from '../../Assets/dubai4.avif';
import european from '../../Assets/european-countries.jpg';
import './Hero.css';
import Footer from '../Footer/Footer';
import Best from '../Best-Selling/Best';
import Destination from '../Destination/Destination';
import { Link } from 'react-router-dom';
import ram from '../../Assets/ram.jpg';
const Hero = () => {
    const [user, setUser] = useState({
        Name: '',
        Email: '',
        Number: '',
        Destination: '',
        Attratction: '',
        Days: '',
        Formdate: '',
        Todate: '',
        Adult: '',
        Special: '',
        Child: ''
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };
    const getdata = () => {

        console.log('getData function called');
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        for (const key in user) {
            formData.append(key, user[key]);
        }

        try {
            const formSpreeRes = await fetch("https://formspree.io/f/mkndqerl", {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (formSpreeRes.ok) {
                const firebaseRes = await fetch('https://travel-app-8e9ed-default-rtdb.firebaseio.com/UserData.json', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                });

                if (firebaseRes.ok) {
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Submitted Successfully",
                        showConfirmButton: false,
                        timer: 2500
                    });
                    setUser({
                        Name: '',
                        Email: '',
                        Number: '',
                        Destination: '',
                        Attratction: '',
                        Days: '',
                        Formdate: '',
                        Todate: '',
                        Adult: '',
                        Special: '',
                        Child: ''
                    });
                } else {
                    throw new Error("Failed to submit to Firebase");
                }
            } else {
                throw new Error("Failed to submit to Formspree");
            }
        } catch (error) {
            Swal.fire({
                position: "top-center",
                icon: "error",
                title: error.message,
                showConfirmButton: false,
                timer: 2500
            });
        }
    };
    return (
        <div className='!scroll-smooth'>
            {/* Hero section */}
            <section className="relative">
                <video className='max-sm:hidden absolute inset-0  z-0 video  lg:mt-0 mt-16 w-full md:h-[55rem] h-[18.5rem] object-cover' autoPlay muted loop>
                    <source src={bgvideo}  type='video/mp4'></source>
                </video>
                <img src={ram} alt='ram' className='sm:hidden absolute inset-0 mt-16'/>
                <div className=' mx-auto relative z-10 '>
                    <Navbar />
                    <div data-aos="zoom-in"  data-aos-duration="2000"  className='max-sm:pt-40 lg:pt-40 md:pt-32 pt-36 md:px-10 px-3.5 text-center  ' style={{ fontFamily: '"League spartan",sans-serif' }}>
                        <h1 className='max-sm:text-black text-white lg:text-5xl text-3xl lg:font-extrabold font-semibold tracking-tight' style={{ fontFamily: '"League spartan",sans-serif' }}>Get  your <span className='' style={{ color: 'rgb(237, 125, 44)' }}>Tailor-Made</span> Holiday Packages</h1>
                        <p  className='max-sm:hidden text-white mt-5  lg:mt-10  md:text-xl leading-6 md:leading-8 lg:leading-none text-sm'>Your Booking experts will listen to your travel requirements and provide the iconic Holiday Package for all destinations around Globally.</p>
                    </div>
                    <div data-aos="flip-right" data-aos-duration="1800" className='max-sm:mt-44 border-2 border-[#2976b6] md:mt-12 mt-32 mx-4 md:mx-12 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:border-orange-600 lg:w-[818px] lg:h-[480px] lg:rounded-xl bg-white lg:mt-10 lg:mx-auto' style={{ fontFamily: '"League spartan",sans-serif' }}>
                        <div className='p-4 md:p-8'>
                            <p className='text-lg font-semibold tracking-wide ' style={{ color: 'rgb(237, 125, 44)' }}>Plan your Tailor made trip with us.!</p>
                            <form id="contact-form" onSubmit={handleSubmit}>
                                <div class=" mt-5 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-3 gap-6 ">
                                    <div class="relative z-0 group ">
                                        <input type="text" name="Name" id="name" value={user.Name} onChange={handleChange} class="w-full  lg:w-60  hover:border-black block py-2.5 px-3 text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                                        <label for="name" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name*</label>
                                        <label className='text-xs ml-1 text-red-500 hidden lg:block'>Required</label>
                                    </div>
                                    <div class="relative z-0  group  ">
                                        <input type="email" name="Email" id="email" value={user.Email} onChange={handleChange} class="w-full  lg:w-60  hover:border-black block py-2.5 px-3   text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                                        <label for="email" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email Address *</label>
                                        <label className='text-xs ml-1  text-red-500 hidden lg:block'>Required</label>
                                    </div>
                                    <div class="relative z-0  group  ">
                                        <input type="number" name="Number" id="number" value={user.Number} onChange={handleChange} class="w-full  lg:w-60  hover:border-black block py-2.5 px-3  text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                                        <label for="number" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Mobile Number*</label>
                                    </div>
                                    <div class="relative z-0  group  ">
                                        <input type="text" name="Destination" id="destination" value={user.Destination} onChange={handleChange} class="w-full  lg:w-60  hover:border-black block py-2.5 px-3  text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                                        <label for="destination" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Destination</label>
                                    </div>
                                    <div class="relative z-0  group  ">
                                        <input type="text" name="Attratction" id="Attraction" value={user.Attratction} onChange={handleChange} class="w-full  lg:w-60 hover:border-black block py-2.5 px-3   text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " required />
                                        <label for="attraction" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Add attraction</label>
                                    </div>
                                    <div class="relative z-0  group  ">
                                        <input name="Days" id="days" value={user.Days} onChange={handleChange} class="w-full  lg:w-60 hover:border-black block py-2.5 px-3  text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " type="number" required />
                                        <label for="days" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No of Days</label>
                                    </div>
                                    <p className='text-sm tracking-wide mb-2' style={{ color: 'rgb(237, 125, 44)' }}>Date of Travel</p>
                                </div>
                                <div className='md:flex gap-4 '>
                                    <div class="relative z-0  group  ">
                                        <label className='text-xs ml-1  text-gray-500'>From Date</label>
                                        <input name="Formdate" id="fromDate" value={user.Formdate} onChange={handleChange} class="w-full  lg:w-44  hover:border-black  block py-2.5 px-3    text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " type="date" required />
                                    </div>
                                    <div class="relative z-0  group  ">
                                        <label className='text-xs ml-1  text-gray-500'>To Date</label>
                                        <input name="Todate" id="toDate" value={user.Todate} onChange={handleChange} class="w-full  lg:w-44  hover:border-black  block py-2.5 px-3   text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " type="date" required />
                                    </div>
                                    <div class="relative z-0  group    mt-6 md:inline-block">
                                        <textarea type="email" name="Special" id="special" value={user.Special} onChange={handleChange} class="hover:border-black  block py-2.5 px-3 w-full resize-none  md:w-[20.8rem] lg:w-[23rem] md:h-[7rem]   text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" "></textarea>
                                        <label for="special" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Special Request</label>
                                    </div>
                                </div>
                                <div className='md:flex md:gap-4 mt-5 md:-mt-[2.6rem]'>
                                    <div class="relative z-0  group  ">
                                        <input name="Adult" id="adult" value={user.Adult} onChange={handleChange} class="w-full  lg:w-44 md:w-[9.3rem]  hover:border-black  block py-2.5 px-3   text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " type="number" required />
                                        <label for="adult" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No of Adult *</label>
                                        <label className='text-xs ml-1  text-red-500 hidden lg:block'>Required</label>
                                    </div>
                                    <div class="relative z-0  group  mt-5 md:mt-0">
                                        <input name="Child" id="child" value={user.Child} onChange={handleChange} class="w-full  lg:w-44 md:w-[9.3rem]  hover:border-black  block py-2.5 px-3   text-sm  bg-transparent  border-2 border-gray-300 rounded-md appearance-none  focus:outline-none focus:ring-0 focus:border-blue-500 peer" placeholder=" " type="number" required />
                                        <label for="child" class="peer-focus:font-medium ml-3 absolute text-xs   duration-300 transform -translate-y-6  scale-80 top-2 -z-10 origin-[0] peer-focus:start-0 text-gray-500   rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-focus:text-blue-500 peer-focus:top-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">No of Child *</label>
                                    </div>
                                </div>
                                <div className='flex mt-5'>
                                    <button type='submit' onClick={getdata} className='mx-auto px-5 py-2 rounded-md font-semibold  text-white hover:text-orange-500  text-sm hover:bg-white  bg-orange-500 border-2 hover:border-orange-500' >Submit</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div >
            </section >
            {/* Booking Section */}
            <section className='mt-36 mx-auto'>
                <div data-aos="zoom-in"  data-aos-duration="1000" className=''>
                    <h1 className='text-center text-[#2976b6] font-bold lg:text-3xl text-lg'>Booking Process</h1>
                </div>
                <div className='mt-10 md:hidden'>
                    <img className='mx-auto' src={flowy} />
                </div>
                <div className='hidden md:block'>
                    <div data-aos="zoom-in"  data-aos-duration="1000" className='flex  mt-12 justify-center lg:gap-48 md:gap-24' style={{ color: 'rgb(237, 125, 44)' }}>
                        <p className='lg:w-56 md:w-32 font-semibold lg:text-lg text-xs text-center'>Your destination expert assigned</p>
                        <p className='lg:w-56 md:w-32 font-semibold lg:text-lg text-xs text-center'>Booking Confirmation / payment</p>
                    </div>
                    <img data-aos="flip-right" data-aos-duration="2000" className='mx-auto w-[70%] ' src={flow} />
                    <div data-aos="zoom-in"  data-aos-duration="1000" className='flex lg:gap-52 md:gap-24 justify-center mt-3' style={{ color: 'rgb(237, 125, 44)' }}>
                        <p className=' lg:w-56 md:w-32 text-xs font-semibold lg:text-lg text-center '>Call / Mail / Enquire form</p>
                        <p className=' lg:w-56 md:w-32 text-xs font-semibold lg:text-lg text-center '>Customize your holiday / Choose a Holiday package</p>
                        <p className=' lg:w-56 md:w-32 text-xs font-semibold lg:text-lg text-center '>24/7 support</p>
                    </div>
                </div>
            </section>
            {/* Choose Section */}
            <section className='mt-24 mx-auto '>
                <div data-aos="zoom-in"  data-aos-duration="1000" className='flex justify-center '>
                    <h1 className='text-center text-[#2976b6] font-bold lg:text-3xl text-lg'>Choose Your Region</h1>
                </div>
                <div data-aos="fade-right" data-aos-delay="450" data-aos-duration="1000" className='md:flex flex-wrap justify-center md:gap-14 mt-5 mb-20 md:p-10'>
                    <Link to="/Asian-Countries"> <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='text-2xl font-semibold text-white'>Asia</h1>
                        <img src={asia} className='box-image' />
                    </div></Link>
                    <Link to="/Europe"><div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='text-2xl font-semibold text-white'>Europe</h1>
                        <img src={european} className='box-image' />
                    </div></Link>
                    <Link to="Middle-East"><div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='text-2xl font-semibold text-white'>Dubai</h1>
                        <img src={dubai4} className='box-image' />
                    </div></Link>
                </div>
            </section >
            {/* Best Selling */}
            < section className='mt-24 mx-auto ' >
                <div data-aos="zoom-in"  data-aos-duration="1000" className='flex justify-center '>
                    <h1 className='text-center text-[#2976b6] font-bold lg:text-3xl text-lg lg:mb-10'>Best Sellings</h1>
                </div>
                <Best />
            </section >
            {/* Our Destination */}
            < section className='md:mt-0 mt-20 mx-auto !scroll-smooth' id='OurDestination' >
                <div className='lg:pt-24'>
                    <div data-aos="zoom-in"  data-aos-duration="1000" className='flex justify-center '>
                        <h1 className='text-center text-[#2976b6] font-bold lg:text-3xl text-lg' >Our Destinations</h1>
                    </div>
                    <Destination />
                </div>
            </section >
            {/* Customer Feedback */}
            < section className='mt-24 mx-auto mb-10 ' >
                <div data-aos="zoom-in" data-aos-duration="1000" className='flex justify-center lg:mb-10 '>
                    <h1 className='text-center text-[#2976b6] font-bold lg:text-3xl text-lg'>Customer Feedback </h1>
                </div>
                <div className='lg:w-[95%] md:w-[90%] w-[91%]   lg:mt-10 mx-auto'>
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 10,
                            depth: 100,
                            modifier: 0,
                            slideShadows: true,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className='duration-500'
                    >
                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#3ffeee] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white lg:text-3xl py-5 text-2xl tracking-wide text-center lg:py-6 uppercase'>Kt</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>kevin thomas</h1>
                                <p className='tracking-wide text-sm lg:text-md text-center mt-2'>Our trip to Kashmir was really great ! Their selection of hotels and accommodations was best. Overall they helped us to enjoy an unimaginable trip in our life.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#44bbbb] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>su</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Suresh Upadhyaya</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>Very responsible and matured team which resolves any of our queries and make us understand the circumstances. People they arrange are also polite and professional. </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#ccdd11] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>js</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Jaya Shree</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>I have been in touch with them for couple of the trips.. They are really doing well, down towards earth. Never get irritated to respond our doubts.</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#99aacc] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>ns</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Nana Smith</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>Generated an enquiry for darjiling trip, received a quote on next day. In quotation you can find the worth of service. You don't need to have the second thought.</p>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#ee7799] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>hd</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Hareeni. D</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>A well-organized organisation. Very satisfied and happy with the service. Go for it with no second thoughts. :)</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#775577] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>sm</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Swathi Monisha</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>Well organized and coordinated team.Had a great vacation .Thanks for your support.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#00ddee] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>dg</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Divya G</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>Had a great trip planned by the team.!! Perfect choice to have a travel plan.!! Keep up the good work team.!!</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#33bb00] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>gk</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>gowtham kumar</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2'>Had a great experience with travel corp. From planning to the stay all were smooth.They booked great resort and the driver was polite and professional.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='lg:ml-10 md:ml-20'>
                            <div className=''>
                                <div className='bg-[#ffcc99] rounded-full w-[65px] h-[65px] lg:w-[80px] lg:h-[80px] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
                                    <h1 className='text-white text-2xl lg:text-3xl tracking-wide text-center py-5 lg:py-6 uppercase'>yo</h1>
                                </div>
                                <h1 className='text-[#2976b6] text-center font-semibold mt-2 lg:text-2xl text-lg tracking-wide'>Yogaasri.D</h1>
                                <p className='tracking-wide lg:text-md text-sm text-center mt-2 '>I had a wonderful travel experience with my friends. We had really enjoyed because of awesome and budget friendly travel.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section >
            {/* Footer */}
            < section className='mt-24 mx-auto ' >
                <Footer />
            </section >
        </div >
    );
};

export default Hero;
