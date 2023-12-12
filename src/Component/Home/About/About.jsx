import { TypeAnimation } from 'react-type-animation';
import bgimg from '../../../assets/img/about-bg-shape.png'
import shaip from '../../../assets/img/about-shape.svg'
import aboutme1 from '../../../assets/img/6-min.png'
import { FaDownload } from "react-icons/fa6";
import './about.css'
const About = () => {
    return (
        <div className='flex flex-col md:flex-row first-letter:justify-center items-center pt-20 md:pb-20 ' id='about'>
            <div className='w-full p-2 md:w-1/2 relative'>
                <div style={{ backgroundImage: `url(${bgimg})` }} className='w-full h-full bg-no-repeat flex justify-center items-center'>
                    <img src={aboutme1} alt="" className='w-[90%] lg:w-2/3 z-10 ' />
                </div>
                <img src={shaip} alt="" className='top-20 absolute hidden lg:flex' />
            </div>
            <div className='w-full md:w-1/2 px-5 md:px-0 text-white relative'>
                <h1 className='  text-white mt-5 left-0 '>About Us</h1>
                {/* <div className='z-10'> */}
                <h1 className='text-2xl md:text-xl lg:text-4xl text-[#f8f8f8] font-extrabold mb-5 mt-1 '>FAILURE IS THE CONDIMENT THAT <br />GIVES <span className='text-green-500'>SUCCESS</span></h1>
                <div className='pr-5'>
                    <TypeAnimation
                        sequence={['Experienced front-end developer skilled in HTML, CSS, JavaScript, and popular frameworks like React, with a strong back-end foundation in Node.js, Express, and MongoDB for comprehensive full-stack development. Dedicated to crafting visually stunning and user-friendly web applications.',]}
                        speed={80}
                        style={{ fontSize: '18px', color: '#fffff' }}
                        repeat={0}
                    />
                </div>
                {/* <p>Experienced front-end developer skilled in HTML, CSS, JavaScript, and popular frameworks like React, with a strong back-end foundation in Node.js, Express, and MongoDB for comprehensive full-stack development. Dedicated to crafting visually stunning and user-friendly web applications.</p> */}
                {/* </div> */}
                <div>
                    <a href="https://drive.google.com/uc?export=download&id=156ofdM6auEFMQlfQWClA1V7tNGCnWTC_">
                        <button className='py-2 px-5 bg-green-500 text-xl font-semibold rounded-md mt-10 flex justify-center items-center gap-2'>
                        <FaDownload></FaDownload>
                            <p>Resume</p>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;