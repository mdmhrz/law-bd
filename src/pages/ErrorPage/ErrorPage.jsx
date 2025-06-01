import React from 'react';
// import { Button } from '@/components/ui/button'; // shadcn/ui or your button component
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 px-4 text-center">
            <img
                src="https://illustrations.popsy.co/gray/error.svg"
                alt="Error Illustration"
                className="max-w-xs md:max-w-md mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Something went wrong</h1>
            <p className="text-gray-600 text-lg mb-6">
                We couldn’t find the page you were looking for. It might have been removed or temporarily unavailable.
            </p>
            {/* <Button >
                Go back home
            </Button> */}
            <button onClick={() => navigate('/')} className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-2xl shadow-md">Go back home</button>
        </div>
    );
};

export default ErrorPage;
