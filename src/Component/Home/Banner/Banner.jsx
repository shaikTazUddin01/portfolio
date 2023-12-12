// import bannerImg from '../../../assets/bg-img/project-bg.jpg'
import bannerImg from '../../../assets/bg-img/bg1.gif'
import user from '../../../assets/user/author1.png'
import user1 from '../../../assets/user/13.png'
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {


    return (
        <div className="bg-cover  w-full shadow-xl block " style={{ backgroundImage: `url(${bannerImg})` }} id='home'>
            <div className='bg-[#000000f6] '>
                <div className='flex flex-col-reverse md:flex-row'>
                    <div className='px-5 md:w-2/3 flex justify-center items-center  flex-col'>
                        <div className='text-center md:text-left '>
                            <h1 className='uppercase text-4xl lg:text-5xl text-white font-bold tracking-tighter leading-[50px]'><span className='text-green-500'>Immagination</span> is more <br /> <span className='pt-10'>important than knowledge</span></h1>
                            <p className=' mt-4 text-white  text-xl md:text-2xl tracking-widest'> Myself Shaik Taz Uddin </p>
                            <div className='relative'>
                                <span className='text-2xl md:text-3xl text-white mr-2 border-l-2 pl-2  border-green-500'>A</span>
                                <TypeAnimation
                                    sequence={['Front End Developer', 500, 'React Developer']}
                                    style={{ fontSize: '36px' ,color:'#22c55e',display: 'inline-block' }}
                                    repeat={Infinity}
                                />

                            </div>
                            <div>
                                {/* <button className='py-2 px-5 uppercase bg-green-500 text-white mt-4 rounded-md text-xl font-semibold'>See project</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='md:w-1/3 px-5 mx-auto flex justify-center'>
                        <img src={user1} alt="" className='overflow-hidden bottom-0 mt-10 h-[350px] md:h-[400px] lg:h-[500px] w-auto' />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;