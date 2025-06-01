import React from 'react';

const Banner = () => {

    const bannerStyle = {
        backgroundColor: 'black',
        backgroundImage: "linear-gradient(to bottom right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.538)), url('/src/assets/banner-img-1.png'",
        backgroundPosition: 'center',
        backgroudSize: 'cover',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '550px',
        textAlign: 'center',
        borderRadius: '12px',


    }

    return (
        <div style={bannerStyle} className='p-10 md:p-14 xl:p-[300px] mb-10'>
            <h1 className='text-4xl  xl:text-5xl font-bold mb-5 leading-14'>It avoids subjective claims or exaggeration that might raise red flags legally</h1>
            <p>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        </div>
    );
};

export default Banner;