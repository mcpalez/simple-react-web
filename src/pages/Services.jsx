import React from 'react';
import Hero from '../components/sections/services/Hero';
import WeDo from '../components/sections/services/WeDo';
import Offer from '../components/sections/services/Offer'
import Capabilities from '../components/sections/services/Capabilities';


const Services = () => {
    return (
        <main className='app-main services__page'>
            <Hero/>
            <WeDo/>
            <Offer/>
            <Capabilities/>
        </main>
    )
}

export default Services