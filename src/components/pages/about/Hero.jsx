import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Frame965 from '../../../assets/images/about/Frame965.jpg'

function hero() {
  return (
    <section className='hero__about'>
        <Container>
            <Row>
                <Col lg={4} md={12} className='col-hero__content'>
                    <p className='p-default'>Our company</p>
                    <div className="txt-container">
                        <h2 className='h2-default'>Together — we&nbsp;bring&nbsp;ideas to&nbsp;life</h2>
                        <p className='p-default'>We’re team of global team of over 20 people work&nbsp;remotely from Europe.</p>
                    </div>
                </Col>
                <Col lg={8} className='col-hero__wrapper mobile--hidden'>
                    <img src={Frame965} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default hero