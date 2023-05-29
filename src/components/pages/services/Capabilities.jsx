import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Capabilities = () => {
  return (
    <section className='services_capabilities'>
        <Container>
            <Row className='row-capabilities__introduction'>
                <Col className='col-capabilities__introduction'>
                    <h2 className='h2-default'>
                        Take a look at our capabilities
                    </h2>
                    <p>
                        To help rapidly developing businesses scale up their brand and website in step with their growing employees and clientele, 
                        we provide package solutions. a multifaceted, data-informed methodology that we have refined over time.
                    </p>
                </Col>
            </Row>
            <Row className='row-capabilities__features'>
                <Col md={4} className='features-item'>
                    <h5 className='h5-default'>Build and Improve</h5>
                    <ul>
                        <li>CSS solutions</li>
                        <li>Performance optimization</li>
                        <li>SEO basics assurance</li>
                        <li>Custom JS frameworks</li>
                        <li>Process automation</li>
                    </ul>
                </Col>
                <Col md={4} className='features-item'>
                    <h5 className='h5-default'>Invent and Design</h5>
                    <ul>
                        <li>CSS solutions</li>
                        <li>Performance optimization</li>
                        <li>SEO basics assurance</li>
                        <li>Custom JS frameworks</li>
                        <li>Process automation</li>
                    </ul>
                </Col>
                <Col md={4} className='features-item'>
                    <h5 className='h5-default'>Upgrades & Reshapes</h5>
                    <ul>
                        <li>CSS solutions</li>
                        <li>Performance optimization</li>
                        <li>SEO basics assurance</li>
                        <li>Custom JS frameworks</li>
                        <li>Process automation</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Capabilities