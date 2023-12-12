import React from 'react';
import Banner from '../../Component/Home/Banner/Banner';
// import About from '../../Component/Home/Banner/About/About';
import About from '../../Component/Home/About/About'
import Experience from '../../Component/Home/Experience/Experience';
import Project from '../../Component/Home/Project/Project';
import Contact from '../../Component/Home/contact/Contact';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* About section */}
            <About ></About>
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