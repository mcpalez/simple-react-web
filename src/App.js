import React from 'react';
import { NavigationBar } from './layout';
import { Footer } from './layout';
import './assets/Styles/_variables.scss'

const App = () => {
  return (
    <div className='App'>
      <NavigationBar />
      <Footer />
    </div>
  )
}

export default App;
