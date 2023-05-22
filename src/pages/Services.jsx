import React from 'react';
import Hero from '../components/services/Hero';
import WeDo from '../components/services/WeDo'
import '../assets/styles/pages/services/_services.scss'


const Services = () => {
    return (
        <main className='services__page'>
            <Hero/>
            <WeDo/>
        </main>
    )
}

export default Services