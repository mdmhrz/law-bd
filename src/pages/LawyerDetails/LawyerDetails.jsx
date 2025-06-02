import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { CiCircleAlert } from "react-icons/ci";

const LawyerDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const lawyerId = parseInt(id);
    const data = useLoaderData();
    const specificLawyer = data.find(lawyer => lawyer.id === lawyerId);

    const { experience, name, expertise, license_no, availability, fee } = specificLawyer;
    // console.log(specificLawyer);

    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='bg-[#f1f1f1] p-10 rounded-xl text-center mb-10'>
                <h1 className='text-2xl font-bold'>Lawyer's Profile Details</h1>
                <p className='text-gray-500'>Book a consultation with our experienced legal expert. With a strong background in various areas of law, our lawyer is dedicated to providing you with trusted legal advice and personalized support tailored to your case.</p>
            </div>
            <div className='flex border-2 border-gray-200 rounded-xl p-4 gap-4 mb-10'>
                <div className='bg-base-300 p-5 rounded-md flex items-center justify-center'>
                    <img className='w-[140px]' src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2c/91/92/27/eb/v1_E10/E108R132.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=32c5fa37d8c48c13807139bce985f13ef2c519fff51eca3cb5ccd359e8699ffd" alt="" />
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
            <div className='border-2 border-gray-200 rounded-xl p-4 mb-20'>
                <div className='border-b-2 border-dashed border-gray-300'>
                    <h2 className='font-bold text-center text-xl mb-3'>Book an Appointment</h2>
                </div>
                <div className='flex items-center justify-between py-4 border-b-2 border-gray-200 mb-4'>
                    <p className='font-bold'>Availability</p>
                    <p className='bg-green-100 rounded-xl py-1 text-[14px] font-medium text-green-600 px-4'>Lawyer Available Today</p>
                </div>
                <p className='bg-orange-100 text-orange-400 text-[12px] px-2 rounded-xl p-2 mb-8' > <CiCircleAlert className='inline-flex mr-2' />
                    Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
                <div className='w-11/12 mx-auto mb-4'>
                    <button className='cursor-pointer text-center font-medium text-white w-full bg-green-600 px-2 py-2 rounded-3xl'>Book Appointment Now</button>
                </div>
            </div>
        </div>

    );
};

export default LawyerDetails;