import bgimg from '../../../../assets/img/about-bg-shape.png'
import shaip from '../../../../assets/img/about-shape.svg'
import aboutme from '../../../../assets/img/about1.png'

const About = () => {
    return (
        <div className='h-[500px] flex justify-center items-center mb-20'>
            <div className='w-1/2 relative'>
                <div style={{ backgroundImage: `url(${bgimg})` }} className='w-full h-full bg-no-repeat flex justify-center items-center'>
                    <img src={aboutme} alt="" className='w-2/3 z-10 ' />
                </div>
                    <img src={shaip} alt="" className='top-20 absolute' />
            </div>
            <div className='w-1/2 mt-10 text-white'>
                <h1 className='text-4xl text-[#f8f8f8] font-extrabold'>FAILURE IS THE CONDIMENT THAT <br />GIVES SUCCESS</h1>
                <p>Spend more time focusing on the important aspects of your business. Turn to McCartney HR LLC in Brooklyn, NY for HR solutions. As an advanced virtual HR company, we are offering online HR systems that can be customized depending on your business needs.</p>
                <button className='py-2 px-5 bg-green-500 text-xl font-semibold rounded-md mt-10'>Download CV</button>
            </div>
        </div>
    );
};

export default About;