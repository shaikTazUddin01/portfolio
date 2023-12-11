import bannerImg from '../../../assets/bg-img/project-bg.jpg'
import bannerImg2 from '../../../assets/bg-img/bg1.gif'
import bannerImg3 from '../../../assets/bg-img/bg-2.gif'
import user from '../../../assets/user/author1.png'
import { TypeAnimation } from 'react-type-animation';


const Banner = () => {
  

    return (
        <div className="bg-cover  w-full shadow-xl" style={{ backgroundImage: `url(${bannerImg3})` }}>
           <div className='bg-[#000000de]'>
           <div className='flex'>
                <div className='w-2/3 flex justify-center items-center  flex-col'>
                    <div>
                        <h1 className='uppercase text-5xl text-white font-bold'><span className='text-green-500'>Immagination</span> is more <br /> <span className='pt-10'>importent then knowledge</span></h1>
                        <p className=' mt-4 text-white pl-2 text-2xl'>I Am Shaik Taz Uddin </p>
                        <div>
                        <p className='border-l-2 border-green-500 mt-4 text-white pl-2 text-2xl'>I Am a </p>
                        {/* text-animation */}
                        <TypeAnimation
                        sequence={[
                          // Same substring at the start will only be typed once, initially
                          'Front End Developer',
                          1000,
                          ' for Hamsters',
                          1000,
                          '  Guinea Pigs',
                          1000,
                          ' for Chinchillas',
                          1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em', color:'#22c55e' }}
                        repeat={Infinity}
                      />
                        </div>
                        <div>
                            <button className='py-2 px-5 uppercase bg-green-500 text-white mt-4 rounded-md text-xl font-semibold'>Get Start</button>
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