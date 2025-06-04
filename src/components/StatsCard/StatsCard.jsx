import React from 'react';
import CountUp from 'react-countup';
import lawyersSymbol from "/src/assets/success-doctor.png";
import reviews from "/src/assets/success-review.png";
import caseSymbol from "/src/assets/success-patients.png";
import totalStaff from "/src/assets/success-staffs.png";




const stats = [
    {
        url: lawyersSymbol,
        label: 'Total Lawyer',
        value: 199
    },
    {
        url: reviews,
        label: 'Total Reviews',
        value: 467
    },
    {
        url: caseSymbol,
        label: 'Cases Initiated',
        value: 1900
    },
    {
        url: totalStaff,
        label: 'Total Staffs',
        value: 300
    },
];

const StatsCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-10 ">
            {stats.map((stat, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-md shadow text-center border-2 border-gray-200">
                    <img className='mb-2 mx-auto' src={stat.url} alt="" />
                    <h1 className="text-4xl font-bold text-black">
                        <CountUp end={stat.value} duration={8} />+
                    </h1>
                    <p className="text-sm mt-1 text-gray-700">{stat.label}</p>

                </div>

            ))}
        </div>
    );
};

export default StatsCard;
