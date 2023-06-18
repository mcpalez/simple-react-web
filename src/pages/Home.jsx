import React from 'react';
import Hero from '../components/sections/home/Hero';
import Tabs from '../components/sections/home/Tabs';
import Promo from '../components/sections/home/Promo';


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