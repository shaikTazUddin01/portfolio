import brandshop from '../../../assets/project/brand shop.png'
import building from '../../../assets/project/building-management.png'
import study from '../../../assets/project/study group.png'
import './project.css'
const Project = () => {
    return (
        <div className='mt-20 px-20 mb-20' id='Projects'>
            {/* project header */}
            <div className="text-white flex justify-center items-center mb-20 mt-20">
                <div className="w-1/2 ">
                    <p className="">My Projects</p>
                    <h1 className="text-5xl">My Working Projects</h1>
                </div>
                <div className="w-1/2">
                    <p className="border-l-2 border-green-500 pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. we are offering online HR systems that can be customized depending on your business needs.</p>
                </div>
            </div>
            {/* project section */}
            <div className='flex flex-col md:flex-row gap-10 justify-center'>
                {/* group stady */}
                <div className=' bg-[#1b1b1b] p-10 project-card'>
                <div className='relative overflow-hidden'>
                    <a href="https://benevolent-choux-40c88a.netlify.app" >
                        <img src={study} alt="" className='w-full h-[350px]' />
                        {/* card-body */}
                        <div className="project-card-body">
                            <h1 className='text-white '>taz uddin</h1>
                        </div>
                    </a>
                </div>
                </div>
                {/* building */}
                {/* href="https://building-management-406201.web.app"  */}
                <div className=' bg-[#1b1b1b] p-10 project-card'>
                <div className='relative overflow-hidden'>
                    <a href="https://building-management-406201.web.app" >
                        <img src={building} alt="" className='w-full h-[350px]' />
                        {/* card-body */}
                        <div className="project-card-body">
                            <h1 className='text-white '>taz uddin</h1>
                        </div>
                    </a>
                </div>
                </div>
                {/* https://new-brand-product.web.app/ */}
                {/* brand-shop */}
                <div className=' bg-[#1b1b1b] p-10 project-card'>
                <div className='relative overflow-hidden'>
                    <a href="https://new-brand-product.web.app" >
                        <img src={brandshop} alt="" className='w-full h-[350px]' />
                        {/* card-body */}
                        <div className="project-card-body">
                            <h1 className='text-white '>taz uddin</h1>
                        </div>
                    </a>
                </div>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Project;