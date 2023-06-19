import React from 'react';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";

import Frame957 from '../../../assets/images/home/Frame957.jpeg';

function Promo() {
  return (
    <section className='promo__home'>
        <Container>
            <Row>
                <Col md={12} className='promo-col__content'>
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 1
                            },
                            1024: {
                                slidesPerView: 2
                            }
                        }}
                        spaceBetween={30}
                        pagination={{
                        type: "progressbar",
                        }}
                        navigation={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Frame957} alt=''></img>
                            <div className="slide-content">
                                <h4>Intuitive interfaces and user-friendly experience</h4>
                                <p className='p-default'>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Frame957} alt=''></img>
                            <div className="slide-content">
                                <h4>Intuitive interfaces and user-friendly experience</h4>
                                <p className='p-default'>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Frame957} alt=''></img>
                            <div className="slide-content">
                                <h4>Intuitive interfaces and user-friendly experience</h4>
                                <p className='p-default'>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Frame957} alt=''></img>
                            <div className="slide-content">
                                <h4>Intuitive interfaces and user-friendly experience</h4>
                                <p className='p-default'>Website development from end-to-end refers to the process of building a website from the initial planning stages all the way through to launch and ongoing maintenance. <em className='underlined-text'>Go to UX/UI</em>.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Promo