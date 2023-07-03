import React from 'react';
import Hero from '../components/pages/services/Hero';
import WeDo from '../components/pages/services/WeDo';
import Offer from '../components/pages/services/Offer'
import Capabilities from '../components/pages/services/Capabilities';
import CtaBottom from '../components/cta/CtaBottom';


const Services = () => {
    return (
        <main className='app-main services__page'>
            <Hero/>
            <WeDo/>
            <Offer/>
            <Capabilities/>
            <CtaBottom/>
        </main>
    )
}

export default Services