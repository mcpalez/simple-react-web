import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../assets/Styles/Layout/navigationbar.scss';
import Home from '../pages/Home';
import { ReactComponent as CrossMenuIcon } from '../assets/Images/CrossMenuIcon.svg';
import { ReactComponent as HamburgerMenuIcon } from '../assets/Images/HamburgerMenuIcon.svg';
import { ReactComponent as Logo } from '../assets/Images/Logo.svg';
import 'bootstrap/scss/bootstrap.scss';

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

  return (
      <Router>
        <header className={`app-header ${ scrollDirection === "down" ? "app-header--hide" : "app-header--show"}`}>
			<Navbar expand="lg">
			<Container className='navbar-container'>
				<Navbar.Brand href="#home" className='logo-navbar'>
					<Logo />
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
						<Link className='nav-item button-item-navbar only-on--mobile' to='/'>
							<button className='button-primary-filled__navbar'>Start a project</button>
						</Link>
					</div>
				</Nav>
				<div className='menu-right-desktop only-on--desktop'>
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