import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SkillCard from '../shared/SkillCard';
import styled from 'styled-components';
import { BACKEND_DESCRIPTION, FRONTEND_DESCRIPTION, CLOUD_DESCRIPTION } from '../global/Constants';
import { BACKEND_ICON, FRONTEND_ICON, CLOUD_ICON } from '../global/IconNames';

const StyledStrong = styled.strong`
    color: #f45b69
`
const StyledH2 = styled.h2`
    padding-bottom: 30px;
    margin-left: 2%
`

export default class SkillSet extends Component {
    render() {
        return (
            <Container className='skill-set'>
                <Row>
                    <StyledH2>
                        <StyledStrong>S</StyledStrong>oftware Development Skills
                    </StyledH2>
                </Row>
                <Row>
                    <Col sm='12' md='4' lg='4' xl='4'>
                        <SkillCard
                            icon={BACKEND_ICON}
                            header='Backend Development'
                            text={BACKEND_DESCRIPTION}
                        />
                    </Col>
                    <Col sm='12' md='4' lg='4' xl='4'>
                        <SkillCard
                            icon={FRONTEND_ICON}
                            header='Frontend Development'
                            text={FRONTEND_DESCRIPTION}
                        />
                    </Col>
                    <Col sm='12' md='4' lg='4' xl='4'>
                        <SkillCard
                            icon={CLOUD_ICON}
                            header='Cloud Services'
                            text={CLOUD_DESCRIPTION}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
