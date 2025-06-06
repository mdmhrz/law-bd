import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { useNavigate } from 'react-router';
import errorImage from '/src/assets/404-not-found.png'


const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white px-4 md:px-10 text-gray-800 gap-10">
                <img
                    src={errorImage}
                    className="w-60 md:w-80 lg:w-90 xl:w-100 mb-6 md:mb-0"
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
                        className="btn btn-outline bg-green-600 border-none rounded-4xl text-white hover:bg-green-700 transition-all"
                    >
                        Return to Homepage
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
