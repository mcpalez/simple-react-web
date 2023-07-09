import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ProjectForm from '../../forms/ProjectForm';

function Hero() {
  return (
    <section className='hero__projectstart top--spacing'>
        <Container>
            <Row>
                <Col lg={6} className='col-hero__content'>
                    <div className="txt-container">
                        <div className="headings-box">
                            <h2 className='h2-default'>We’re here to make your world better.</h2>
                            <h3 className='h3-default'>Let’s collaborate.</h3>
                        </div>
                        <p className='p-default'>We believe in collaboration and working together to make the world a better place. 
                        We value your input, feedback, and ideas, and we encourage you to get in touch with us. 
                        Whether you have a question, a suggestion, or simply want to say hello, we're here to listen.</p>
                        <p className='p-default p-bolded mobile--hidden'>We understand that communication is key, which is why we've provided this platform for you to connect with us. 
                        We appreciate your time and look forward to hearing from you.</p>
                    </div>
                </Col>
                <Col lg={6} className='col-hero__form'>
                    <ProjectForm/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero