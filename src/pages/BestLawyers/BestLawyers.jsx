import React, { useState } from 'react';
import Lawyer from '../Lawyer/Lawyer';

const BestLawyers = ({ data }) => {
    // console.log(data);

    const [showAll, setShowAll] = useState(false);
    const visibleLawyers = showAll ? data : data.slice(0, 6);

    return (
        <div className='mb-20'>
            <div className='text-center px-5 md:px-20 mb-8'>
                <h1 className='text-2xl font-bold'>Our Best Lawyers</h1>
                <p className='text-[14px]'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6 lg:gap-10'>
                {
                    visibleLawyers.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer} ></Lawyer>)
                }
            </div>

            {!showAll && (
                <div className="text-center mt-6">
                    <button
                        onClick={() => setShowAll(true)}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800"
                    >
                        Show All Lawyers
                    </button>
                </div>
            )}

        </div>
    );
};

export default BestLawyers;