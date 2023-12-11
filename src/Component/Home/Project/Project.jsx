import brandshop from '../../../assets/project/brand shop.png'
import building from '../../../assets/project/building-management.png'
import study from '../../../assets/project/study group.png'

const Project = () => {
    return (
        <div className='mt-20 px-20 mb-20'>
            {/* project header */}
            <div className="text-white flex justify-center items-center mb-20 mt-20">
                <div className="w-1/2 pl-20">
                    <p className="">my Projects</p>
                    <h1 className="text-5xl">My Working Projects</h1>
                </div>
                <div className="w-1/2">
                    <p className="border-l-2 border-green-500 pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. we are offering online HR systems that can be customized depending on your business needs.</p>
                </div>
            </div>
            {/* project section */}
            <div className='flex gap-10 justify-center'>
                <div className='p-10 bg-[#1b1b1b] '>
                    <a href="https://benevolent-choux-40c88a.netlify.app" target='_blank'>
                        <img src={study} alt="" className='w-full h-[350px]' />
                    </a>
                </div>
                <div className=' bg-[#1b1b1b] p-10'>
                <a href="https://building-management-406201.web.app" target='_blank'>
                        <img src={building} alt="" className='w-full h-[350px' />
                    </a>
                </div>
                <div className=' bg-[#1b1b1b] p-10'>
                <a href="https://new-brand-product.web.app/" target='_blank'>
                        <img src={brandshop} alt="" className='w-full h-[350px' />
                    </a>
                </div>
                </div>
            </div>
        // </div>
    );
};

export default Project;