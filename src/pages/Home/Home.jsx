import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import BestLawyers from '../BestLawyers/BestLawyers';
import { useLoaderData } from 'react-router';
import ServiceHistory from '../../components/SerrviceHistory/ServiceHistory';
import CountUp from 'react-countup';

const Home = () => {

    const data = useLoaderData()

    return (
        <div className='max-w-11/12 mx-auto'>
            <Banner></Banner>
            <Suspense>
                <BestLawyers data={data}></BestLawyers>
            </Suspense>
            {/* <ServiceHistory></ServiceHistory> */}
            <CountUp></CountUp>
        </div>
    );
};

export default Home;