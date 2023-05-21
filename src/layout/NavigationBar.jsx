import React from 'react';
import Home from '../pages/Home';
import Development from '../pages/Development';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ReactComponent as CrossMenuIcon } from '../assets/images/CrossMenuIcon.svg';
import { ReactComponent as HamburgerMenuIcon } from '../assets/images/HamburgerMenuIcon.svg';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { useState, useEffect, useRef } from 'react';
import '../assets/styles/layout/navigationbar.scss';

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
		navButton.current.classList.toggle("collapsed");
		linksContainerRef.current.classList.remove("show");
	};

  return (
      <Router>
        <header className={`app-header ${ scrollDirection === "down" ? "app-header--hide" : "app-header--show"}`}>
			<Navbar expand="lg">
			<Container className='navbar-container'>
				<Navbar.Brand href="/" className='logo-navbar' onClick={()=>{ collapseNav(); }}>
					<Logo />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className={isActive ? 'active-hamburger' : ''} onClick={handleClick} ref={navButton}>
					<HamburgerMenuIcon className={isActive ? 'hidden-hamburger-menu' : 'shown-hamburger-menu'} />
					<CrossMenuIcon className={isActive ? 'shown-cross-menu' : 'hidden-cross-menu'} />
				</Navbar.Toggle>
				<Navbar.Collapse id="basic-navbar-nav" ref={linksContainerRef}>
				<Nav>
					<div className='menu-centered-desktop'>
						<NavDropdown title="Services" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								<Link to='/services/development' onClick={()=>{ collapseNav(); }}>Development services</Link>
								<Link to='/'>UX and UI services</Link>
							</NavDropdown.Item>
						</NavDropdown>
						<Link className='nav-item' to='/'>About</Link>
						<Link className='nav-item' to='/'>Work</Link>
						<Link className='nav-item' to='/'>Insights</Link>
						<Link className='nav-item' to='/'>How to start?</Link>
						<Link className='nav-item' to='/'>Resources</Link>
						<Link className='nav-item desktop--hidden' to='/'>Contact</Link>
						<Link className='nav-item button-item-navbar desktop--hidden' to='/'>
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
		  <Route path='/services/development' element={<Development />}/>
        </Routes>
      </Router>
  )
}

export default NavigationBar