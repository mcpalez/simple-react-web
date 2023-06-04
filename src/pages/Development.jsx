import React from 'react';
import Features from '../components/sections/development/Features';
import Hero from '../components/sections/development/Hero';
import Goals from '../components/sections/development/Goals';
import PreFooter from '../components/sections/prefooter/PreFooter';

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