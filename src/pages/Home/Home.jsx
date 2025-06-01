import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import BestLawyers from '../../components/BestLawyers/BestLawyers';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()

    return (
        <div className='max-w-11/12 mx-auto'>
            <Banner></Banner>
            <Suspense>
                <BestLawyers data={data}></BestLawyers>
            </Suspense>
        </div>
    );
};

export default Home;