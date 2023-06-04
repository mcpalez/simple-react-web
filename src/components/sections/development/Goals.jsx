import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Frame47 from '../../../assets/images/development/Frame47.jpeg';
import ButtonFilled from '../../buttons/button-filled';

const Goals = () => {
  return (
    <section className='goals__development'>
        <Container>
            <Row>
                <Col md={6} className='col-goals-wrapper'>
                    <img src={Frame47} alt="" />
                </Col>
                <Col md={6} className='col-goals-content'>
                    <h2 className='h2-default'>What our frontend developers crew focus on</h2>
                    <ul>
                        <li>Modularity — reusable modules that perform specific tasks.</li>
                        <li>Involves designing the interactions that users will have with the website or application, including navigation, forms, buttons</li>
                        <li>Practice of designing websites and applications that can adapt to different screen sizes and device types</li>
                        <li>Such as reducing page load times, optimizing images and other media, and minimizing the amount of code that needs to be downloaded by the user</li>
                    </ul>
                    <ButtonFilled>Start development project</ButtonFilled>
                </Col >
            </Row>
        </Container>
    </section>
  )
}

export default Goals