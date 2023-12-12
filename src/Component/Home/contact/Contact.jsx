import React from 'react';
import { FaGithub, FaLinkedin, FaLocationPin, FaPhone } from 'react-icons/fa6';
import { MdEmail } from "react-icons/md";
import conImg from "../../../assets/contact/contact.gif"
import bgimg from '../../../assets/bg-img/about-bg.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
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
       const name =fName+" "+lName;
       console.log(fName,lName,email,message);
       toast.success(`Thank you ${name}. I will contact you soon`)

       form.reset()
    }
    return (
        <div id='contact' className=' px-5 md:px-20 bg-cover pt-5 pb-16 ' style={{ backgroundImage: `url(${bgimg})` }}>


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
                    <form className="card-body text-white" onSubmit={handlesubmit}>
                        <div className='flex flex-col lg:flex-row gap-4'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white">First Name</span>
                                </label>
                                <input type="text" placeholder="Enter First Name" className="input input-bordered text-black" name='fName' required/>
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
                            <input type="email" placeholder="Enter Email" className="input input-bordered text-black"  name='email' required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <textarea placeholder="Write Messages" className="textarea textarea-bordered text-black" name='messages' required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Send Messages</button>
                        </div>
                    </form>


                </div>
            </div>
            <ToastContainer></ToastContainer>

        </div>
    );
};

export default Contact;