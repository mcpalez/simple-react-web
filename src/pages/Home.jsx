import React from 'react';
import Hero from '../components/sections/home/Hero';
import Tabs from '../components/sections/home/Tabs';


const Home = () => {
    return (
        <main className='app-main home__page'>  
            <Hero/>
            <Tabs/>
        </main>
    )
}

export default Home