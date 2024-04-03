import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Moscow1 from '../../Assets/Moscow1.jpg';
import Moscow2 from '../../Assets/Moscow2.jpg';
import Moscow3 from '../../Assets/Moscow3.jpg';
import Moscow4 from '../../Assets/Moscow4.jpg';
import Accordion from './Accordion';
import { FaCircleCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer/Footer';
import Input_2 from './Input_2';
const Moscow_Tour = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Day 1',
            data: `After arriving at the Moscow Airport, you will be greeted by our representative who will escort you to the airport from where you will be transferred to your accommodation in Moscow. Check-in at the hotel in Moscow and relax after a tiring journey. Your evening is booked for watching the Russian Circus. Watch the magicians play amazing tricks and the animals show their wonderful play with different things. Also enjoy cultural Russian dances and performances and later head to the hotel for a comfortable stay.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Day 2',
            data: `Today after a delightful breakfast, set on to explore the city with a city tour. Visit the many popular attractions like Red Square, the golden-domed Cathedral of Christ the Saviour. The city tour will also take you to explore the major landmarks of the city like the Bolshoi Theatre where you will get a chance to watch live plays. Stroll through the Tverskaya Street and shop till you drop at the local markets in the area. Later, head to the Parliament building and click some amazing pictures at this spot. Also visit attractions like State University, Victory Park and Arbat Street and later head to your accommodation in Moscow over an overnight stay.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Day 3',
            data: `Today after breakfast at the hotel, your trip to Moscow will come to an end. Check-out from the hotel and head to the airport to board your flight back to India with fond memories.`,
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
                        <h1 className='font-bold lg:text-3xl md:text-2xl text-xl' style={{ color: 'rgb(237, 125, 44)' }}>Moscow Tour Package (2 Nights & 3 Days)</h1>
                        <div className='flex mt-4'>
                            <FaLocationDot className='w-7 h-7 text-gray-600' />
                            <p className='text-lg ml-2 tracking-wider'>Moscow</p>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <div className="embla w-full rounded-lg lg:rounded-xl border-[3px] border-[#2976b6] shadow-[0_3px_10px_rgb(0,0,0,0.2)]   md:border-orange-500 " ref={emblaRef}>
                            <div className="embla__container shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                <div className="embla__slide ">
                                    <img src={Moscow1} className='object-cover h-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Moscow2} className='object-cover h-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Moscow3} className='object-cover h-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Moscow4} className='object-cover h-full' />
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

export default Moscow_Tour;
