import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const LawyerDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const lawyerId = parseInt(id);
    const data = useLoaderData();
    const specificLawyer = data.find(lawyer => lawyer.id === lawyerId);

    const { experience, name, expertise, license_no, availability, fee } = specificLawyer;
    console.log(specificLawyer);

    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='bg-[#f1f1f1] p-10 rounded-xl text-center mb-10'>
                <h1 className='text-2xl font-bold'>Lawyer's Profile Details</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, eaque! Harum esse cum voluptatibus qui!</p>
            </div>
            <div className='flex border-2 border-gray-200 rounded-xl p-4 gap-4 mb-10'>
                <div className='bg-base-300 p-5 rounded-md flex items-center justify-center'>
                    <img className='w-[140px]' src="https://elements-resized.envatousercontent.com/envato-dam-assets-production/EVA/TRX/2c/91/92/27/eb/v1_E10/E108R132.jpg?w=500&cf_fit=scale-down&mark-alpha=18&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark4.png&q=85&format=auto&s=32c5fa37d8c48c13807139bce985f13ef2c519fff51eca3cb5ccd359e8699ffd" alt="" />
                </div>
                <div>
                    <div className='flex gap-4 mb-3'>
                        <p className='bg-blue-100 text-[12px] px-4 py-2  text-blue-700 rounded-xl'>{experience}+ Years Experience</p>
                    </div>
                    <h4 className='font-bold text-xl'>{name}</h4>
                    <div className='flex gap-8 items-center mb-2'>
                        <p >{expertise}</p>
                        <p className='mb-3 text-[14px]'>&#174; License No: {license_no} </p>
                    </div>
                    <div className='flex mb-2'>
                        <p className='mr-4 font-medium'>Availibility</p>
                        <div>
                            {
                                availability.map((day, index) => <button className='bg-orange-100 text-orange-400 rounded-md px-2 mr-4' key={index}>{day}</button>)
                            }
                        </div>
                    </div>
                    <p className='font-medium'>Consultation Fee: <span className='ml-4 text-green-600 font-semibold'>Taka:{fee} </span></p>
                </div>
            </div>
        </div>

    );
};

export default LawyerDetails;