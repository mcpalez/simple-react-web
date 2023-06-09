import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hero_services from '../../../assets/images/services/hero_services.jpg';
import hero_services_mobile from '../../../assets/images/services/hero_services_mobile.jpg';

const Hero = () => {
  return (
    <section className='services__hero top--spacing'>
        <Container>
            <Row className='row-hero__hero'>
                <Col md={6} className='col-hero__content'>
                    <h1 className='h1-default'>We shape your<br/> products and services</h1>
                    <p className='p-default'>Terry is an agency that designs and develops fast e-commerce, marketing websites, web applications, and mobile apps.</p>
                </Col>
                <Col md={6} className='col-hero__wrapper'>
                    <img alt='' src={hero_services} className='mobile--hidden'></img>
                    <img alt='' src={hero_services_mobile} className='desktop--hidden'></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero