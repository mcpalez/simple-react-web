import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Frame46 from '../../../assets/images/development/Frame46.jpg';
import ButtonOutlined from '../../buttons/button-outlined';

const Features = () => {
  return (
    <section className='features__development'>
        <Container>
            <Row className='row-introduction-features'>
                <Col className='col-introduction'>
                    <h2 className='h2-default'>Website development services</h2>
                    <p className='p-default'>Delivering the best digital experience to users requires a combination of technical expertise, user-centered design, and a deep understanding of user needs and behaviors.</p>
                </Col>
            </Row>
            <Row className='row-blocks-features'>
                <Col md={6} className='col-blocks'>
                    <img src={Frame46} alt="It's about brand service" />
                    <div className="content">
                        <h4 className='h4-default'>Websites development from end-to-end</h4>
                        <p className='p-default'>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. This process typically involves several stages.</p>
                    </div>
                </Col>
                <Col md={6} className='col-blocks'>
                    <img src={Frame46} alt="It's about brand service" />
                    <div className="content">
                        <h4 className='h4-default'>Engaging and user-friendly interfaces</h4>
                        <p className='p-default'>Overall, creating engaging and user-friendly interfaces requires a balance between aesthetics, functionality, and accessibility. By considering the user's needs and preferences, our designers can create interfaces that are intuitive, attractive, and easy to use.</p>
                    </div>
                </Col>
            </Row>
            <Row className='row-blocks-features'>
                <Col md={6} className='col-blocks'>
                    <img src={Frame46} alt="It's about brand service" />
                    <div className="content">
                        <h4 className='h4-default'>Our tech stack for front-end development and other technologies</h4>
                        <p className='p-default'>Engaging and user-friendly interfaces to create responsive, accessible, and fast solutions.</p>
                        <ButtonOutlined>Full documentation stack</ButtonOutlined>
                    </div>
                </Col>
                <Col md={6} className='col-blocks'>
                    <img src={Frame46} alt="It's about brand service" />
                    <div className="content">
                        <h4 className='h4-default'>Website back-end development</h4>
                        <p className='p-default'>Processing and storing data, performing calculations and logic operations, and communicating with the front-end to provide dynamic functionality and interactivity.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Features