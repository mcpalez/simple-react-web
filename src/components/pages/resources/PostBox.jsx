import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Frame967 from '../../../assets/images/resources/Frame967.jpeg'

function PostBox() {
  return (
    <section className='postbox__resources'>
        <Container>
            <Row>
                <Col md={12}>
                    <p>Product forge</p>
                </Col>
            </Row>
            <Row>
                <Col lg={6} md={12} className='post_col'>
                    <div className="post-wrapper">
                        <img src={Frame967} alt="" />
                        <div className="post-txt">
                            <h5>The complete guide to UX</h5>
                            <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions.</p>
                        </div>
                    </div>
                </Col>
                <Col lg={6} md={12} className='post_col'>
                    <div className="post-wrapper">
                        <img src={Frame967} alt="" />
                        <div className="post-txt">
                            <h5>The complete guide to UX</h5>
                            <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions.</p>
                        </div>
                    </div>
                </Col>  
                <Col lg={6} md={12} className='post_col'>
                    <div className="post-wrapper">
                        <img src={Frame967} alt="" />
                        <div className="post-txt">
                            <h5>The complete guide to UX</h5>
                            <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions.</p>
                        </div>
                    </div>
                </Col>  
                <Col lg={6} md={12} className='post_col'>
                    <div className="post-wrapper">
                        <img src={Frame967} alt="" />
                        <div className="post-txt">
                            <h5>The complete guide to UX</h5>
                            <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions.</p>
                        </div>
                    </div>
                </Col>  
                <Col lg={6} md={12} className='post_col'>
                    <div className="post-wrapper">
                        <img src={Frame967} alt="" />
                        <div className="post-txt">
                            <h5>The complete guide to UX</h5>
                            <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions.</p>
                        </div>
                    </div>
                </Col>  
                <Col lg={6} md={12} className='post_col'>
                    <div className="post-wrapper">
                        <img src={Frame967} alt="" />
                        <div className="post-txt">
                            <h5>The complete guide to UX</h5>
                            <p className='p-default'>Resources to better understand services we deliver, how we improve UX, and increase conversions.</p>
                        </div>
                    </div>
                </Col>  
            </Row>
        </Container>
    </section>
  )
}

export default PostBox