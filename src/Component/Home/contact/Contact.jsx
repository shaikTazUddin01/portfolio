import React from 'react';
import { FaGithub, FaLinkedin, FaLocationPin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import conImg from "../../../assets/contact/contact.gif"
import bgimg from '../../../assets/bg-img/about-bg.png'

const Contact = () => {
    return (
        <div id='contact ' className=' px-5 md:px-20 bg-cover pt-5 pb-16 ' style={{backgroundImage:`url(${bgimg})`}}> 

            {/* <div>
                <h1 className='  text-white mt-5 left-0 '>contact Us</h1>
                
                <h1 className='text-[22px] md:text-4xl lg:text-4xl text-[#f8f8f8] font-extrabold mb-5 mt-1 '>Contact the <span className='text-green-500 uppercase'>production</span></h1>
            </div> */}
            <div className="text-white flex flex-col md:flex-row justify-center items-center mb-10 md:mb-20 mt-20">
                <div className="w-full md:w-1/2  mt-10 md:mt-0">
                    <p className="">Contact Us</p>
                    <h1 className="text-3xl md:text-5xl">Contact the production</h1>
                </div>
                <div className="w-full md:w-1/2  pt-5 md:pt-0">
                    <p className="border-l-2 border-green-500 pl-2">Feel free to contact me if you have any questions or want to contact me for any reason</p>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center lg:-mt-5 gap-10'>
                <div className='md:w-1/2 md:hidden lg:flex'>
                    <img src={conImg} alt="" className='mt-5' />
                </div>
                <div className='w-full lg:w-1/2 text-white mt-10 md:mt-0  bg-[#0c0c0c] shadow-lg shadow-green-950 hover:shadow-xl hover:shadow-green-800 rounded-xl '>
                    <form className="card-body text-white">
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white">First Name</span>
                                </label>
                                <input type="text" placeholder="Enter First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white">Last Name</span>
                                </label>
                                <input type="text" placeholder="Enter Last Name" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <textarea placeholder="Write Messages" className="textarea textarea-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send Messages</button>
                        </div>
                    </form>
                    {/* <p className='flex gap-2 items-center '><FaLinkedin /><span><a href="">shaiktazuddin-dev</a></span></p>

                    <p className='flex gap-2 items-center'><FaGithub></FaGithub><span><a href="">shaiktazuddin07</a></span></p>

                    <p className='flex gap-2 items-center justify-center'><MdEmail></MdEmail><span><a href="">shaiktazuddin@gmail.com</a></span></p>

                    <p className='flex gap-2 items-center justify-center'><FaLocationPin></FaLocationPin><span>Khulna,Bangladesh</span></p>

                    <p className='flex gap-2 items-center justify-center'><FaPhone></FaPhone><span><a href="">+880 1834 957677</a></span></p> */}

                </div>
            </div>
        </div>
    );
};

export default Contact;