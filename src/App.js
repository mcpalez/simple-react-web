import React from 'react';
import { NavigationBar } from './layout';
import { Footer } from './layout';
import './assets/styles/app.scss'

const App = () => {
  return (
    <div className='__app'>
      <NavigationBar />
      <Footer />
    </div>
  )
}

export default App;
