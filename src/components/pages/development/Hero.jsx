import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ButtonFilled from '../../buttons/button-filled';
import hero_development from '../../../assets/images/development/hero_development.jpg';
import hero_development_mobile from '../../../assets/images/development/hero_development_mobile.jpg';
import {ReactComponent as ShapeItem04} from '../../../assets/images/ShapeItem04.svg';

const Hero = () => {
  return (
    <section className='hero__development top--spacing'>
        <Container>
			<Row>
				<Col md={6} className='col-hero__content'>
					<h1 className='h1-default'>Stunning online experiences by clear and&nbsp;scalable code</h1>
					<p className='p-default'>Our attitude to web development is a combination of technical skills, design sensibility, and attention to user experience.</p>
					<ButtonFilled>Let's talk — Google Meet</ButtonFilled>
				</Col>
				<Col md={6} className='col-hero__wrapper'>
					<img alt='' src={hero_development} className='mobile--hidden'></img>
					<img alt='' src={hero_development_mobile} className='desktop--hidden'></img>
				</Col>
				<div className="shape-item mobile--hidden">
					<div className="shape-wrapper">
						<ShapeItem04/>
					</div>
				</div>
			</Row>
        </Container>
    </section>
  )
}

export default Hero