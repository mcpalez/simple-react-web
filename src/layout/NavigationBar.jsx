import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as CrossMenuIcon } from '../assets/images/CrossMenuIcon.svg';
import { ReactComponent as HamburgerMenuIcon } from '../assets/images/HamburgerMenuIcon.svg';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { useState, useEffect, useRef } from 'react';
import Home from '../pages/Home';
import Development from '../pages/Development';
import Services from '../pages/Services';
import Uxui from '../pages/Uxui';

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
		document.body.classList.toggle('mobile-menu-open');
	};

	const navButton = useRef(null);
	const linksContainerRef = useRef(null);
	function collapseNav() {
		navButton.current.classList.add("collapsed");
		linksContainerRef.current.classList.remove("show");
	};

  return (
      <Router>
        <header className={`app-header ${ scrollDirection === "down" ? "app-header--hide" : "app-header--show"}`}>
			<Navbar expand="lg">
			<Container className='navbar-container'>
				<Navbar.Brand href="/" className='logo-navbar' onClick={collapseNav}>
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className={isActive ? 'active-hamburger' : ''} onClick={handleClick} ref={navButton}>
					<HamburgerMenuIcon className={isActive ? 'hidden-hamburger-menu' : 'shown-hamburger-menu'}/>
					<CrossMenuIcon className={isActive ? 'shown-cross-menu' : 'hidden-cross-menu'}/>
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav" ref={linksContainerRef}>
				<Nav>
					<div className='menu-centered-desktop'>
						<NavDropdown title="Services" id="basic-nav-dropdown">
							<NavDropdown.Item>
								<Link className='dropdown-link' to='/services/development-services' onClick={()=>{ collapseNav(); }} preventScrollReset={true}>Development services</Link>
								<Link className='dropdown-link' to='/services/ux-ui-services' onClick={()=>{ collapseNav(); }} preventScrollReset={true}>UX and UI services</Link>
								<Link className='dropdown-link' to='/services' onClick={()=>{ collapseNav(); }} preventScrollReset={true}>See all services</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<Link className='nav-item' href='/services/development'>About</Link>
						<Link className='nav-item' onClick={()=>{ collapseNav(); }}>Work</Link>
						<Link className='nav-item' onClick={()=>{ collapseNav(); }}>Insights</Link>
						<Link className='nav-item' onClick={()=>{ collapseNav(); }}>How to start?</Link>
						<Link to='/' className='nav-item' onClick={()=>{ collapseNav(); }}>Resources</Link>
						<Link className='nav-item desktop--hidden' onClick={()=>{ collapseNav(); }}>Contact</Link>
						<Link className='nav-item button-item-navbar desktop--hidden' onClick={()=>{ collapseNav(); }}>
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
		  	<Route path='services' element={<Services />}></Route>
			<Route path='services/development-services' element={<Development />}></Route>
			<Route path='services/development-services' element={<Development />}></Route>
			<Route path='services/ux-ui-services' element={<Uxui />}></Route>
        </Routes>
      </Router>
  )
}

export default NavigationBar