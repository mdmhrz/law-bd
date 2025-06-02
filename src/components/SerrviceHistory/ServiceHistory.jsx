import React from 'react';

const ServiceHistory = () => {
    return (
        <div className='mb-20'>
            <div className='text-center p-10'>
                <h1 className='font-bold text-2xl'>We Provide Best Law Services</h1>
                <p className=''>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4  gap-8'>
                <div className='bg-[#e9e9e9] rounded-xl p-4'>
                    <img src="/src/assets/success-doctor.png" alt="" />
                    <h1 className='text-4xl font-bold mt-2'>199+</h1>
                    <p>Total Lawyer</p>
                </div>
                <div className='bg-[#e9e9e9] rounded-xl p-4'>
                    <img src="/src/assets/success-review.png" alt="" />
                    <h1 className='text-4xl font-bold mt-2'  >467+</h1>
                    <p>Total Reviews</p>
                </div>
                <div className='bg-[#e9e9e9] rounded-xl p-4'>
                    <img src="/src/assets/success-patients.png" alt="" />
                    <h1 className='text-4xl font-bold mt-2'>1900+</h1>
                    <p>Cases Initiated</p>
                </div>
                <div className='bg-[#e9e9e9] rounded-xl p-4'>
                    <img src="/src/assets/success-staffs.png" alt="" />
                    <h1 className='text-4xl font-bold mt-2'>300+</h1>
                    <p>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceHistory;