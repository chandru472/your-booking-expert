import React from 'react'
import Netherlands4 from '../../Assets/Netherlands4.jpg';
import Belgium1 from '../../Assets/Belgium1.jpg';
import Czech from '../../Assets/Czech2.jpg';
import turkey3 from '../../Assets/turkey3.jpg';
import Santorini1 from '../../Assets/Santorini1.jpg';
import paris1 from '../../Assets/paris1.jpg';
import swiss1 from '../../Assets/swiss1.jpg';
import paris2 from '../../Assets/paris2.jpg';
import Moscow2 from '../../Assets/Moscow2.jpg';
import kerala5 from '../../Assets/kerala5.avif';
import orissa1 from '../../Assets/orissa1.avif';
import andaman3 from '../../Assets/andaman3.avif';
import kashmir2 from '../../Assets/kashmir2.avif';
import dubai1 from '../../Assets/dubai1.avif';
import nepal from '../../Assets/nepal1.avif';
import iceland1 from '../../Assets/iceland1.jpg';
import turkey1 from '../../Assets/turkey1.jpg';
import siwss4 from '../../Assets/swiss4.jpg';
import { Link } from 'react-router-dom';
const Best = () => {
    const scrollToTop = () =>
    {
        window.scrollTo(0,0)
    }
    return (
        <div>
            <div className=' grid lg:grid-cols-4 md:grid-cols-2 mt-2  md:p-10 lg:pt-5 gap-8 lg:gap-0'>
                <Link to="/best-selling/wonderful-netherlands"><div data-aos="fade-right" data-aos-delay="450" data-aos-duration="600" onClick={scrollToTop} className='box rounded-lg mx-auto cursor-pointer'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Wonderful Netherlands Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5 px-2'>from ₹ 5000</p>
                    </div>
                    <img src={Netherlands4} className='box-image' />
                </div></Link>

                <Link to="/Fabulous-Belgium">  <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" onClick={scrollToTop} className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Fabulous Belgium Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={Belgium1} className='box-image' />
                </div></Link>

                <Link to="/Exotic-Prague"><div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="600" data-aos-duration="800" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Exotic Prague Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={Czech} className='box-image' />
                </div></Link>

                <Link to="/Astonishing-Turkey"> <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="700" data-aos-duration="900" className='box rounded-lg mx-auto md:mb-12 cursor-pointer '>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Astonishing Turkey Family Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 -mt-3  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={turkey3} className='box-image' />
                </div></Link>
                <Link to="/Amazing-Santorini" ><div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="450" data-aos-duration="600" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-36 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Amazing Santorini Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-end my-auto mr-5   px-2'>from ₹ 5000</p>
                    </div>
                    <img src={Santorini1} className='box-image' />
                </div></Link>

                <Link to="/Travel-Packages" > <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>3N / 4D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Rejuvenating Paris</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={paris1} className='box-image' />
                </div></Link>

                <Link to="/Amorous-Zurich"> <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="600" data-aos-duration="800" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Amorous Zurich Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={swiss1} className='box-image' />
                </div></Link>

                <Link to="/Moscow-Tour"> <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="700" data-aos-duration="900"  className='box rounded-lg mx-auto md:mb-12 cursor-pointer '>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>2N / 3D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Moscow Tour Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={Moscow2} className='box-image' />
                </div></Link>

                <Link to="/Charming-Paris"  > <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="450" data-aos-duration="600" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>3N / 4D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Charming Paris</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={paris2} className='box-image' />
                </div></Link>

                <Link to="/Karismatic-Kerela" > <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" className='box rounded-lg mx-auto cursor-pointer'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>5N / 6D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Karismatic Kerela</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={kerala5} className='box-image' />
                </div></Link>

                <Link to="/Best-of-orissa"><div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="600" data-aos-duration="800" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div  className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>5N / 6D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Best of Orissa</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={orissa1} className='box-image' />
                </div></Link>

                <div onClick={scrollToTop} data-aos="fade-right" data-aos-delay="700" data-aos-duration="900" className='box rounded-lg mx-auto md:mb-12 cursor-pointer md:mb-12'>
                    <div onClick={scrollToTop} className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>4N / 5D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Glimpse of Andaman</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={andaman3} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="450" data-aos-duration="600" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>8N / 9D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Lakes and Pine</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={kashmir2} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>6N / 7D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white tracking-tight leading-6'>CRUIZE FEST - COSTA TOSCANA DUBAI</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-2  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={dubai1} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="800" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>6N / 7D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Wonders of Nepal</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={nepal} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="700" data-aos-duration="900" className='box rounded-lg mx-auto cursor-pointer md:mb-12'>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>6N / 7D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Iceland Holiday Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={iceland1} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="450" data-aos-duration="600" className='box rounded-lg cursor-pointer mx-auto lg:hidden md:mb-12'>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>8N / 9D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Turkey Holiday Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={turkey1} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" className='box rounded-lg cursor-pointer mx-auto lg:hidden md:mb-12'>
                    <div className='mt-36 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>7N / 8D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Switzerland Holiday Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-end my-auto mr-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={siwss4} className='box-image' />
                </div>
            </div>
            <div data-aos="fade-right" data-aos-delay="450" data-aos-duration="600" className='lg:flex hidden  justify-center md:mb-12 gap-16 '>
                <div className='box rounded-lg cursor-pointer'>
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>8N / 9D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Turkey Holiday Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 mt-5  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={turkey1} className='box-image' />
                </div>

                <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="700" className='box rounded-lg cursor-pointer md:mb-12' >
                    <div className='mt-40 ml-5'>
                        <p className='  text-blue-700 bg-white w-fit py-1 px-3 text-sm font-semibold text-center rounded-2xl'>7N / 8D</p>
                        <h1 className='text-[22px]  font-light mt-2   text-white'>Switzerland Holiday Package</h1>
                        <p className='text-md text-white bg-orange-500 w-fit py-1.5 font-semibold float-right mr-5 -mt-3  px-2'>from ₹ 5000</p>
                    </div>
                    <img src={siwss4} className='box-image' />
                </div>
            </div>
        </div>
    )
}

export default Best
