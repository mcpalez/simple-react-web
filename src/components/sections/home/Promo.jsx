import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

function Promo() {
  return (
    <section className='promo__home'>
        <Container>
            <Row>
                <Col md={12} className='promo-col__content'>
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={30}
                        pagination={{
                        type: "progressbar",
                        }}
                        navigation={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <h4>Intuitive interfaces and user-friendly experience</h4>
                            <p>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>Intuitive interfaces and user-friendly experience</h4>
                            <p>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>Intuitive interfaces and user-friendly experience</h4>
                            <p>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h4>Intuitive interfaces and user-friendly experience</h4>
                            <p>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Promo