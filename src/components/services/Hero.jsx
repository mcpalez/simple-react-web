import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Hero = () => {
  return (
    <section className='services__hero top--spacing'>
        <Container>
            <Row>
                <Col md={6} className='col-default'>
                    <h1 className='h1-default'>We shape your products and services</h1>
                    <p className='p-default'>Slingit is an agency that designs and develops fast e-commerce, marketing websites, web applications, and mobile apps.</p>
                </Col>
                <Col md={6}>
                    
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero