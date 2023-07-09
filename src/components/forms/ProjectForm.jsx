import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../buttons/button-filled';

function ProjectForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_re5ptll', 'template_f120gpp', e.target, 'x3sjJnfLpTdtWFNIj')
        .then((result) => {
            console.log(result.text);
        }, error => {
            console.log(error.text);
        });
        e.target.reset()
    };

    return (
        <div className="project--form-container">
            <div className="project-form">
                <Form ref={form} onSubmit={sendEmail}>
                <Row>
                    <Col className='project--form-col' md={6}>
                        <Form.Group className="contact-field" controlId="formBasicEmail" hasValidation>
                            <Form.Label>First name *</Form.Label>
                            <Form.Control type="text" name='project_first_name' placeholder='e.g. Sophia' required/>
                        </Form.Group>
                    </Col>
                    <Col className='project--form-col'  md={6}>
                        <Form.Group className="contact-field" controlId="formBasicEmail" hasValidation>
                            <Form.Label>Last name *</Form.Label>
                            <Form.Control type="text" name='project_last_name' placeholder='e.g. Millan' required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='project--form-col' md={12}>
                        <Form.Group className="contact-field" controlId="formBasicEmail" hasValidation>
                            <Form.Label>Your email *</Form.Label>
                            <Form.Control type="email" name='project_email' placeholder='e.g. sophia@example.com' required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='project--form-col' md={12}>
                        <Form.Group className="contact-field" controlId="formBasicEmail" hasValidation>
                            <Form.Label>Company name *</Form.Label>
                            <Form.Control type="text" name='project_company' placeholder='e.g. Example Company' required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='project--form-col' md={12}>
                        <Form.Group className="contact-field" controlId="formBasicEmail" hasValidation>
                            <Form.Label>Budget range *</Form.Label>
                            <Form.Select aria-label="Default select example" type="select" name="project_budget_range" required>
                                <option className='budget_placeholder' value="1" hidden="true">Select</option>
                                <option value="under 5k">under $5000</option>
                                <option value="5k - 10k">$5000 — $10000</option>
                                <option value="10k - 20k">$10000 — $20000</option>
                                <option value="20k +">$20000 and up</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='project--form-col' md={12}>
                        <Form.Group className="contact-field contact-message-field" controlId="formBasicEmail" hasValidation>
                            <Form.Label>Product details, else.. *</Form.Label>
                            <Form.Control type="text" name='project_message' placeholder='What kind of product you want to run?' required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col className='project--form-col project--button-col'>
                        <ButtonFilled type='submit' value='send'>Send Inquiry</ButtonFilled>
                    </Col>
                </Row>
                </Form>
            </div>
            <div className="policy-note">
                <p>By clicking on “Send Inquiry” button, you agree to our Privacy Policy, 
                    and allow Terriy to use this information for marketing purposes.
                </p>
            </div>
        </div>
    )
}

export default ProjectForm