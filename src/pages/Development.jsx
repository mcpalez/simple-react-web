import React from 'react';
import Features from '../components/pages/development/Features';
import Hero from '../components/pages/development/Hero';
import Goals from '../components/pages/development/Goals';
import CtaBottom from '../components/cta/CtaBottom';

const Development = () => {
  return (
    <main className='app-main development__page'>
        <Hero />
        <Features />
        <Goals />
        <CtaBottom />
    </main>
  )
}

export default Development