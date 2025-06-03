import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';
import { NavLink } from 'react-router';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-gray-900 text-white p-10">
            <div className='flex gap-4 items-center justify-center'>
                <img src="/src/assets/logo-footer.png" alt="" />
                <h1 className='text-[18px] md:text-2xl lg:text-3xl font-bold'>Law.BD</h1>
            </div>
            <nav className="grid grid-flow-col gap-4">
                <NavLink to="/" className="ml-10">Home</NavLink>
                <NavLink to="/myBookings" className="ml-10">My Bookings</NavLink>
                <NavLink to="/blogs" className="ml-10">Blogs</NavLink>
                <NavLink to="/contacts" className="ml-10">Contact Us</NavLink>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href='https://www.facebook.com/mdmhrz/' target='_blank' className='cursor-pointer'>
                        <FaFacebook className='text-2xl' />
                    </a>
                    <a>
                        <FaXTwitter className='text-2xl' />
                    </a>
                    <a href='https://www.linkedin.com/in/mdmhrz/' target='_blank' className='cursor-pointer'>
                        <FaLinkedin className='text-2xl' />
                    </a>
                    <a href='https://www.youtube.com/' target='_blank' className='cursor-pointer'>
                        <IoLogoYoutube className='text-2xl' />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;