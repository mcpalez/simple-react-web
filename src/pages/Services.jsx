import React from 'react';
import Hero from '../components/pages/services/Hero';
import WeDo from '../components/pages/services/WeDo';
import Offer from '../components/pages/services/Offer'


const Services = () => {
    return (
        <main className='app-main services__page'>
            <Hero/>
            <WeDo/>
            <Offer/>
        </main>
    )
}

export default Services