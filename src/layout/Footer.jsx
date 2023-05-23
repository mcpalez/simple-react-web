import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import { ReactComponent as Logo } from '../assets/images/Logo.svg';
import { ReactComponent as MessengerIcon } from '../assets/images/footer/Vector-1.svg';
import { ReactComponent as DribbbleIcon } from '../assets/images/footer/Vector-2.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/footer/Vector-3.svg';
import { ReactComponent as InstagramIcon } from '../assets/images/footer/Vector-4.svg';
import { ReactComponent as FacebookIcon } from '../assets/images/footer/Vector.svg';


function Footer() {
    return (
       <footer className='app-footer'>
            <Container className='container-footer__container'>
                <Row className='row-footer__body'>
                    <Col sm={12} className='col-footer col-footer__accordion desktop--hidden'>
                        <Accordion className='accordion-footer'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Pages</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Solutions</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Brand</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Rules & Terms</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Resources</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col md={5} className='col-footer col-footer__info'>
                        <div className="content-footer">
                            <Logo className='logo-footer mobile--hidden' />
                            <p>Want to know more about<br></br>
                            our business? <em className='underlined-text'><a href='/'>Write to us.</a></em>
                            </p>
                            <p>Copyright &#169;2022 — 2023 Slingit.</p>
                            <p>Follow us</p>
                            <div className="social-footer__container">
                                <MessengerIcon/>
                                <DribbbleIcon/>
                                <TwitterIcon/>
                                <InstagramIcon/>
                                <FacebookIcon/>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} className='col-footer col-footer__links mobile--hidden'>
                        <div className="links-footer__container">
                            <p className='links-footer__heading'><a href='/'>Pages</a></p>
                            <p className='links-footer__link'><a href='/'>Home</a></p>
                            <p className='links-footer__link'><a href='/'>Cooperation</a></p>
                            <p className='links-footer__link'><a href='/'>Offer and Benefits</a></p>
                            <p className='links-footer__link'><a href='/'>Services</a></p>
                            <p className='links-footer__link'><a href='/'>Concept</a></p>
                            <p className='links-footer__heading pt-3'><a href='/'>Brand</a></p>
                            <p className='links-footer__link'><a href='/'>About</a></p>
                            <p className='links-footer__link'><a href='/'>Contact</a></p>
                        </div>
                    </Col>
                    <Col md={2} className='col-footer'>
                        <div className="links-footer__container mobile--hidden">
                            <p className='links-footer__heading'><a href='/'>Solutions</a></p>
                            <p className='links-footer__link'><a href='/'>Front-End</a></p>
                            <p className='links-footer__link'><a href='/'>Web development</a></p>
                            <p className='links-footer__link'><a href='/'>CMS Solutions</a></p>
                            <p className='links-footer__link'><a href='/'>Web Design</a></p>
                            <p className='links-footer__heading pt-3'><a href='/'>Rules & Terms</a></p>
                            <p className='links-footer__link'><a href='/'>Privacy policy</a></p>
                            <p className='links-footer__link'><a href='/'>Terms of service</a></p>
                        </div>
                    </Col>
                    <Col md={2} className='col-footer'>
                        <div className="links-footer__container mobile--hidden">
                            <p className='links-footer__heading'><a href='/'>Resources</a></p>
                            <p className='links-footer__link'><a href='/'>How we work?</a></p>
                            <p className='links-footer__link'><a href='/'>Case study</a></p>
                            <p className='links-footer__link'><a href='/'>Insights</a></p>
                            <p className='links-footer__heading pt-3'><a href='/'>Socials</a></p>
                            <p className='links-footer__link'><a href='/'>Dribbble</a></p>
                            <p className='links-footer__link'><a href='/'>Instagram</a></p>
                            <p className='links-footer__link'><a href='/'>Twitter</a></p>
                            <p className='links-footer__link'><a href='/'>Facebook</a></p>
                        </div>
                    </Col>
                </Row>
            </Container>
       </footer>
    )
}

export default Footer