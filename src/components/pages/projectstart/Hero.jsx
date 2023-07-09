import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ProjectForm from '../../forms/ProjectForm';

function Hero() {
  return (
    <section className='hero__projectstart top--spacing'>
        <Container>
            <Row>
                <Col md={6}>1</Col>
                <Col md={6}>
                    <ProjectForm/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero