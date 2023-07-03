import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {ReactComponent as VectorCheck} from '../../../assets/images/about/VectorCheck.svg';

function Values() {
  return (
    <section className='values__about'>
		<Container>
			<Row className='row-first'>
				<Col lg={12} className='values__col-introduction'>
					<h3>Meet our core values</h3>
					<p>We adore these ideas. These ideas guide our daily lives.</p>
				</Col>
			</Row>
			<Row className='row-second'>
				<Col lg={4} className='values__box'>
					<div className="content">
						<div className="heading-box">
							<h5 className='h5-default'>Self-development</h5>
							<VectorCheck/>
						</div>
						<p className='p-default'>With our clients' expectations, we also keep our own personal development and improvement in mind.</p>
					</div>
				</Col>
				<Col lg={4} className='values__box'>
					<div className="content">
						<div className="heading-box">
							<h5 className='h5-default'>Open communication</h5>
							<VectorCheck/>
						</div>
						<p className='p-default'>With our clients' expectations, we also keep our own personal development and improvement in mind.</p>
					</div>
				</Col>
				<Col lg={4} className='values__box'>
					<div className="content">
						<div className="heading-box">
							<h5 className='h5-default'>We’re niche</h5>
							<VectorCheck/>
						</div>
						<p className='p-default'>With our clients' expectations, we also keep our own personal development and improvement in mind.</p>
					</div>
				</Col>
			</Row>
			<Row className='row-third'>
				<Col lg={4} className='values__box'>
					<div className="content">
						<div className="heading-box">
							<h5 className='h5-default'>Transparency</h5>
							<VectorCheck/>
						</div>
						<p className='p-default'>With our clients' expectations, we also keep our own personal development and improvement in mind.</p>
					</div>
				</Col>
				<Col lg={4} className='values__box'>
					<div className="content">
						<div className="heading-box">
							<h5 className='h5-default'>Healthy work environment</h5>
							<VectorCheck/>
						</div>
						<p className='p-default'>We combine professionalism with simple, courteous, and transparent communication. Our key is to be consistent.</p>
					</div>
				</Col>
				<Col lg={4} className='values__box'>
					<div className="content">
						<p className='p-default'>Read guides to better understand services we deliver, how we improve UX, and increase conversions.</p>
						<p><em className='underlined-text'>Read more about guides</em></p>
					</div>
				</Col>
			</Row>
		</Container>
    </section>
  )
}

export default Values