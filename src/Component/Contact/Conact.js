import React from 'react'
import Navbar from '../Navbar/Navbar'

const Conact = () => {
    return (
        <section style={{ fontFamily: '"League spartan",sans-serif' }}>
            <Navbar />
            <div data-aos="flip-right" data-aos-duration="2000" className='lg:flex pt-32 p-5 md:p-36 lg:pt-36 lg:p-0'>
                <div className='lg:w-[751px] lg:h-[570px] mx-auto  border-[3px] border-[#2976b6] rounded-3xl '>
                    <h1 className='text-center lg:py-4 py-3 bg-[#2976b6] rounded-t-2xl  font-bold text-white lg:text-2xl'>Registered address</h1>
                    <div className='border-b-2 border-orange-600 lg:w-[80%] w-[90%] mx-auto' >
                        <p className='text-center lg:text-xl  font-extrabold lg:tracking-wide lg:mt-14 mt-10  ' style={{ color: 'rgb(237, 125, 44)' }}>Your Booking Expert Limited</p>
                        <p className='text-center lg:leading-10 leading-6 lg:text-2xl mt-5 lg:mb-10 mb-5'>71-75 Shelton street,<br />
                            Covent Garden,<br />
                            London, WC2H9JQ.</p>
                    </div>
                    <div className='lg:flex flex-wrap justify-center lg:gap-10 px-16 lg:px-0 pt-5  lg:pt-10'>
                        <div className=''>
                            <p className='bg-orange-500 lg:px-5 text-center lg:text-start   py-1.5 lg:text-xl font-semibold text-white rounded-3xl tracking-wide'>UK Customer Service</p>
                            <div className='flex justify-center lg:justify-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-4 h-4    mt-6    ml-5 text-orange-500">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg>
                                <li className='list-none  text-center lg:text-xl font-light mt-[1.35rem] ml-2'>01622 960422</li>
                            </div>
                        </div>
                        <div className='mt-5 lg:mt-0'>
                            <p className='bg-orange-500 lg:px-5 text-center lg:text-start py-1.5 lg:text-xl font-semibold text-white rounded-3xl tracking-wide'>India Customer Service</p>
                            <div className='flex justify-center lg:justify-start'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-4 h-4 mt-6 ml-5 text-orange-500">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg>
                                <li className='list-none  text-center lg:text-xl font-light mt-[1.35rem] ml-2'>044 4855 4833</li>
                            </div>
                        </div>
                    </div>
                    <div className='flex lg:mt-5 justify-center pt-2 mb-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="lg:w-6 lg:h-6 w-5 h-5  mt-1.5 text-orange-500">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                        <p className='lg:text-xl ml-2 mt-1 font-medium tracking-wider'>contact@yourbookingexpert.co.uk</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Conact
