import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Frame956 from '../../../assets/images/home/Frame956.jpeg';
import { ReactComponent as Frame938 } from '../../../assets/images/home/Frame938.svg';
import { ReactComponent as Frame939 } from '../../../assets/images/home/Frame939.svg';
import { ReactComponent as Frame940 } from '../../../assets/images/home/Frame940.svg';
import { ReactComponent as Frame941 } from '../../../assets/images/home/Frame941.svg';

function Tabs() {
  return (
    <section className='tabs__home'>
        <Container>
            <Row>
                <Col className='col-tabs__introduction'>
                    <h2 className='h2-default'>We craft impactful digital products</h2>
                    <p className='p-default'>We are dedicated to developing exceptional websites and designing cutting-edge UX/UI interfaces that leave a lasting impression on your audience.</p>
                </Col>
            </Row>
            <Row>
                <Col className='col-tabs__content'>
                <Tab.Container id="right-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col lg={8} md={12} sm={12} className='tab__panel'>
                            <Tab.Content>
                                <Tab.Pane eventKey="first"><img src={Frame956} alt="" /></Tab.Pane>
                                <Tab.Pane eventKey="second"><img src={Frame956} alt="" /></Tab.Pane>
                                <Tab.Pane eventKey="third"><img src={Frame956} alt="" /></Tab.Pane>
                                <Tab.Pane eventKey="fourth"><img src={Frame956} alt="" /></Tab.Pane>
                            </Tab.Content>
                        </Col>
                        <Col lg={4} md={12} sm={12} className='tab__indicator'>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first"><Frame938/>Only data driven</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second"><Frame939/>Investigating</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third"><Frame940/>Transform and grow</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth"><Frame941/>Forward-thinking design</Nav.Link>
                                </Nav.Item>
                                <p>Through a process of study and investigation, we unearth insights and shape brands, websites, and products. <em className='underlined-text'>View all services</em>.</p>
                            </Nav>
                        </Col>
                    </Row>
                </Tab.Container>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Tabs