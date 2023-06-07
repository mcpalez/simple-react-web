import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../../buttons/button-filled';
import { ReactComponent as FigmaIcon } from '../../../assets/images/uxui/FigmaIcon.svg';

function Inference() {
    return (
        <section className='uxui__inference'>
            <Container>
                <Row className='inference--row__introduction'>
                    <Col md={12} className='inference--content'>
                        <h2 className='h2-default'>Why UX/UI matter?</h2>
                        <p className='p-default'>Both are critical components of any digital product, such as websites, mobile apps, or software applications. UX and UI are important because they directly impact how users interact with the product and the overall satisfaction and success of the product.</p>
                    </Col>
                </Row>
                <Row className='inference--row__blocks'>
                    <Col md={4} className='inference--block'>
                       <div className="inference--content">
                            <h5 className='h5-default'>Usability</h5>
                            <p className='p-default mobile--hidden'>We use user-centered design principles to create a user interface that is simple, consistent, and visually appealing. Good UX/UI design makes it easy for users to navigate and accomplish their goals.</p>
                            <p className='p-default desktop--hidden'>We use user-centered design principles to create a user interface that is simple, consistent, and visually appealing.</p>
                        </div> 
                    </Col>
                    <Col md={4} className='inference--block'>
                       <div className="inference--content">
                            <h5 className='h5-default'>Increased conversions</h5>
                            <p className='p-default mobile--hidden'>A well-designed UX/UI can also lead to increased conversions and sales. 
                            By providing a positive user experience, users are more likely to take the desired action, signing up for a service, or filling out a form.</p>
                            <p className='p-default desktop--hidden'>By providing a positive user experience, users are more likely to take the desired action, signing up for a service, or filling out a form.</p>
                        </div> 
                    </Col>
                    <Col md={4} className='inference--block'>
                       <div className="inference--content">
                            <h5 className='h5-default'>Scalability</h5>
                            <p className='p-default'>By establishing a design system, your product will be consistent in its display both online and offline.</p>
                            <ButtonFilled>See feature project — Figma<FigmaIcon/></ButtonFilled>
                        </div> 
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Inference