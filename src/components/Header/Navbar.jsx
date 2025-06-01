import React from 'react';
import { Link, NavLink } from 'react-router';
import './navbar.css'

const Navbar = () => {

    const links = <>
        <NavLink to="/" className="ml-10">Home</NavLink>
        <NavLink to="/myBookings" className="ml-10">My Booking</NavLink>
        <NavLink to="/blogs" className="ml-10">Blogs</NavLink>
        <NavLink to="/contacts" className="ml-10">Contact Us</NavLink>
    </>



    return (
        <div className="navbar w-11/12 mx-auto p-0 border-b-2 py-3 mb-8 border-gray-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="md:p-0 btn btn-ghost lg:hidden mr-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className='flex items-center justify-center gap-2'>
                    <img src="/src/assets/logo.png" alt="" />
                    <h1 className='font-bold text-2xl'>Law.BD</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-green-600 text-white">Contact Now</a>
            </div>
        </div>
    );
};

export default Navbar;