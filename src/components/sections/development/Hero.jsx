import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../../buttons/button-filled';

const Hero = () => {
  return (
    <section className='hero__development top--spacing'>
        <Container>
            <Col md={6} className='col-hero__content'>
              <h1 className='h1-default'>Stunning online experiences by clear and&nbsp;scalable code</h1>
              <p className='p-default'>Our attitude to web development is a combination of technical skills, design sensibility, and attention to user experience.</p>
              <ButtonFilled>Let's talk — Google Meet</ButtonFilled>
            </Col>
            <Col md={6} className='col-hero__wrapper'>
            
            </Col>
        </Container>
    </section>
  )
}

export default Hero