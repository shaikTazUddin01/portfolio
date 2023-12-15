import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from 'react-router-hash-link';
import logo from "../assets/logo/logo.png"
import Footer from "../Component/shared/footer/Footer";
import { useEffect, useState } from "react";
import TopToScroll from "../Component/TopToscroll/TopToScroll";

const MainLayout = () => {
//     const [active,setActive]=useState(false)
// const location=useLocation()
// useEffect(()=>{
//     console.log(location)
// },[location?.hash])
//     const closeMenu=()=>setActive(false)
//     const openMenu=()=>setActive(true)
//     console.log(active)
    // useEffect(()=>{
    //     closeMenu()
    // },[])
    const navItem=<>
    <NavHashLink smooth to={'#home'}
    ><li className="mr-4" >Home</li></NavHashLink> 
    <NavHashLink smooth to={'#about'}>
    <li className="mr-4">About</li>
    </NavHashLink>
    <NavHashLink smooth to={'/#experience'} ><li className="mr-4">Experience</li></NavHashLink>
    <NavHashLink smooth to={'/#Projects'}><li className="mr-4">Projects</li></NavHashLink>
    <NavHashLink smooth to={'/#contact'}><li>Contact</li></NavHashLink >
</>
    return (
        <div className="bg-black mx-auto">
            <div className="drawer max-w-[1440px] mx-auto">
           <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
           <div className="drawer-content flex flex-col">
               {/* Navbar */}
               <div className="w-full navbar bg-black lg:px-10">
                   <div className="flex-none lg:hidden ">
                       <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                       </label>
                   </div>
                   <div className="flex-1 px-2 mx-2 justify-end lg:justify-start">
                       <img src={logo} alt="" className="w-[130px] mt-2" />
                   </div>
                   <div className="flex-none hidden lg:block">
                       <ul className="menu menu-horizontal text-white text-[16px] uppercase">
                           {navItem}
                          
                       </ul>
                   </div>
               </div>
              <div className="bg-black">
              <Outlet></Outlet>

              <Footer></Footer>
              <TopToScroll></TopToScroll>
              </div>
           </div>
           <div className="drawer-side z-20 ">
               <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
               <ul className="menu p-4 min-w-[240px] min-h-full bg-[#090513] text-white text-[16px] uppercase collapse-menu">
                  {navItem}
               </ul>
           </div>
       </div>
        </div>
    );
};

export default MainLayout;