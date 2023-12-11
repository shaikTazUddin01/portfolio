import bannerImg from '../../../assets/bg-img/project-bg.jpg'
import bannerImg2 from '../../../assets/bg-img/bg1.gif'
import bannerImg3 from '../../../assets/bg-img/bg-2.gif'
import bannerImg4 from '../../../assets/bg-img/bg-4.gif'
import bannerImg5 from '../../../assets/bg-img/OwRt.gif'
import user from '../../../assets/user/author1.png'
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {


    return (
        <div className="bg-cover  w-full shadow-xl" style={{ backgroundImage: `url(${bannerImg5})` }}>
            <div className='bg-[#000000f3]'>
                <div className='flex'>
                    <div className='w-2/3 flex justify-center items-center  flex-col'>
                        <div>
                            <h1 className='uppercase text-5xl text-white font-bold'><span className='text-green-500'>Immagination</span> is more <br /> <span className='pt-10'>important than knowledge</span></h1>
                            <p className=' mt-4 text-white  text-2xl tracking-widest'> Myself Shaik Taz Uddin </p>
                            <div className='relative'>
                                <span className='text-3xl text-white mr-2 border-l-2 pl-2  border-green-500'>I Am</span>
                                <TypeAnimation
                                    sequence={['Front End Developer', 500, 'React Developer']}
                                    style={{ fontSize: '36px' ,color:'#22c55e' }}
                                    repeat={Infinity}
                                />

                            </div>
                            <div>
                                {/* <button className='py-2 px-5 uppercase bg-green-500 text-white mt-4 rounded-md text-xl font-semibold'>See project</button> */}
                            </div>
                        </div>
                    </div>
                    <div className='w-1/3'>
                        <img src={user} alt="" className='overflow-hidden bottom-0 mt-10 h-[500px] w-auto' />
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Banner;