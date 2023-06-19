import React from 'react';
import Hero from '../components/pages/services/Hero';
import WeDo from '../components/pages/services/WeDo';
import Offer from '../components/pages/services/Offer'
import Capabilities from '../components/pages/services/Capabilities';
import PreFooter from '../components/cta/ctaBottom';


const Services = () => {
    return (
        <main className='app-main services__page'>
            <Hero/>
            <WeDo/>
            <Offer/>
            <Capabilities/>
            <PreFooter/>
        </main>
    )
}

export default Services