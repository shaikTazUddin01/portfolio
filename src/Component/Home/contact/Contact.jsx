import React from 'react';
import { FaGithub, FaLinkedin, FaLocationPin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import conImg from "../../../assets/contact/contact.gif"
// import bgimg from '../../../assets/bg-img/about-bg.png'
import bgimg from '../../../assets/bg-img/bg-img.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'
import TitleText from '../../HeaderText/TitleText';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Contact = () => {
    Aos.init()
    const handlesubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        console.log(form)
        const fName = form.fName.value;
        console.log(fName)
        const lName = form.lName.value;
        console.log(lName)
        const email = form.email.value;
        console.log(email)
        const message = form.messages.value;
        console.log(message)
        const name = fName + " " + lName;
        console.log(fName, lName, email, message);
        toast.success(`Thank you ${name}. I will contact you soon`)

        form.reset()
    }
    return (
        <div id='contact' className='  bg-cover  ' style={{ backgroundImage: `url(${bgimg})` }}>
            <div className='bg-[#0d0d0de2]
            px-5 md:px-20 pt-5 pb-20
            '>
                <div className="text-white flex flex-col md:flex-row justify-center items-center mb-10 md:mb-20 mt-20"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className="w-full md:w-1/2  mt-10 md:mt-0">
                        <TitleText headerText='contact' title='contact us' subtitle='Contact us for further assistance.'></TitleText>
                    </div>
                    <div className="w-full md:w-1/2  pt-5 md:pt-0">
                        <p className="border-l-2 border-green-500 pl-2">
                            Feel free to reach out if you have any questions or need assistance. I'm here to address your inquiries and provide the necessary support and information to help you with any concerns or issues you may have.
                        </p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center lg:-mt-5 gap-10'
                    data-aos="fade-up"
                    data-aos-duration="3000"
                    data-aos-anchor-placement="top-bottom"
                >
                    <div className='md:w-1/2 md:hidden lg:flex'>
                        <img src={conImg} alt="" className='mt-5 ' />
                    </div>
                    <div className='w-full lg:w-1/2 text-white mt-10 md:mt-0  bg-[#0c0c0c] shadow-lg shadow-green-950 hover:shadow-xl hover:shadow-green-800 rounded-xl '>
                        <form className="card-body text-white" onSubmit={handlesubmit}>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">First Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter First Name" className="input input-bordered text-black" name='fName' required />
                                </div>
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text text-white">Last Name</span>
                                    </label>
                                    <input type="text" placeholder="Enter Last Name" className="input input-bordered text-black" name='lName' required />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Email" className="input input-bordered text-black" name='email' required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <textarea placeholder="Write Messages" className="textarea textarea-bordered text-black" name='messages' required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="bg-[#1fca61] py-3 rounded-lg font-medium " type='submit'>Send Messages</button>
                            </div>
                        </form>


                    </div>
                </div>
            </div>


            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Contact;