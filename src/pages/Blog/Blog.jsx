import React from 'react';

const Blog = ({ data }) => {
    return (
        <div className='border-2 border-gray-200 bg-gray-100 rounded-xl p-8 mb-6'>
            <h1 className='text-xl font-bold border-b-2 border-dashed pb-3 border-gray-400 mb-4'>{data.question}</h1>
            <p className='text-blue-600'>Answer</p>
            <p className='border-b-2 border-dashed pb-3 border-gray-400 mb-2 font-medium'>{data.answer}</p>
            <p className='text-[12px]'>📆 {data.date}</p>
        </div>
    );
};

export default Blog;