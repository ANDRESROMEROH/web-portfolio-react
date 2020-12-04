import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Row } from 'react-bootstrap';
import { Strong } from '../shared/CustomStyled';

const Carousel = ({ items }) => {
    const images = items.map((item, index) => (
        <a key={index} style={{marginLeft: '6%'}} href={item.information} target='_blank' rel='noreferrer noopener'>
            <img className='zoom' src={item.image} alt='badge' />
        </a>
    ));
    const responsive = {
        0: { items: 5 },
        1: { items: 5 }
    };
    return (
        <section className=''>
            <Row className='ml-3 pb-5'>
                <h2>
                    <Strong>C</Strong>ertifications & Badges
                </h2>
            </Row>
            <AliceCarousel
                animationDuration={2000}
                autoPlay
                infinite
                disableButtonsControls
                mouseTracking
                items={images}
                responsive={responsive}
            />
        </section>
    );
}

export default Carousel;