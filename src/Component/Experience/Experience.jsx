const Experience = () => {
    return (
        <div className="mt-20">
            <div className="text-white flex justify-center items-center mb-20 mt-20">
                <div className="w-1/2 pl-20">
                    <p className="">my Experience</p>
                    <h1 className="text-5xl">EXPERIENCE AND SKILL</h1>
                </div>
                <div className="w-1/2">
                    <p className="border-l-2 border-green-500 pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. we are offering online HR systems that can be customized depending on your business needs.</p>
                </div>
            </div>
            {/* card */}
            <div>
                <div className="flex gap-6 px-10 my-10">
                    <div className="card w-96 bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2011 - 2014 (UI DESIGNER)</h2>
                            <p className="text-xl font-semibold text-green-500">GOOGLE CORPORATION.</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2011 - 2014 (UI DESIGNER)</h2>
                            <p className="text-xl font-semibold text-green-500">GOOGLE CORPORATION.</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2011 - 2014 (UI DESIGNER)</h2>
                            <p className="text-xl font-semibold text-green-500">GOOGLE CORPORATION.</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-[#0c0c0c] shadow-xl text-white">
                        <div className="card-body">
                            <h2 className="card-title">2011 - 2014 (UI DESIGNER)</h2>
                            <p className="text-xl font-semibold text-green-500">GOOGLE CORPORATION.</p>
                            <p>All You Need To Do Your Best Work Together In One Package Works Seamlessly Computer</p>
                        </div>
                    </div>
                </div>
                {/* skill chart */}
               <div className="relative">
               <div className="px-20 py-20 relative">
                    <div className="w-[160px] h-[160px]  rounded-[50%] flex justify-center items-center shadow shadow-white">
                        <div className="w-[120px] h-[120px]  rounded-[50%] flex justify-center items-center shadow-inner shadow-white">
                            <p className="text-center text-white">
                                60% <br />
                                javaScript
                            </p>
                        </div>

                    <div className="absolute">
                    <svg height="180px" width="180px" >
                        <circle cx="80" cy="80" r="80"  fill="red" />
                    </svg>
                    </div>
                    </div>
               </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;