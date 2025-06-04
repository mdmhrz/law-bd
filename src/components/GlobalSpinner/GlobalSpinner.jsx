import React from 'react';

const GlobalSpinner = () => {
    return (
        <div className="flex items-center justify-center min-h-40">
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default GlobalSpinner;