import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Czech1 from '../../Assets/Czech1.jpg';
import Czech2 from '../../Assets/Czech2.jpg';
import Czech3 from '../../Assets/Czech3.jpg';
import Czech4 from '../../Assets/Czech4.jpg';
import Czech5 from '../../Assets/Czech5.jpg';
import Accordion from './Accordion';
import { FaCircleCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer/Footer';
import Input_2 from './Input_2';
const Exotic_Prague = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Day 1',
            data: ` Arrive in the capital of Czech and enjoy a leisure day. Kickstart your Prague honeymoon package from India and reach Prague, from where you’ll be privately transferred to the hotel, specially keeping in mind the honeymoon occasion of the couple. Remove your lethargy till evening. In the evening you will be departed to witness one of the most famous and thrilling things to do in Prague- Prague Pub Crawl. This Crawl will be the craziest crawl you would have ever experienced.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Day 2',
            data: `Witness the local charms of the city and at night enjoy the wonderful Vltava river cruise. On this day of the Prague honeymoon itinerary, the couple will be taken to a thrilling sightseeing tour to visit the famous points of interest in Prague. Have breakfast and leave for famous things to see in Prague. At night, the couple will enjoy a delightful dinner at the famous Vltava river cruise, which always offers an enchanting experience. Overnight stay at the hotel.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Day 3',
            data: `It’s time to bid adieu to your amazing honeymoon filled with millions of memories. Have breakfast and depart to the airport. The driver will be waiting for you at the hotel and will drop you to the airport from where the couple will take the departure flight. Your honeymoon in Prague ends on this day.`,
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
                        <h1 className='font-bold lg:text-3xl md:text-2xl text-xl' style={{ color: 'rgb(237, 125, 44)' }}>Exotic Prague Package (2 Nights & 3 Days)</h1>
                        <div className='flex mt-4'>
                            <FaLocationDot className='w-7 h-7 text-gray-600' />
                            <p className='text-lg ml-2 tracking-wider'>Czech</p>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <div className="embla w-full rounded-lg lg:rounded-xl border-[3px] border-[#2976b6] shadow-[0_3px_10px_rgb(0,0,0,0.2)]   md:border-orange-500 " ref={emblaRef}>
                            <div className="embla__container shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                <div className="embla__slide ">
                                    <img src={Czech1} className='object-cover h-full w-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Czech2} className='object-cover h-full w-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Czech3} className='object-cover h-full w-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Czech4} className='object-cover h-full' />
                                </div>
                                <div className="embla__slide">
                                    <img src={Czech5} className='object-cover h-full' />
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

export default Exotic_Prague;
