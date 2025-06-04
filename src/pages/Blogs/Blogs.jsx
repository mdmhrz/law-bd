import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const data = useLoaderData();

    return (
        <div className='max-w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-3xl mb-6'>Blogs</h1>
            <div>
                {
                    data.map((blog, index) => <Blog key={index} data={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;