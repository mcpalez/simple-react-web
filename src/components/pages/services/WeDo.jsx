import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import frame_01 from '../../../assets/images/services/frame_01.jpg'
import frame_02 from '../../../assets/images/services/frame_02.jpg'
import ButtonFilled from '../../buttons/button-filled';
import ButtonOutlined from '../../buttons/button-outlined';

const WeDo = () => {
  return (
    <section className='services__wedo'>
        <Container>
			<Row className='row-wedo__introduction'>
                <Col md={12} className='col-wedo__introduction'>
                    <h2 className='h2-default'>
						What we do?
					</h2>
                    <p className='p-default'>
						To help rapidly developing businesses scale up their brand and website in step with their growing employees and clientele, we provide package solutions.
					</p>
                </Col>
            </Row>
			<Row className='row-wedo__blocks'>
				<Col md={6} className='col-wedo__blocks'>
					<img alt='' src={frame_01}></img>
					<div className="wedo-block__description">
						<h4 className='h4-default'>
							Functional website development
						</h4>
						<p className='p-default'>
							We take a comprehensive approach to building brand-new digital products from the ground up, combining creativity, strategy, and technology to craft solutions that are beautiful and functional.
						</p>
						<div className="wedo__buttons">
							<ButtonFilled><a href='/'>Get started</a></ButtonFilled>
							<ButtonOutlined><a href='/'>Learn more</a></ButtonOutlined>
						</div>
					</div>
				</Col>
				<Col md={6} className='col-wedo__blocks'>
					<img alt='' src={frame_02}></img>
					<div className="wedo-block__description">
						<h4 className='h4-default'>
							We craft amazing experiences that lasts
						</h4>
						<p className='p-default'>
							We take a comprehensive approach to building brand-new digital products from the ground up, combining creativity, strategy, and technology to craft solutions that are beautiful and functional.
						</p>
						<div className="wedo__buttons">
							<ButtonOutlined><a href='/'>Learn More</a></ButtonOutlined>
						</div>
					</div>
				</Col>
			</Row>
        </Container>
    </section>
  )
}

export default WeDo