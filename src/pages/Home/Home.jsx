import React from 'react';
import Banner from '../../Component/Home/Banner/Banner';
// import About from '../../Component/Home/Banner/About/About';
import About from '../../Component/Home/About/About'
import Experience from '../../Component/Experience/Experience';

const Home = () => {
    return (
        <div>
            {/* banner section */}
            <Banner></Banner>
            {/* About section */}
            <About id='about'></About>
            {/* experience section */}
            <Experience></Experience>
        </div>
    );
};

export default Home;