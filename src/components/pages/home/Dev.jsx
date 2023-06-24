import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Frame958 from '../../../assets/images/home/Frame958.jpeg';

import ButtonOutlined from '../../buttons/button-outlined';

function Development() {
  return (
    <section className='dev__home'>
        <Container>
            <Row>
                <Col md={6} className='col-dev__img-wrapper'>
					<img src={Frame958} alt="" />
                </Col>
                <Col md={6} className='col-dev__content'>
					<h2 className='h2-default'>Precise & pixel perfect</h2>
					<p className='p-default'>From concept to launch, we are committed to delivering digital products that leave a lasting impression. 
					Whether you need a corporate website, an e-commerce platform, or a custom web application, our agency is equipped with the expertise to bring your ideas to life.</p>
					<ButtonOutlined>Our development services</ButtonOutlined>
					<p className='p-default'>Experience the difference of our agency as we combine the power of Next.js, Astro.js, and Vue to create digital solutions that make a lasting impact in the digital landscape.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Development