import React from 'react';
import Hero from '../components/sections/uxui/Hero';
import Howto from '../components/sections/uxui/Howto';
import Inference from '../components/sections/uxui/Inference';

function Uxui() {
    return (
        <main className='app-main uxui__page'>
            <Hero />
            <Inference />
            <Howto />
        </main>
    )
}

export default Uxui