import React from 'react'
import Navbar from '../Navbar/Navbar';
import europe_video from '../../Assets/europe-video.mp4';
import siwss4 from '../../Assets/swiss4.jpg';
import paris from '../../Assets/paris.jpg';
import france from '../../Assets/france.jpg';
import ams from '../../Assets/ams.jpg';
import italy from '../../Assets/italy.jpg';
import brussels from '../../Assets/brussels.jpg';
import germany from '../../Assets/germany.jpg';
import eastern_europe from '../../Assets/eastern-europe.jpg';
import austria from '../../Assets/austria.jpg';
import iceland from '../../Assets/iceland.jpg';
import turkey from '../../Assets/turkey.jpg';
import greece from '../../Assets/greece.jpg';
import spain from '../../Assets/spain.webp';
import uk from '../../Assets/uk.jpg';
import scotland from '../../Assets/scotland.jpg';
import portugal from '../../Assets/portugal.jpg';
import ireland from '../../Assets/ireland.jpg';
import finland from '../../Assets/finland.jpg';
import croatia from '../../Assets/croatia.jpg';
import scandinavia from '../../Assets/scandinavia.jpg';
import Netherlands3 from '../../Assets/Netherlands3.jpg';
import Belgium2 from '../../Assets/Belgium2.jpg';
import Santorini3 from '../../Assets/Santorini3.jpg';
import Moscow3 from '../../Assets/Moscow3.jpg';
import Czech from '../../Assets/Czech2.jpg';
import InputFiled from '../Input/InputFiled';
import Footer from '../Footer/Footer';
const Europe = () => {
    return (
        <section className='mx-auto'>
            <Navbar />
            <div className='flex w-full md:h-[25rem] h-[17rem] lg:pt-20 pt-16'>
                <video className='absolute filter brightness-50 z-0 w-full lg:h-[22rem] md:h-[20rem] h-[13rem]  object-cover ' autoPlay muted loop>
                    <source src={europe_video} className='' type='video/mp4'></source>
                </video>
                <h1 className='lg:text-[2.6rem] md:text-3xl  text-2xl md:font-extrabold font-bold text-white z-10 mx-auto my-auto relative uppercase'>Europe</h1>
            </div>
            <div className='pt-16'>
                <p className='text-center text-[#000000] font-bold lg:text-xl lg:tracking-wide'>Europe with Packages</p>
                <div className='md:flex flex-wrap justify-center md:gap-14 mt-5 mb-20 md:p-10'>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Switzerland</h1>
                        <img src={siwss4} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Paris</h1>
                        <img src={paris} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>France</h1>
                        <img src={france} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Amsterdam</h1>
                        <img src={ams} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Italy</h1>
                        <img src={italy} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Brussels</h1>
                        <img src={brussels} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Germany</h1>
                        <img src={germany} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'> Eastern-Europe</h1>
                        <img src={eastern_europe} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Austria</h1>
                        <img src={austria} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Iceland</h1>
                        <img src={iceland} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Turkey</h1>
                        <img src={turkey} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Greece</h1>
                        <img src={greece} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Spain</h1>
                        <img src={spain} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>United Kingdom</h1>
                        <img src={uk} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Scotland</h1>
                        <img src={scotland} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Portugal</h1>
                        <img src={portugal} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Amsterdam</h1>
                        <img src={ireland} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Scondinavia</h1>
                        <img src={scandinavia} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Finland</h1>
                        <img src={finland} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Croatia</h1>
                        <img src={croatia} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Netherlands</h1>
                        <img src={Netherlands3} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Belgium</h1>
                        <img src={Belgium2} className='box-image' />
                    </div>

                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Czech</h1>
                        <img src={Czech} className='box-image' />
                    </div>

                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Santorini</h1>
                        <img src={Santorini3} className='box-image' />
                    </div>
                    <div className='box_1 rounded-lg cursor-pointer'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-white'>Moscow</h1>
                        <img src={Moscow3} className='box-image' />
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

export default Europe
