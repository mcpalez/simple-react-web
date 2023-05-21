import React from 'react';
import { NavigationBar } from './layout';
import { Footer } from './layout';
import './assets/styles/_variables.scss'

const App = () => {
  return (
    <div className='app-main'>
      <NavigationBar />
      <Footer />
    </div>
  )
}

export default App;
