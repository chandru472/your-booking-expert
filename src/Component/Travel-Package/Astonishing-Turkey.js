import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import turkey from '../../Assets/turkey.jpg';
import turkey1 from '../../Assets/turkey1.jpg';
import turkey3 from '../../Assets/turkey3.jpg';
import Accordion from './Accordion';
import { FaCircleCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer/Footer';
import Input_2 from './Input_2';
const Astonishin_Turkey = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Day 1',
            data: ` Welcome To Cappadocia! Arrive at Istanbul Airport and continue to Domestic Flights Terminal for your flight to Cappadocia. Upon arrival at Cappadocia, you will be transferred to your hotel. Enjoy day at leisure. Overnight stay at the hotel.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Day 2',
            data: `Cappadocia GREEN Tour Hot Air Balloon tour will be the start of your day in Cappadocia. Pick up from your hotel and transfer to the take off site. Snacks and beverage service before the flight. The flight takes between 45-65 minutes. You will be transferred to your hotel after its done. Your daily program begins after breakfast at the hotel. Our excursions start with full day Cappadocia GREEN tour with lunch. Following the tour, return to your hotel and check out. You will be transferred to airport to catch the flight to Izmir. Upon your arrival, you will be transferred to Kusadasi hotel for the night.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Day 3',
            data: `After an enticing breakfast, you will be provided the Full Day Pamukkale Tour with lunch. After tour check out from the hotel and enjoy private transfer to the airport. Fly back to Istanbul and catch flight back home with happy memories.`,
            isOpen: false
        },
    ]);

    const toggleAccordion = (accordionkey) => {
        const updatedAccordions = accordions.map((accord) => {
            if (accord.key === accordionkey) {
                return { ...accord, isOpen: !accord.isOpen };
            } else {
                return { ...accord, isOpen: false };
            }
        });

        setAccordion(updatedAccordions);
    };
    return (
        <section >
            <Navbar />
            <div className='md:flex md:pt-28  pt-20 justify-around p-5  md:p-0'>
                <div className='md:w-1/2'>
                    <div data-aos="zoom-in" data-aos-duration="1000">
                        <h1 className='font-bold lg:text-3xl md:text-2xl text-xl' style={{ color: 'rgb(237, 125, 44)' }}>Astonishing Turkey Family Package (2 Nights & 3 Days)(2 Nights & 3 Days)</h1>
                        <div className='flex mt-4'>
                            <FaLocationDot className='w-7 h-7 text-gray-600' />
                            <p className='text-lg ml-2 tracking-wider'>Turkey</p>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <div className="embla w-full rounded-lg lg:rounded-xl border-[3px] border-[#2976b6] shadow-[0_3px_10px_rgb(0,0,0,0.2)]   md:border-orange-500 " ref={emblaRef}>
                            <div className="embla__container shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                <div className="embla__slide ">
                                    <img src={turkey} className='object-cover' />
                                </div>
                                <div className="embla__slide">
                                    <img src={turkey1} className='object-cover' />
                                </div>
                                <div className="embla__slide">
                                    <img src={turkey3} className='object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1000" className='mt-5'>
                        <h1 className='font-semibold lg:tracking-wide lg:text-lg'>Land Package Cost: From <span className='text-[#2976b6]'>₹ 5000</span> Per Adult</h1>
                        <p className='font-semibold lg:text-lg text-[#2976b6] mt-5'>Itinerary</p>
                    </div>
                    <div className="mt-3 duration-500">
                        {accordions.map((accordion) => (
                            <Accordion
                                key={accordion.key}
                                title={accordion.title}
                                data={accordion.data}
                                isOpen={accordion.isOpen}
                                toggleAccordion={() => toggleAccordion(accordion.key)}
                            />
                        ))}
                    </div>
                    <div className='lg:hidden  lg:mt-5 lg:mb-10 justify-around p-5 lg:p-0 hidden md:block'>
                        <div className=''>
                            <p className='font-semibold lg:text-lg text-[#2976b6] mt-5'>Package Inclusions:</p>
                            <div className='flex mt-5'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Accommodation</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Breakfast</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Sightseeing</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Airport Transfer</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>VISA assistance</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Amsterdam canal cruise</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Half day Schans</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Windmills small group</p>
                            </div>

                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Amsterdam city tour with a diamond factory visit</p>
                            </div>
                        </div>
                        <div className=''>
                            <p className='font-semibold text-lg text-[#2976b6] mt-5'>Package Excludes:</p>
                            <div className='flex mt-5'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Air fare & VISA</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Early check-in and late checkout</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Lunch & Dinner</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Outdoor activities</p>
                            </div>
                            <div className='flex mt-4'>
                                <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                                <p className='lg:text-lg ml-2 tracking-wider'>Anything not mentioned in inclusions</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Input_2 />
            </div >
            <div className='lg:flex  lg:mt-5 lg:mb-10 justify-around p-5 lg:p-0 md:hidden '>
                <div className=''>
                    <p className='font-semibold lg:text-lg text-[#2976b6] mt-5'>Package Inclusions:</p>
                    <div className='flex mt-5'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Accommodation</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Breakfast</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Sightseeing</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Airport Transfer</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>VISA assistance</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Amsterdam canal cruise</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Half day Schans</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Windmills small group</p>
                    </div>

                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Amsterdam city tour with a diamond factory visit</p>
                    </div>
                </div>
                <div className=''>
                    <p className='font-semibold text-lg text-[#2976b6] mt-5'>Package Excludes:</p>
                    <div className='flex mt-5'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Air fare & VISA</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Early check-in and late checkout</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Lunch & Dinner</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Outdoor activities</p>
                    </div>
                    <div className='flex mt-4'>
                        <FaCircleCheck className='lg;w-6 lg:h-6 w-5 h-5 text-[#2976b6]' />
                        <p className='lg:text-lg ml-2 tracking-wider'>Anything not mentioned in inclusions</p>
                    </div>
                </div>
            </div>
            <div className='pt-20'>
                <Footer />
            </div>
        </section >
    )
}

export default Astonishin_Turkey;
