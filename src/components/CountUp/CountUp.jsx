import React from 'react';
import CountUp from 'react-countup';

const stats = [
    { icon: '👨‍⚖️', label: 'Total Lawyer', value: 199 },
    { icon: '⭐', label: 'Total Reviews', value: 467 },
    { icon: '🔨', label: 'Cases Initiated', value: 1900 },
    { icon: '👥', label: 'Total Staffs', value: 300 },
];

const StatsCard = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {stats.map((stat, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded shadow text-center">
                    <div className="text-4xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold text-black">
                        <CountUp end={stat.value} duration={2} />+
                    </div>
                    <div className="text-sm mt-1 text-gray-700">{stat.label}</div>
                </div>
            ))}
        </div>
    );
};

export default StatsCard;
