import React from 'react';
import Hero from '../components/pages/home/Hero';
import Tabs from '../components/pages/home/Tabs';
import Promo from '../components/pages/home/Promo';


const Home = () => {
    return (
        <main className='app-main home__page'>  
            <Hero/>
            <Tabs/>
            <Promo/>
        </main>
    )
}

export default Home