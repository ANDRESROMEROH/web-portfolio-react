import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const StyledStrong = styled.strong`
    color: #f45b69
`
const StyledH2 = styled.h2`
    padding-bottom: 50px
`

const Carousel = ({ items }) => {

    const images = items.map((item, index) => (
        <a key={index} href={item.information} target='_blank' rel='noreferrer noopener'>
            <img src={item.image} alt='badge' />
        </a>
    ));

    const responsive = {
        0: { items: 4 },
        1: { items: 4 },
        3: { items: 4 }
    };

    return (
        <Container className='mobile-hide'>
            <Row style={{ marginLeft: '1%' }}>
                <StyledH2>
                    <StyledStrong>C</StyledStrong>ertifications & Badges
                </StyledH2>
            </Row>
            <AliceCarousel
                animationDuration={2000}
                paddingLeft={120}
                disableButtonsControls
                mouseTracking
                items={images}
                responsive={responsive}
            />
        </Container>
    );
}

export default Carousel;