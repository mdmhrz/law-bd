import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiCircleAlert } from "react-icons/ci";
import { addToStoreDB } from '../../utilities/addToDB';
import { Bounce, toast } from 'react-toastify';
import { currentDate } from '../../utilities/currentDate';
import { Helmet } from 'react-helmet';

const LawyerDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const lawyerId = parseInt(id);
    const data = useLoaderData();
    const specificLawyer = data.find(lawyer => lawyer.id === lawyerId);

    const { image, experience, name, expertise, license_no, availability, fee } = specificLawyer;
    // console.log(specificLawyer);

    const handleBookAppointment = (id) => {
        addToStoreDB(id)
    }

    const getDay = currentDate();

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Lawyer Details</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='max-w-11/12 mx-auto'>
                <div className='bg-[#f1f1f1] p-10 rounded-xl text-center mb-10 shadow-md'>
                    <h1 className='text-2xl font-bold'>Lawyer's Profile Details</h1>
                    <p className='text-gray-500'>Book a consultation with our experienced legal expert. With a strong background in various areas of law, our lawyer is dedicated to providing you with trusted legal advice and personalized support tailored to your case.</p>
                </div>
                <div className='flex border-2 border-gray-200 rounded-xl p-4 gap-8 mb-10 shadow-md'>
                    <div className='bg-base-300 p-5 rounded-md flex items-center justify-center'>
                        <img className='w-[140px] rounded-md' src={image} alt="" />
                    </div>
                    <div>
                        <div className='flex gap-4 mb-3'>
                            <p className='bg-blue-100 text-[12px] p-1 px-4  text-blue-700 rounded-xl'>{experience}+ Years Experience</p>
                        </div>
                        <h4 className='font-bold text-2xl'>{name}</h4>
                        <div className='flex gap-8 items-center mb-2'>
                            <p className='text-gray-400' >{expertise}</p>
                            <p className='text-[14px] text-gray-400'>&#174; License No: {license_no} </p>
                        </div>
                        <div className='flex mb-2'>
                            <p className='mr-4 font-medium'>Availibility</p>
                            <div>
                                {
                                    availability.map((day, index) => <button className='bg-orange-100 text-orange-400 rounded-md px-4 mr-4 font-medium text-[14px]' key={index}>{day}</button>)
                                }
                            </div>
                        </div>
                        <p className='font-medium'>Consultation Fee: <span className='ml-4 text-green-600 font-semibold'>BDT {fee} </span></p>
                    </div>
                </div>
                <div className='border-2 border-gray-200 rounded-xl p-4 mb-20 shadow-md'>
                    <div className='border-b-2 border-dashed border-gray-300'>
                        <h2 className='font-bold text-center text-xl mb-3'>Book an Appointment</h2>
                    </div>
                    <div className='flex items-center justify-between py-4 border-b-2 border-gray-200 mb-4'>
                        <p className='font-bold'>Availability</p>
                        <div>
                            {
                                availability.includes(getDay) ? <p className='bg-green-100 rounded-xl py-1 text-[14px] font-medium text-green-600 px-4'>Lawyrer is available today</p> : <p className='bg-red-100 rounded-xl py-1 text-[14px] font-medium text-red-600 px-4'>Lawyer is unavailable today</p>
                            }
                        </div>

                    </div>
                    <button className='bg-orange-100 text-orange-400 text-[12px] px-2 rounded-xl p-2 mb-8 w-auto' > <CiCircleAlert className='inline-flex mr-2' />
                        Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</button>
                    <div className='w-11/12 mx-auto mb-4'>
                        <button onClick={() => handleBookAppointment(id)} className='cursor-pointer text-center font-medium text-white w-full bg-green-600 px-2 py-2 rounded-3xl'>Book Appointment Now</button>
                    </div>
                </div>
            </div>


        </>


    );
};

export default LawyerDetails;