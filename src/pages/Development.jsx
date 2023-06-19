import React from 'react';
import Features from '../components/pages/development/Features';
import Hero from '../components/pages/development/Hero';
import Goals from '../components/pages/development/Goals';
import PreFooter from '../components/cta/ctaBottom';

const Development = () => {
  return (
    <main className='app-main development__page'>
        <Hero />
        <Features />
        <Goals />
        <PreFooter />
    </main>
  )
}

export default Development