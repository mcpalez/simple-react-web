import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FramePhases from '../../../assets/images/uxui/frame_phases_uxui.jpg';
import ButtonOutlined from '../../buttons/button-outlined';

function Phases() {
  return (
    <section className='uxui__phases'>
        <Container>
            <Row className='phases--introduction-row'>
                <Col md={12} className='phases--introduction'>
                    <h2 className='h2-default'>What does the project phases look like?</h2>
                    <p className='p-default'>Joining the Refersion Marketplace is free and easy as a publisher. 
                    It’s your window into a growing world of affiliate revenue opportunities with thousands of brands.
                    </p>
                </Col>
            </Row>
            <Row className='phases--step-row'>
                <Col md={6} className='phases--wrapper'>
                    <img src={FramePhases} alt="" />
                </Col>
                <Col md={6} className='phases--content'>
                    <div className="number-badge">1</div>
                    <h4 className='h4-default'>Discovery and research</h4>
                    <p className='p-default'>The information gathered during this process is then used to inform the design of the user interface 
                    and user experience of the product, ensuring that it meets the needs and expectations of its intended users.</p>
                </Col>
            </Row>
            <Row className='phases--step-row'>
                <Col md={6} className='phases--wrapper'>
                    <img src={FramePhases} alt="" />
                </Col>
                <Col md={6} className='phases--content'>
                    <div className="number-badge">2</div>
                    <h4 className='h4-default'>Logic and wireframes</h4>
                    <p className='p-default'>This process involves defining the steps that users will take to achieve their goals and ensuring that the product's logic is intuitive and easy to follow. 
                    Wireframes are visual representations of the product's interface and layout, created to demonstrate how the logic of the product will be translated into the user interface.</p>
                </Col>
            </Row>
            <Row className='phases--step-row'>
                <Col md={6} className='phases--wrapper'>
                    <img src={FramePhases} alt="" />
                </Col>
                <Col md={6} className='phases--content'>
                    <div className="number-badge">3</div>
                    <h4 className='h4-default'>Art direction & UI concept</h4>
                    <p className='p-default'>Art direction refers to the visual style and creative vision of a project, while UI (User Interface) concept is the design of the user interface and user experience for a digital product. 
                    In short, art direction sets the overall visual style and direction for the project, while UI concept focuses on designing the interface and user experience of the product.</p>
                </Col>
            </Row>
            <Row className='phases--step-row'>
                <Col md={6} className='phases--wrapper'>
                    <img src={FramePhases} alt="" />
                </Col>
                <Col md={6} className='phases--content'>
                    <div className="number-badge">4</div>
                    <h4 className='h4-default'>Visual design</h4>
                    <p className='p-default'>We design every page itself, creating mockups and all content if u want to. Ensuring that all visual elements work together harmoniously. 
                    This process helps to establish a strong brand identity and makes the product more visually appealing and engaging for users.</p>
                    <ButtonOutlined>Take a look at Visual Design</ButtonOutlined>
                </Col>
            </Row>
            <Row className='phases--step-row'>
                <Col md={6} className='phases--wrapper'>
                    <img src={FramePhases} alt="" />
                </Col>
                <Col md={6} className='phases--content'>
                    <div className="number-badge">5</div>
                    <h4 className='h4-default'>Preparing design system</h4>
                    <p className='p-default'>We design every page itself, creating mockups and all content if u want to. Ensuring that all visual elements work together harmoniously. 
                    This process helps to establish a strong brand identity and makes the product more visually appealing and engaging for users.</p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Phases