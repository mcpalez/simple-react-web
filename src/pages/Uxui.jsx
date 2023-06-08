import React from 'react';
import Hero from '../components/sections/uxui/Hero';
import Howto from '../components/sections/uxui/Howto';
import Inference from '../components/sections/uxui/Inference';
import Phases from '../components/sections/uxui/Phases';
import PreFooter from '../components/sections/prefooter/PreFooter';

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