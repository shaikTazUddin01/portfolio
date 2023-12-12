import brandshop from '../../../assets/project/brand shop.png'
import building from '../../../assets/project/building-management.png'
import study from '../../../assets/project/study group.png'
import './project.css'
const Project = () => {
    return (
        <div className='mt-20 px-5 md:px-20 mb-20' id='Projects'>
            {/* project header */}
            <div className="text-white flex flex-col md:flex-row justify-center items-center mb-10 md:mb-20 mt-20">
                <div className="w-full md:w-1/2 ">
                    <p className="">My Projects</p>
                    <h1 className="text-3xl md:text-5xl">My Working Projects</h1>
                </div>
                <div className="mt-5 md:mt-0 w-full md:w-1/2">
                    <p className="border-l-2 border-green-500 pl-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. we are offering online HR systems that can be customized depending on your business needs.</p>
                </div>
            </div>
            {/* project section */}
            <div className='flex flex-col md:flex-row gap-10 justify-center'>
                {/* group stady */}
                <div className=' bg-[#1b1b1b] p-10 project-card'>
                    <div className='relative overflow-hidden'>
                        <a href="https://benevolent-choux-40c88a.netlify.app" target='_blank' >
                            <img src={study} alt="" className='w-full h-[350px]' />
                            {/* card-body */}
                            <div className="project-card-body text-white">
                                <h1 className=' text-center mt-10 '>Group Stady</h1>
                                <div className='bg-white h-[2px] w-2/3 mx-auto mt-2'></div>
                                <p className='px-2 mt-2 text-sm break-all'>This is a study Related web application.In this project anyone can see all assignment. Only a logged in user can create a assignment. Only a logged in user can show view assignment details and take any assignment And any logged in user can mark submited assignment.</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* building */}
                {/* href="https://building-management-406201.web.app"  */}
                <div className=' bg-[#1b1b1b] p-10 project-card'>
                    <div className='relative overflow-hidden'>
                        <a href="https://building-management-406201.web.app" target='_blank' >
                            <img src={building} alt="" className='w-full h-[350px]' />
                            {/* card-body */}
                            <div className="project-card-body text-white">
                                <h1 className=' text-center mt-10 '>Building Management</h1>
                                <div className='bg-white h-[2px] w-2/3 mx-auto mt-2'></div>
                                <p className='px-2 mt-2 text-sm break-all'>It is a Building Manage Application.Any user able to agreement for any room.When user sent a agreement request then Admin see this request.If Admin accept this request then he/she is the member of this house.Here Member can payment and see his Payment History in Payment History page</p>
                            </div>
                        </a>
                    </div>
                </div>
                {/* https://new-brand-product.web.app/ */}
                {/* brand-shop */}
                <div className=' bg-[#1b1b1b] p-10 project-card'>
                    <div className='relative overflow-hidden'>
                        <a href="https://new-brand-product.web.app" target='_blank'>
                            <img src={brandshop} alt="" className='w-full h-[350px]' />
                            {/* card-body */}
                            <div className="project-card-body text-white">
                                <h1 className=' text-center mt-10 '>Brand Item shop</h1>
                                <div className='bg-white h-[2px] w-2/3 mx-auto mt-2'></div>
                                <p className='px-2 mt-2 text-sm break-all'>In this web site you get many branded item.When click any brand then show specific branded product.All product card has two button one is Update button and one is order button.When click update button then you update this product.When click order button then you order this product.In order page you can delete you order.</p>
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