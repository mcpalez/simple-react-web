import React from 'react';
import Hero from '../components/pages/uxui/Hero';
import Howto from '../components/pages/uxui/Howto';
import Inference from '../components/pages/uxui/Inference';
import Phases from '../components/pages/uxui/Phases';
import PreFooter from '../components/cta/ctaBottom';

function Uxui() {
    return (
        <main className='app-main uxui__page'>
            <Hero />
            <Inference />
            <Howto />
            <Phases />
            <PreFooter />
        </main>
    )
}

export default Uxui