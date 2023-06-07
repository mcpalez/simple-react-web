import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../../buttons/button-filled';
import hero_frame from '../../../assets/images/uxui/frame_hero_uxui.jpg';
import hero_frame_mobile from '../../../assets/images/uxui/mobile_frame_hero_uxui.jpg';

function Hero() {
  return (
    <section className='uxui__hero top--spacing'>
		<Container>
			<Row>
				<Col md={6} className='col-hero__content'>
					<h1 className='h1-default'>
						UX & UI design — 
						bring&nbsp;your digital
						vision&nbsp;to&nbsp;life
					</h1>
					<ButtonFilled>Partner with us</ButtonFilled>
				</Col>
				<Col md={6} className='col-hero__wrapper'>
					<img src={hero_frame} alt='hero on uxui services page' className='mobile--hidden' />
					<img src={hero_frame_mobile} alt='hero on uxui services page' className='desktop--hidden' />
				</Col>
			</Row>
		</Container>
    </section>
  )
}

export default Hero