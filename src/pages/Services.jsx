import React from 'react';
import Hero from '../components/pages/services/Hero';
import WeDo from '../components/pages/services/WeDo'
import '../assets/styles/services/_services.scss'


const Services = () => {
    return (
        <main className='services__page'>
            <Hero/>
            <WeDo/>
        </main>
    )
}

export default Services