import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ButtonOutlined from '../../buttons/button-outlined';
import Frame966 from '../../../assets/images/about/Frame966.jpeg';

function Info() {
  return (
    <section className='info__about'>
        <Container>
            <Row>
                <Col md={6} className='info--content'>
                    <h3 className='h3-default'>How can we help you achieve
                    best&nbsp;digital-experiences?
                    </h3>
                    <p className='p-default'>Understanding your customer's needs is critical to providing a great digital experience. 
                    You can conduct user research, surveys, and usability testing to gain insights into what your customers are looking for in a digital product.
                    </p>
                    <ButtonOutlined>Ask for research audit</ButtonOutlined>
                </Col>
                <Col md={6} className='info--wrapper'>
                    <img src={Frame966} alt='Blue pink background' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Info