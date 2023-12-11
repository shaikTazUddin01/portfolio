import CountUp from 'react-countup';
import './experience.css'
import bgimg from '../../../assets/bg-img/about-bg.png'

const Experience = () => {
    return (
        <div className="mt-20 bg-cover pt-10 bg-no-repeat" id='experience' style={{backgroundImage:`url(${bgimg})`}}>
            <div className="text-white flex justify-center items-center mb-20 mt-20">
                <div className="w-1/2 pl-20">
                    <p className="">My Experience</p>
                    <h1 className="text-5xl">EXPERIENCE AND SKILL</h1>
                </div>
                <div className="w-1/2">
                    <p className="border-l-2 border-green-500 pl-2">Front-end maestro with expertise in HTML, CSS, JS, React, and styling magic with Tailwind & Bootstrap. Node.js and Express.js wizard for robust back-end solutions</p>
                </div>
            </div>
            {/* card */}
            <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10 my-10">
                    <div className="card  bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2014(JSC)</h2>
                            <p className="text-xl font-semibold text-green-500">Junior School Certificate</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                    <div className="card  bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2015 - 2017 (SSC)</h2>
                            <p className="text-xl font-semibold text-green-500">Secondary School Certificate</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                    <div className="card  bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2017 - 2021 (DIPLOMA)</h2>
                            <p className="text-xl font-semibold text-green-500">Diploma in CSE</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                    <div className="card  bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2022 - Present (BSC)</h2>
                            <p className="text-xl font-semibold text-green-500">BSC In CSE</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                </div>
                {/* skill chart */}
                <div className="px-20 py-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-center gap-10">
                    {/* Javascript */}
                    <div className=" relative  flex flex-col justify-center items-center">
                        <div className="w-[160px] h-[160px]  rounded-[50%] flex justify-center items-center shadow shadow-white bg-slate-50">
                            <div className="w-[120px] h-[120px]  rounded-[50%] flex justify-center items-center shadow-inner shadow-white z-10 bg-black">
                                <p className="text-center text-white text-xl">
                                    <CountUp end={85}/>%
                                    {/* 60% */}
                                </p>
                            </div>
                            <div className='absolute '>
                            {/* svg img */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" >
                               
                                <circle cx="80" cy="80" r="70" stroke-linecap="round" fill="url(#GradientColor)" />
                            </svg>
                        </div>
                        </div>
                       <div className='text-white'>
                       <h1 className='text-xl'>Javascript</h1>
                       </div>
                    </div>
                    {/* Javascript */}
                    <div className=" relative  flex flex-col justify-center items-center">
                        <div className="w-[160px] h-[160px]  rounded-[50%] flex justify-center items-center shadow shadow-white bg-slate-50">
                            <div className="w-[120px] h-[120px]  rounded-[50%] flex justify-center items-center shadow-inner shadow-white z-10 bg-black">
                                <p className="text-center text-white text-xl">
                                    <CountUp end={90}/>%
                                    {/* 60% */}
                                </p>
                            </div>
                            <div className='absolute '>
                            {/* svg img */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" >
                               
                                <circle className='circle2' cx="80" cy="80" r="70" stroke-linecap="round" fill="url(#GradientColor)" />
                            </svg>
                        </div>
                        </div>
                       <div className='text-white'>
                       <h1 className='text-xl'>React</h1>
                       </div>
                    </div>
                    {/* Javascript */}
                    <div className=" relative  flex flex-col justify-center items-center">
                        <div className="w-[160px] h-[160px]  rounded-[50%] flex justify-center items-center shadow shadow-white bg-slate-50">
                            <div className="w-[120px] h-[120px]  rounded-[50%] flex justify-center items-center shadow-inner shadow-white z-10 bg-black">
                                <p className="text-center text-white text-xl">
                                    <CountUp end={75}/>%
                                    {/* 60% */}
                                </p>
                            </div>
                            <div className='absolute '>
                            {/* svg img */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" >
                               
                                <circle className='circle3' cx="80" cy="80" r="70" stroke-linecap="round" fill="url(#GradientColor)" />
                            </svg>
                        </div>
                        </div>
                       <div className='text-white'>
                       <h1 className='text-xl'>Node JS</h1>
                       </div>
                    </div>
                    {/* Javascript */}
                    <div className=" relative  flex flex-col justify-center items-center">
                        <div className="w-[160px] h-[160px]  rounded-[50%] flex justify-center items-center shadow shadow-white bg-slate-50">
                            <div className="w-[120px] h-[120px]  rounded-[50%] flex justify-center items-center shadow-inner shadow-white z-10 bg-black">
                                <p className="text-center text-white text-xl">
                                    <CountUp end={75}/>%
                                    {/* 60% */}
                                </p>
                            </div>
                            <div className='absolute '>
                            {/* svg img */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" >
                               
                                <circle className='circle4' cx="80" cy="80" r="70" stroke-linecap="round" fill="url(#GradientColor)" />
                            </svg>
                        </div>
                        </div>
                       <div className='text-white'>
                       <h1 className='text-xl'>Express Js</h1>
                       </div>
                    </div>
                    {/* Javascript */}
                    <div className=" relative  flex flex-col justify-center items-center">
                        <div className="w-[160px] h-[160px]  rounded-[50%] flex justify-center items-center shadow shadow-white bg-slate-50">
                            <div className="w-[120px] h-[120px]  rounded-[50%] flex justify-center items-center shadow-inner shadow-white z-10 bg-black">
                                <p className="text-center text-white text-xl">
                                    <CountUp end={70}/>%
                                    {/* 60% */}
                                </p>
                            </div>
                            <div className='absolute '>
                            {/* svg img */}
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" >
                               
                                <circle className='circle5' cx="80" cy="80" r="70" stroke-linecap="round" fill="url(#GradientColor)" />
                            </svg>
                        </div>
                        </div>
                       <div className='text-white'>
                       <h1 className='text-xl'>MongoDB</h1>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;