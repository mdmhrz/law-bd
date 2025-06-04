import React, { Suspense } from 'react';
import Banner from '../../components/Banner/Banner';
import BestLawyers from '../BestLawyers/BestLawyers';
import { useLoaderData } from 'react-router';
import StatsCard from '../../components/StatsCard/StatsCard';
import ServiceHistory from '../../components/SerrviceHistory/ServiceHistory';
import { Helmet } from 'react-helmet-async';
import GlobalSpinner from '../../components/GlobalSpinner/GlobalSpinner';


const Home = () => {

    const data = useLoaderData()

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Law.BD</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className='max-w-11/12 mx-auto'>
                <Banner></Banner>
                <Suspense fallback={<GlobalSpinner></GlobalSpinner>}>
                    <BestLawyers data={data}></BestLawyers>
                </Suspense>
                <ServiceHistory></ServiceHistory>

            </div>
        </>
    );
};

export default Home;