import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/logo/logo.png"
import Footer from "../Component/shared/footer/Footer";

const MainLayout = () => {
    const navItem=<>
    <NavLink to={'/'}><li className="mr-4">Home</li></NavLink>
    <NavLink to={'/#about'}><li className="mr-4">About</li></NavLink>
    <NavLink><li>Contact</li></NavLink>
</>
    return (
        <div className="drawer ">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle"/>
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar bg-black">
                    <div className="flex-none lg:hidden ">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2 justify-end lg:justify-start">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal text-white">
                            {navItem}
                           
                        </ul>
                    </div>
                </div>
               <div className="bg-black">
               <Outlet></Outlet>
               <Footer></Footer>
               </div>
            </div>
            <div className="drawer-side z-20 ">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 min-w-[240px] min-h-full bg-[#05030a] text-white">
                   {navItem}
                </ul>
            </div>
        </div>
    );
};

export default MainLayout;