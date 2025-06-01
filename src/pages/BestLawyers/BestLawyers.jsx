import React from 'react';
import Lawyer from '../Lawyer/Lawyer';

const BestLawyers = ({ data }) => {
    // console.log(data);
    return (
        <div>
            <div className='text-center px-20 mb-8'>
                <h1 className='text-2xl font-bold'>Our Best Lawyers</h1>
                <p className='text-[14px]'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                {
                    data.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer} ></Lawyer>)
                }
            </div>

        </div>
    );
};

export default BestLawyers;