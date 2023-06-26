import React from 'react';
import Hero from '../components/pages/about/Hero';
import Values from '../components/pages/about/Values';

function About() {
  return (
    <main className='app-main about__page'>
        <Hero/>
        <Values/>
    </main>
  )
}

export default About