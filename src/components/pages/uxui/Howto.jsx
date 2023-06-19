import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonOutlined from '../../buttons/button-outlined';
import FrameHowTo from '../../../assets/images/uxui/frame_howto_uxui.jpg'

function Howto() {
  return (
    <section className='uxui__howto'>
        <Container>
            <Row>
                <Col md={6} className='howto--content'>
                    <h3 className='h3-default'>How can we help you achieve
                    best&nbsp;digital-experiences?
                    </h3>
                    <p className='p-default'>Understanding your customer's needs is critical to providing a great digital experience. 
                    You can conduct user research, surveys, and usability testing to gain insights into what your customers are looking for in a digital product.
                    </p>
                    <ButtonOutlined>Ask for research audit</ButtonOutlined>
                </Col>
                <Col md={6} className='howto--wrapper'>
                    <img src={FrameHowTo} alt="" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Howto