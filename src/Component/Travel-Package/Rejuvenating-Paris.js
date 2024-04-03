import React from 'react'
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import paris from '../../Assets/paris.jpg';
import paris1 from '../../Assets/paris1.jpg';
import paris2 from '../../Assets/paris2.jpg';
import paris4 from '../../Assets/paris4.jpg';
import Accordion from './Accordion';
import { FaCircleCheck } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Footer from '../Footer/Footer';
import Input_2 from './Input_2';
const Rejuvenating_paris = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000 })])
    const [accordions, setAccordion] = useState([
        {
            key: 1,
            title: 'Day 1',
            data: `Welcome to the City of Lights. Your trip to Paris commences today.On your arrival at the airport in Paris, you will be warmly welcomed by our representative. After a brief session of meet and greet, board the private vehicle arranged for your transfer to the hotel.Check in to the hotel, and rest for some time in your rooms. After a short period of rest, get ready to explore the marvellous city during the evening.These Paris family vacation packages include a sightseeing tour of the city, also known as the, ‘Illuminations Tour’. This extensive tour lets you witness the cultural, artistic, and architectural marvels of the city which includes places such as Eiffel Tower, Champs-Elysées, Louvre Place Vendôme Square, Comédie Française Theatre, Louvre Museum, Pont-Neuf Bridge, Opera House and many other places, through which the children get a chance to gain insight into the rich historical heritage of the cityThis tour also lets you enjoy a long cruise ride over River Seine where families can enjoy a lit view of the city at night.Head back to the hotel for an overnight stay.`,
            isOpen: false
        },
        {
            key: 2,
            title: 'Day 2',
            data: `Your trip to Paris also includes an entertaining tour of Disneyland.After enjoying a filling breakfast, get ready to explore the most entertaining place of Paris, i.e., Disneyland.This tour lets the children enjoy to the core of their heart while they explore the popular attractions such as the theme park, Walt Disney Studios Park, meet their favourite characters, and indulge in various recreational sports and activities.This Disneyland tour also allows adults to indulge in rejuvenating spa sessions, relish a heart filling shopping experience, and enjoy various entertainment events.After enjoying a full day at Disneyland, head back to the hotel for a restful overnight stay.`,
            isOpen: false
        },
        {
            key: 3,
            title: 'Day 3',
            data: `Your trip to Paris ends today. Bid adieu to the beautiful city.The final day of these Paris family vacation packages includes a scrumptious breakfast meal prior to departure.So, after enjoying a lip smacking breakfast, check out from the hotel, and prepare to be transferred to the airport to board your flight back home.`,
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
                        <h1 className='font-bold lg:text-3xl md:text-2xl text-xl' style={{ color: 'rgb(237, 125, 44)' }}>Rejuvenating Paris (2 Nights & 3 Days)</h1>
                        <div className='flex mt-4'>
                            <FaLocationDot className='w-7 h-7 text-gray-600' />
                            <p className='text-lg ml-2 tracking-wider'>Paris</p>
                        </div>
                    </div>
                    <div className='mt-5 '>
                        <div className="embla w-full rounded-lg lg:rounded-xl border-[3px] border-[#2976b6] shadow-[0_3px_10px_rgb(0,0,0,0.2)]   md:border-orange-500 " ref={emblaRef}>
                            <div className="embla__container shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                                <div className="embla__slide ">
                                    <img src={paris} className='object-cover h-full' />
                                </div>
                                <div className="embla__slide ">
                                    <img src={paris2} className='object-cover' />
                                </div>
                                <div className="embla__slide ">
                                    <img src={paris1} className='object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1 data-aos="zoom-in" data-aos-duration="1000" className='font-semibold lg:tracking-wide lg:text-lg'>Land Package Cost: From <span className='text-[#2976b6]'>₹ 5000</span> Per Adult</h1>
                        <p data-aos="zoom-in" data-aos-duration="1000" className='font-semibold lg:text-lg text-[#2976b6] mt-5'>Itinerary</p>
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

export default Rejuvenating_paris;
