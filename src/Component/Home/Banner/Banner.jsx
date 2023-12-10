import bannerImg from '../../../assets/bg-img/project-bg.jpg'
import user from '../../../assets/user/author1.png'
const Banner = () => {
    return (
        <div className="bg-cover  w-full shadow-xl" style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='flex'>
                <div className='w-2/3 flex justify-center items-center  flex-col'>
                   <div>
                   <h1 className='uppercase text-5xl text-white font-bold'><span className='text-green-500'>Immagination</span> is more <br/> <span className='pt-10'>importent then knowledge</span></h1>
                    <p className='border-l-2 border-green-500 mt-4 text-white pl-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
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
    );
};

export default Banner;