import React, { Suspense } from 'react';
import { Link } from 'react-router';

const Lawyer = ({ lawyer }) => {
    // console.log(lawyer);

    const { image, id, status, experience, name, expertise, license_no } = lawyer;

    return (
        <Suspense fallback={<span className='loading loading-ring loading-xl'></span>}>
            <div className='flex border-2 border-gray-200 rounded-xl p-4 gap-4 justify-between shadow-lg'>
                <div className='bg-base-300 p-6 rounded-md flex items-center justify-center'>
                    <img className='w-[140px] rounded-md' src={image} alt="" />
                </div>
                <div>
                    <div className='flex gap-4 mb-3'>
                        <p className='bg-green-100 text-[12px] px-4 py-2 text-green-700 rounded-xl'>{status}</p>
                        <p className='bg-blue-100 text-[12px] px-4 py-2  text-blue-700 rounded-xl'>{experience}+ Years Experience</p>
                    </div>
                    <h4 className='font-bold text-xl'>{name}</h4>
                    <p >{expertise}</p>
                    <p className='mb-3 text-[14px]'>&#174; License No: {license_no} </p>
                    <Link to={`/lawyerDetails/${id}`}>
                        <button className='btn w-full border border-blue-100 rounded-3xl hover:bg-blue-400 hover:text-white text-blue-600 transition-normal'>View Details</button>
                    </Link>
                </div>
            </div>
        </Suspense>

    );
};

export default Lawyer;