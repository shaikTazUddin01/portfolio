import React from 'react';
import Banner from '../../Component/Home/Banner/Banner';
// import About from '../../Component/Home/Banner/About/About';
import About from '../../Component/Home/About/About'
import Experience from '../../Component/Home/Experience/Experience';
import Project from '../../Component/Home/Project/Project';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* About section */}
            <About id='about'></About>
            {/* experience section */}
            <Experience></Experience>
            {/* project section */}
            <Project></Project>
        </div>
    );
};

export default Home;