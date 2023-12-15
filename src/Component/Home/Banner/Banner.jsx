// import bannerImg from '../../../assets/bg-img/project-bg.jpg'
import bannerImg from '../../../assets/bg-img/bg1.gif'
// import user from '../../../assets/user/author1.png'
import user1 from '../../../assets/user/13.png'
import { TypeAnimation } from 'react-type-animation';

import './banner.css'
const Banner = () => {


    return (
        <div className="bg-cover w-full shadow-xl block " style={{ backgroundImage: `url(${bannerImg})` }} id='home'>
            <div className='bg-[#000000ca] '>
                <div className='flex flex-col-reverse md:flex-row py-10'>
                    <div className='px-5 md:w-2/3 flex justify-center items-center  flex-col pb-10 md:pb-0'>
                        <div className='text-center md:text-left '>
                            <h1 className='uppercase text-4xl lg:text-5xl text-white font-bold tracking-tighter leading-[50px]'><span className='text-[#1fca61]'>Imagination</span> is more <br /> <span className='pt-10'>significance than knowledge.</span></h1>
                            {/* <h1 className='uppercase text-4xl lg:text-5xl text-white font-bold tracking-tighter leading-[50px]'><span className='text-green-500'>Imagination </span>holds greater <br /> <span className='pt-10'>significance than knowledge.</span></h1> */}
                            <p className=' mt-4 text-white  text-xl md:text-2xl tracking-widest'> I'm Shaik Taz Uddin </p>
                            <div className='relative flex flex-col md:flex-row gap-3 items-center'>
                               <div>
                               <span className='text-2xl md:text-3xl text-white mr-2 border-l-2 pl-2  border-green-500'>A skilled</span>
                               </div>
                              <div className='h-[60px]'>
                              <TypeAnimation
                                    sequence={['Front End Developer', 500, 'React Developer',500]}
                                    style={{ fontSize: '36px' ,color:'#1fca61',display: 'inline-block' }}
                                    repeat={Infinity}
                                />
                              </div>

                            </div>
                            <div>
                                {/* <button className='py-2 px-5 uppercase bg-green-500 text-white mt-4 rounded-md text-xl font-semibold'>See project</button> */}
                            </div>
                        </div>
                    </div>
                    {/* shadow-lg hover:shadow-xl hover:shadow-[#014816] shadow-[#cdcecd65]  */}

                    <div className='md:w-1/3 px-5 flex justify-center items-center my-10
                    
                    '>
                        <div className='banner-img
                         border border-[#cdcecd65]
                        bg-gradient-to-r from-[#010601b0] via-[#000000d4] to-[#01060193]
                        h-[300px] w-[300px] md:h-[380px] md:w-[380px]
                        
                        '>
                        <img src={user1} alt="" className='bottom-0 mt-10w-auto pt-5' />
                        {/* <img src={user1} alt="" className='overflow-hidden bottom-0 mt-10 h-[350px] md:h-[400px] lg:h-[500px] w-auto' /> */}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;