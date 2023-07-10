import React from 'react';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { ReactComponent as CrossMenuIcon } from '../assets/images/CrossMenuIcon.svg';
import { ReactComponent as HamburgerMenuIcon } from '../assets/images/HamburgerMenuIcon.svg';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { useState, useEffect } from 'react';
import Home from '../pages/Home';
import Development from '../pages/Development';
import Services from '../pages/Services';
import Uxui from '../pages/Uxui';
import About from '../pages/About';
import Resources from '../pages/Resources';
import ProjectStart from '../pages/ProjectStart';

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

  return (
      <BrowserRouter>
        <header className={`app-header ${ scrollDirection === "down" ? "app-header--hide" : "app-header--show"}`}>
			<Container>
				<nav className='navigation navbar--mini'>
					<a href='/'><Logo/></a>
					<div className='menu'>
						<div className='list'>
							<NavDropdown title="Services" id="basic-nav-dropdown">
								<NavDropdown.Item>
									<Link className='dropdown-link' to='/services/development-services'>Development services</Link>
									<Link className='dropdown-link' to='/services/ux-ui-services'>UX and UI services</Link>
									<Link className='dropdown-link' to='/services'>See all services</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<Link to='/about' className='nav-item'>About</Link>
							<Link to='/' className='nav-item'>Work</Link>
							<Link to='/' className='nav-item'>How to start?</Link>
							<Link to='/resources' className='nav-item'>Resources</Link>
						</div>
						<button className='burger-wrap' onClick={openingMenu}>
							<HamburgerMenuIcon/>
						</button>
					</div>
					<div className="list-side">
						<Link to='/' className='nav-item'>Contact us</Link>
						<Link to='/start-project' className='nav-item'><button className='button-primary-filled__navbar'>Start a project</button></Link>
					</div>
				</nav>
				<nav className='navigation navbar--wrapper' id='navbar--list'>
					<div className="menu">
						<div className="front">
							<a href='/'><Logo/></a>
							<button className='close-wrap' onClick={closingMenu}>
								<CrossMenuIcon/>
							</button>
						</div>
						<ul className='list'>
							<NavDropdown title="Services" id="basic-nav-dropdown">
								<NavDropdown.Item>
									<Link className='dropdown-link' to='/services/development-services' onClick={collapsePageChange}>Development services</Link>
									<Link className='dropdown-link' to='/services/ux-ui-services' onClick={collapsePageChange}>UX and UI services</Link>
									<Link className='dropdown-link' to='/services' onClick={collapsePageChange}>See all services</Link>
								</NavDropdown.Item>
							</NavDropdown>
							<li className="list-item"><Link to='/about' className='nav-item' onClick={collapsePageChange}>About</Link></li>
							<li className="list-item"><Link to='/' className='nav-item' onClick={collapsePageChange}>Work</Link></li>
							<li className="list-item"><Link to='/' className='nav-item' onClick={collapsePageChange}>How to start?</Link></li>
							<li className="list-item"><Link to='/resources' className='nav-item' onClick={collapsePageChange}>Resources</Link></li>
							<li className="list-item"><Link to='/' className='nav-item' onClick={collapsePageChange}>Contact</Link></li>
							<li className="list-item">
								<Link to='/start-project' className='nav-item' onClick={collapsePageChange}>
									<button className='button-primary-filled__navbar' onClick={collapsePageChange}>Start a project</button>
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</Container>
        </header>
        <Routes>
          	<Route path='/' element={<Home />}/>
		  	<Route path='services' element={<Services />}/>
			<Route path='services/development-services' element={<Development />}/>
			<Route path='services/ux-ui-services' element={<Uxui />}/>
			<Route path='about' element={<About />}/>
			<Route path='resources' element={<Resources />}/>
			<Route path='start-project' element={<ProjectStart />}/>
        </Routes>
      </BrowserRouter>
  )
}

export default NavigationBar

function openingMenu() {
	const referenceElement = document.getElementById('navbar--list');
	referenceElement.classList.add('navbar--opened');
	document.body.classList.add('mobile-menu-open');
}

function closingMenu() {
	const referenceElement = document.getElementById('navbar--list');
	referenceElement.classList.remove('navbar--opened');
	document.body.classList.remove('mobile-menu-open');
}

function collapsePageChange() {
	const refElNav = document.getElementById('navbar--list');
	const refElBod = document.body;
	refElNav.classList.remove('navbar--opened');
	refElBod.classList.remove('mobile-menu-open');
}