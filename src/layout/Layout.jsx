import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

function Layout() {
  return (
    <div className='__app'>
        <NavigationBar/>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout