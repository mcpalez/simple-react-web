import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../buttons/button-filled';

const PreFooter = () => {
  return (
    <section className='prefooter__global'>
        <Container>
            <Row>
                <Col className='prefooter__column'>
                    <h2>Let's get to work</h2>
                    <p>It's easier than you think! We make sure that complex projects and tasks are performed in a simple and transparent way.</p>
                    <ButtonFilled>Let's get started</ButtonFilled>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default PreFooter