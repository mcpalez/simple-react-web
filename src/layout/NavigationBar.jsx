import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { ReactComponent as CrossMenuIcon } from '../assets/images/CrossMenuIcon.svg';
import { ReactComponent as HamburgerMenuIcon } from '../assets/images/HamburgerMenuIcon.svg';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { useState, useEffect, useRef } from 'react';
import Home from '../pages/Home';
import Development from '../pages/Development';
import Services from '../pages/Services';
import Uxui from '../pages/Uxui';
import '../helpers/navHelper';

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
	const handleClick = () => {
		setIsActive(current => !current);
		//document.body.classList.toggle('mobile-menu-open');
	};

	// const navButton = useRef(null);
	// const linksContainerRef = useRef(null);
	// function collapseNav() {
	// 	navButton.current.classList.add("collapsed");
	// 	linksContainerRef.current.classList.remove("show");
	// };

  return (
      <BrowserRouter>
        <header className={`app-header ${ scrollDirection === "down" ? "app-header--hide" : "app-header--show"}`}>
			<Navbar expand="lg">
			<Container className='navbar-container'>
				<Navbar.Brand href="/" className='logo-navbar'>
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className={isActive ? 'active-hamburger' : ''} onClick={preventScroll}>
					<HamburgerMenuIcon id='hamburger-menu-09332' className={isActive ? 'hidden-hamburger-menu' : 'shown-hamburger-menu'}/>
					<CrossMenuIcon id='cross-menu-09333' className={isActive ? 'shown-cross-menu' : 'hidden-cross-menu'}/>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav">
				<Nav>
					<div className='menu-centered-desktop'>
						<NavDropdown title="Services" id="basic-nav-dropdown">
							<NavDropdown.Item>
								<Link className='dropdown-link' to='/services/development-services'>Development services</Link>
								<Link className='dropdown-link' to='/services/ux-ui-services'>UX and UI services</Link>
								<Link className='dropdown-link' to='/services'>See all services</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<Link to='/' className='nav-item' onClick={collapsingMenu}>About</Link>
						<Link to='/' className='nav-item'>Work</Link>
						<Link to='/' className='nav-item'>Insights</Link>
						<Link to='/' className='nav-item'>How to start?</Link>
						<Link to='/' className='nav-item'>Resources</Link>
						<Link className='nav-item desktop--hidden'>Contact</Link>
						<Link className='nav-item button-item-navbar desktop--hidden'>
							<button className='button-primary-filled__navbar'>Start a project</button>
						</Link>
					</div>
				</Nav>
				<div className='menu-right-desktop mobile--hidden'>
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
		  	<Route path='services' element={<Services />}/>
			<Route path='services/development-services' element={<Development />}/>
			<Route path='services/development-services' element={<Development />}/>
			<Route path='services/ux-ui-services' element={<Uxui />}/>
        </Routes>
      </BrowserRouter>
  )
}

export function preventScroll(myElement, show) {
    const element = document.getElementById("basic-navbar-nav");
    const body = document.body;

    if (!element.classList.contains("show")) {
        body.classList.add("mobile-menu-open");
    } else {
        body.classList.remove("mobile-menu-open")
    }
}

export function collapsingMenu() {
    const elementTrigger = document.getElementById("basic-navbar-nav");
    elementTrigger.classList.remove("show");
	document.body.classList.remove("mobile-menu-open");
}

export default NavigationBar