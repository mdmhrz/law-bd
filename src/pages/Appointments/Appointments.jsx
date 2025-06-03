import React from 'react';

const Appointments = ({ lawyersData, handleCancelAppointments }) => {
    // console.log(lawyersData);
    const { name, expertise, fee, id } = lawyersData;
    return (
        <div className='border-2 border-gray-200 rounded-xl p-5 mb-8 shadow-md'>
            <div className='flex justify-between mb-4'>
                <div>
                    <h2 className='font-bold text-xl'>{name}</h2>
                    <p>{expertise}</p>
                </div>
                <div>
                    <p className='bg-green-200 py-1 px-4 rounded-2xl text-green-800 font-medium'>Appointment Fee: BDT {fee}</p>
                </div>
            </div>
            <button onClick={() => handleCancelAppointments(id, name)} className='btn btn-error btn-outline rounded-3xl w-full'>Cancel Appointment</button>
        </div>
    );
};

export default Appointments;