import React from 'react';
import {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../assets/Styles/Layout/navigationbar.scss';
import Home from '../pages/Home';
import {ReactComponent as CrossMenuIcon} from '../assets/Images/CrossMenuIcon.svg';
import {ReactComponent as HamburgerMenuIcon} from '../assets/Images/HamburgerMenuIcon.svg';

function NavigationBar() {

  const scrollDirection = useScrollDirection();
  function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);
  
    useEffect(() => {
      let lastScrollY = window.pageYOffset;
  
      const updateScrollDirection = () => {
        const scrollY = window.pageYOffset;
        const direction = scrollY > lastScrollY ? "down" : "up";
        if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
          setScrollDirection(direction);
        }
        lastScrollY = scrollY > 0 ? scrollY : 0;
      };
      window.addEventListener("scroll", updateScrollDirection); // add event listener
      return () => {
        window.removeEventListener("scroll", updateScrollDirection); // clean up
      }
    }, [scrollDirection]);
  
    return scrollDirection;
  };

  const [isActive, setIsActive] = useState(false);
  const handleClick = event => {
    setIsActive(current => !current);
    document.body.classList.toggle('mobile-menu-open');
  };

  return (
      <Router>
        <header className={`app-header ${ scrollDirection === "down" ? "app-header--hide" : "app-header--show"}`}>
			<Navbar expand="lg">
			<Container className='navbar-container'>
				<Navbar.Brand href="#home" className='logo-navbar'>
				<svg viewBox="0 0 110 38" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_128_1110)">
				<path d="M20.5851 2.05352L17.9092 7.5762C15.2848 6.36759 13.3107 5.80245 11.4222 5.80245C9.4082 5.80245 8.79202 6.48509 8.79202 7.48108C8.79202 8.32599 9.32833 8.89112 10.9715 9.85913L15.7355 12.8023C19.1873 14.8558 21.2013 17.1108 21.2013 21.0612C21.2013 26.4999 17.4186 29.4543 10.7204 29.4543C6.9497 29.4592 3.24697 28.4697 0 26.5894L2.8527 20.994C5.60841 22.6447 8.31847 23.5679 10.9487 23.5679C13.2308 23.5679 14.4803 22.8069 14.4803 21.3297C14.4803 20.0428 13.3392 19.2762 11.7702 18.3082L7.41702 15.5944C3.65716 13.429 2.09388 10.7152 2.09388 7.53144C2.09388 2.94319 5.1748 0 11.2568 0C14.4765 0.053276 17.651 0.752116 20.5851 2.05352Z" fill="white"/>
				<path d="M29.8677 0.604248V28.8052H23.666V0.604248H29.8677Z" fill="white"/>
				<path d="M39.4242 0.643433V6.79839H32.7661V0.643433H39.4242ZM33.0171 28.8052V10.1948H39.2189V28.8052H33.0171Z" fill="white"/>
				<path d="M61.8636 17.2843V28.8053H55.7018V18.9797C55.7018 16.182 54.5093 14.9454 52.2044 14.9454C50.1105 14.9454 48.5529 16.1596 48.5529 19.4609V28.8053H42.3455V10.1949H48.4274V12.9926H48.4959C49.1269 11.9314 50.0369 11.0558 51.1308 10.4574C52.2248 9.85893 53.4625 9.55957 54.7147 9.59056C58.9025 9.59056 61.8636 11.9686 61.8636 17.2843Z" fill="white"/>
				<path d="M67.1069 36.5437L68.1338 30.8644C70.3101 31.4199 72.544 31.7296 74.792 31.7876C77.9129 31.7876 79.2708 30.7804 79.2708 27.5183V26.2985H79.1852C78.0783 27.7477 76.1499 29.0962 72.9435 29.0962C67.9741 29.0962 63.986 25.8733 63.986 19.4273C63.986 12.9814 68.054 9.55701 72.9834 9.55701C76.0643 9.55701 77.9985 10.8048 79.1852 12.696H79.2708V10.1949H85.4725V28.8053C85.4326 34.6525 81.8154 37.4894 75.2428 37.4894C72.5065 37.4265 69.7824 37.1099 67.1069 36.5437ZM79.0882 19.5001C79.0882 18.3618 78.6271 17.2702 77.8065 16.4654C76.9858 15.6605 75.8728 15.2084 74.7122 15.2084C73.5516 15.2084 72.4385 15.6605 71.6178 16.4654C70.7972 17.2702 70.3361 18.3618 70.3361 19.5001C70.3361 20.6383 70.7972 21.7299 71.6178 22.5348C72.4385 23.3396 73.5516 23.7918 74.7122 23.7918C75.8728 23.7918 76.9858 23.3396 77.8065 22.5348C78.6271 21.7299 79.0882 20.6383 79.0882 19.5001Z" fill="white"/>
				<path d="M95.0234 0.643433V6.79839H88.3652V0.643433H95.0234ZM88.6162 28.8052V10.1948H94.818V28.8052H88.6162Z" fill="white"/>
				<path d="M110 15.2698H106.12V20.8653C106.12 22.5998 106.571 23.1594 108.174 23.1594H108.87V28.8052H106.286C102.423 28.8052 99.9185 26.9922 99.9185 22.5215V15.2475H96.2214V10.1948H99.9185V2.7417H106.12V10.1948H110.023L110 15.2698Z" fill="white"/>
				</g>
				<defs>
				<clipPath id="clip0_128_1110">
				<rect width="133" height="45" fill="white"/>
				</clipPath>
				</defs>
				</svg>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className={isActive ? 'active-hamburger' : ''} onClick={handleClick}>
					<HamburgerMenuIcon className={isActive ? 'hidden-hamburger-menu' : 'shown-hamburger-menu'} />
					<CrossMenuIcon className={isActive ? 'shown-cross-menu' : 'hidden-cross-menu'} />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<div className='menu-centered-desktop'>
						<NavDropdown title="Services" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								<Link to='/'>Web development</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<Link className='nav-item' to='/'>About</Link>
						<Link className='nav-item' to='/'>Work</Link>
						<Link className='nav-item' to='/'>Insights</Link>
						<Link className='nav-item' to='/'>How to start?</Link>
						<Link className='nav-item' to='/'>Resources</Link>
						<Link className='nav-item only-on--mobile' to='/'>Contact</Link>
					</div>
				</Nav>
				<div className='menu-right-desktop'>
					<Link className='nav-item only-on--desktop' to='/'>Contact us</Link>
					<Link className='nav-item button-item-navbar' to='/'>
						<button className='button-primary-filled__navbar'>Start a project</button>
					</Link>
				</div>
				</Navbar.Collapse>
			</Container>
			</Navbar>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
  )
}

export default NavigationBar