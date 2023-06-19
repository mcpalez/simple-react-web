import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import Frame46 from '../../../assets/images/home/Frame46.jpg';

import ButtonOutlined from '../../buttons/button-outlined';

function Choose() {
  return (
    <section className='choose__home'>
        <Container>
            <Row>
                <Col md={6} className='col-choose__content'>
                    <h2 className='h2-default'>Why choose us?</h2>
                    <p className='p-default'>Our design practice is constantly looking to get better, much as the environment we live in and the companies we deal with. 
                    We create distinctive visual identities, convey original brand stories, and create engaging digital experiences.</p>
                    <ButtonOutlined>Read more about us</ButtonOutlined>
                    <p className='p-default'>Through a process of study and investigation, we unearth insights and shape brands, websites, and products.</p>
                </Col>
                <Col md={6} className='col-choose__img-wrapper'>
                    <img src={Frame46} alt=''></img>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Choose