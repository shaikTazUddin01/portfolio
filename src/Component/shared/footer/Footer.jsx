import React from 'react';
import logo from "../../../assets/logo/logo.png"
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';


const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-4 bg-[#000000] text-white md:px-20 px-5">
        <aside className="items-center grid-flow-col">
          {/* <img src={logo} alt="" /> */}
          <p className=''>Copyright © 2023 - All right reserved by Shaik Taz Uddin</p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <div className='text-xl'>
            <a href="https://www.linkedin.com/in/shaik-taz-uddin-1a47682a0/">
              <FaLinkedin />
            </a>
          </div>
          <div className='text-xl'>
            <a href="https://github.com/shaikTazUddin01">
              <FaGithub></FaGithub>
            </a>
          </div>
          <div className='text-xl'>
            <a href="https://www.facebook.com/tazahmedcse/">
              <FaFacebook></FaFacebook>
            </a>
          </div>
          <div className='text-xl'>
            <a href="">
              <MdEmail></MdEmail>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;