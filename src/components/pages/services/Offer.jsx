import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion'
import { ReactComponent as DevelopmentIcon } from '../../../assets/images/services/icon_offer_1.svg';
import { ReactComponent as WebApplicationsIcon } from '../../../assets/images/services/icon_offer_2.svg';
import { ReactComponent as FrontendDevelopmentIcon } from '../../../assets/images/services/icon_offer_6.svg';
import { ReactComponent as BackendDevelopmentIcon } from '../../../assets/images/services/icon_offer_3.svg';
import { ReactComponent as UXUIIcon } from '../../../assets/images/services/icon_offer_4.svg';
import { ReactComponent as GetHelpIcon } from '../../../assets/images/services/icon_offer_5.svg';

const Offer = () => {
  return (
    <section className='services__offer'>
        <Container>
            <Row className='row-offer__introduction'>
                <Col md={12} className='col-offer__introduction'>
                    <h2 className='h2-default'>
                        Our services
                    </h2>
                    <p className='p-default'>
                        To help rapidly developing businesses scale up their brand and website in step with their growing employees and clientele, we provide package solutions.
                    </p>
                </Col>
            </Row>
            <Row className='row-offer__blocks mobile--hidden'>
                <Col md={4} className='col-offer__blocks'>
                    <div className="col-offer__inner">
                        <DevelopmentIcon className='icon-offer'/>
                        <h4 className='h4-default'>
                            Website development
                        </h4>
                        <p className='p-default'>
                            Website development is the process of building and maintaining a website using various programming languages, frameworks, and tools. It involves designing the website, writing code, and ensuring its functionality and usability.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='col-offer__blocks'>
                    <div className="col-offer__inner">
                        <WebApplicationsIcon className='icon-offer'/>
                        <h4 className='h4-default'>
                            Web applications
                        </h4>
                        <p className='p-default'>
                            Web application development involves building and maintaining software applications that run on the web. It involves the use of programming languages, frameworks, and tools to create interactive and dynamic user interfaces.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='col-offer__blocks'>
                    <div className="col-offer__inner">
                        <FrontendDevelopmentIcon className='icon-offer'/>
                        <h4 className='h4-default'>
                            Frontend development
                        </h4>
                        <p className='p-default'>
                            They have a clear understanding of their needs, expectations, and budget for the project. Moreover, they have good communication skills, a collaborative approach, and a willingness to adapt to the project's requirements.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='col-offer__blocks'>
                    <div className="col-offer__inner">
                        <BackendDevelopmentIcon className='icon-offer'/>
                        <h4 className='h4-default'>
                            Backend development
                        </h4>
                        <p className='p-default'>
                            Backend development for a website involves building and maintaining the server-side of the website, which handles the processing of data and user requests.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='col-offer__blocks'>
                    <div className="col-offer__inner">
                        <UXUIIcon className='icon-offer'/>
                        <h4 className='h4-default'>
                            UX and UI design
                        </h4>
                        <p className='p-default'>
                            It's a joint endeavor that needs commitment from both parties. We demand that clients choose a point of contact who will be actively engaged in the project in order to secure the best results.
                        </p>
                    </div>
                </Col>
                <Col md={4} className='col-offer__blocks'>
                    <div className="col-offer__inner">
                        <GetHelpIcon className='icon-offer'/>
                        <h4 className='h4-default'>
                            Get help or leave feedback
                        </h4>
                        <p className='p-default'>
                            Looking for more information or you want to speak with our people? <em className='underlined-text'>Submit your info</em> and our representative will follow up with you as soon as possible. <em className='underlined-text'>You can checkout our FAQ.</em>
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className='row-offer__accordion desktop--hidden'>
                <Col className='col-offer__accordion'>
                    <Accordion className='accordion-offer'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><em className='accordion-offer__total'>01</em>Website development</Accordion.Header>
                            <Accordion.Body>
                            <p className='p-default'>
                            Website development is the process of building and maintaining a website using various programming languages, 
                            frameworks, and tools. It involves designing the website, writing code, and ensuring its functionality and usability.
                            </p>
                            <button className='button-primary-outlined'>Build a new product</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><em className='accordion-offer__total'>02</em>Web applications</Accordion.Header>
                            <Accordion.Body>
                            <p className='p-default'>
                            Website development is the process of building and maintaining a website using various programming languages, 
                            frameworks, and tools. It involves designing the website, writing code, and ensuring its functionality and usability.
                            </p>
                            <button className='button-primary-outlined'>Build a new product</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><em className='accordion-offer__total'>03</em>Frontend development</Accordion.Header>
                            <Accordion.Body>
                            <p className='p-default'>
                            Website development is the process of building and maintaining a website using various programming languages, 
                            frameworks, and tools. It involves designing the website, writing code, and ensuring its functionality and usability.
                            </p>
                            <button className='button-primary-outlined'>Build a new product</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><em className='accordion-offer__total'>04</em>Backend development</Accordion.Header>
                            <Accordion.Body>
                            <p className='p-default'>
                            Website development is the process of building and maintaining a website using various programming languages, 
                            frameworks, and tools. It involves designing the website, writing code, and ensuring its functionality and usability.
                            </p>
                            <button className='button-primary-outlined'>Build a new product</button>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><em className='accordion-offer__total'>05</em>UX and UI design</Accordion.Header>
                            <Accordion.Body>
                            <p className='p-default'>
                            Website development is the process of building and maintaining a website using various programming languages, 
                            frameworks, and tools. It involves designing the website, writing code, and ensuring its functionality and usability.
                            </p>
                            <button className='button-primary-outlined'>Build a new product</button>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Offer