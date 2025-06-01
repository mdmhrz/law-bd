import React, { Suspense } from 'react';

const Lawyer = ({ lawyer }) => {
    // console.log(lawyer);

    const { status, experience, name, expertise, license_no } = lawyer;

    return (
        <Suspense fallback={<span className='loading loading-ring loading-xl'></span>}>
            <div className='flex border-2 border-gray-200 rounded-xl p-4 gap-4 justify-between'>
                <div className='bg-base-300 p-5 rounded-md flex items-center justify-center'>
                    <img className='w-[140px]' src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2c/91/92/27/eb/v1_E10/E108R132.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=32c5fa37d8c48c13807139bce985f13ef2c519fff51eca3cb5ccd359e8699ffd" alt="" />
                </div>
                <div>
                    <div className='flex gap-4 mb-3'>
                        <p className='bg-green-100 text-[12px] px-4 py-2 text-green-700 rounded-xl'>{status}</p>
                        <p className='bg-blue-100 text-[12px] px-4 py-2  text-blue-700 rounded-xl'>{experience}+ Years Experience</p>
                    </div>
                    <h4 className='font-bold text-xl'>{name}</h4>
                    <p >Criminal Expert</p>
                    <p className='mb-3 text-[14px]'>&#174; License No: {license_no} </p>
                    <button className='btn w-full border border-blue-100 rounded-3xl hover:bg-blue-400 hover:text-white text-blue-600 transition-normal'>View Details</button>
                </div>
            </div>
        </Suspense>

    );
};

export default Lawyer;