import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../../buttons/button-filled';
import ButtonOutlined from '../../buttons/button-outlined';
import Frame01 from '../../../assets/images/home/Frame01.jpg'

function Hero() {
  return (
    <section className='hero__home top--spacing'>
        <Container>
            <Row>
                <Col md={6} className='col-hero__content'>
                    <h1 className='h1-default'>Outstanding digital&nbsp;experience’s</h1>
                    <p className='p-default'>We creates and builds quick web apps, online websites, and mobile applications. Let’s get started and work together!</p>
                    <div className="button-container">
                        <ButtonFilled>Start your project</ButtonFilled>
                        <ButtonOutlined>See our services</ButtonOutlined>
                    </div>
                </Col>
                <Col md={6} className='col-hero__wrapper'>
                    <img src={Frame01} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero