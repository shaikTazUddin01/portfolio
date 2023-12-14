import React from 'react';
import Banner from '../../Component/Home/Banner/Banner';
// import About from '../../Component/Home/Banner/About/About';
import About from '../../Component/Home/About/About'
import Experience from '../../Component/Home/Experience/Experience';
import Project from '../../Component/Home/Project/Project';
import Contact from '../../Component/Home/contact/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    Aos.init()
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* About section */}
            <div data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
                data-aos-delay="300"
            >
                <About ></About>
            </div>
            {/* experience section */}
            <Experience></Experience>
            {/* project section */}
            <Project></Project>
            {/*contact*/}
            <Contact></Contact>
        
        </div>
    );
};

export default Home;