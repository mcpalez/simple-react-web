import React from 'react';
import Hero from '../components/pages/about/Hero';
import Info from '../components/pages/about/Info';
import Values from '../components/pages/about/Values';
import CtaBottom from '../components/cta/CtaBottom';

function About() {
  return (
    <main className='app-main about__page'>
        <Hero/>
        <Values/>
        <Info/>
        <CtaBottom/>
    </main>
  )
}

export default About