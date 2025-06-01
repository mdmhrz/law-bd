import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-4 md:px-10 text-gray-800 gap-10">
            <img
                src="/src/assets/404.png" // Place your image here
                alt="Error cat"
                className="w-60 md:w-120 lg:w-100 xl:w-[700px] mb-6 md:mb-0"
            />
            <div className="md:ml-10 text-center md:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-600 mb-8">Oops.</h1>
                <p className="text-lg font-semibold text-red-500 mb-2">
                    We can’t find the page you’re looking for.
                </p>
                <p className="text-gray-600 mb-4 max-w-md">
                    It may have expired, or there could be a typo. Maybe you can find what you need from our homepage.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-primary"
                >
                    Return to Homepage
                </button>
            </div>
        </div>
    );
};

export default ErrorPage;
