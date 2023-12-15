import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa6';

const TopToScroll = () => {
    const [showButton, setShowButton] = useState(false)
    const scrollPosition = () => {
        const scroll = window.scrollY;
        console.log(scroll)
        setShowButton(scroll > 50)
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollPosition);
        return () => {
            window.removeEventListener('scroll', scrollPosition)
        }
    }, [])
const goTop = () => {
    window.scrollTo(0, 0)
}
return (
    <div className={`fixed bottom-5 right-5 scroll-smooth ${showButton?'visible':'hidden'}`}>
        <button className='bg-[#1fca61] text-white py-3 px-4 rounded-lg border ' onClick={goTop}>
         <FaArrowUp/>
            </button>
    </div>
);
};

export default TopToScroll;