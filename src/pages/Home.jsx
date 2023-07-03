import React from 'react';
import Hero from '../components/pages/home/Hero';
import Tabs from '../components/pages/home/Tabs';
import Promo from '../components/pages/home/Promo';
import Choose from '../components/pages/home/Choose';
import Dev from '../components/pages/home/Dev';
import CtaBottom from '../components/cta/CtaBottom';



const Home = () => {
    return (
        <main className='app-main home__page'>  
            <Hero/>
            <Tabs/>
            <Choose/>
            <Dev/>
            <Promo/>
            <CtaBottom/>
        </main>
    )
}

export default Home