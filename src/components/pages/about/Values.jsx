import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

function Values() {
  return (
    <section className='values__about'>
		<Container>
			<Row>
				<Col lg={12} className='values__col-introduction'>
					<h3>Meet our core values</h3>
					<p>We adore these ideas. These ideas guide our daily lives.</p>
				</Col>
			</Row>
		</Container>
    </section>
  )
}

export default Values