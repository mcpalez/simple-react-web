import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Hero() {
  return (
    <section className='hero__resources top--spacing'>
        <Container>
            <Row>
                <Col lg={4} md={12} className='col-hero__content'>
                    <p className='p-default'>Useful information</p>
                    <div className="txt-container">
                        <h2 className='h2-default'>Resources — best&nbsp;practices and guidelines</h2>
                        <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions. Our feelings.</p>
                    </div>
                </Col>
                <Col lg={8} className='col-hero__wrapper mobile--hidden'>
                    <Row>
                        <Col>Post_Content</Col>
                        <Col>Post_Content</Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero