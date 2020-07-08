import React from 'react'
import PropTypes from 'prop-types'
import TitleDescription from '../../Typography/TitleDescription'
import Container, { Row, Column } from '../../Grid'
import Divider from '../../Divider'

const MainTitleDescription = props => (
  <Container sm spaceAround>
    <Row alignCenter autoColumn >
    <Column full>
        <TitleDescription
          title={"It's with great excitement that we present the 2020 Cohort to you—virtually."}
          headerH2
        />
      </Column>
    </Row>
    <Row>
      <Column full>
        <Divider color={"Light-Blue"} opacity={0.2} />
      </Column>
    </Row>
    <Row alignCenter autoColumn >
      <Column  margin={10}>
        <TitleDescription
          description={"These five companies were chosen for their potential to transform the lives of people with spinal cord injuries (SCI). Each company is at a post-prototype stage with proven traction, and was carefully selected by Praxis' world-class Research, Consumer and Commercialization team."}
        />
      </Column>
    </Row>
    {/* {
      props.description.map((description, key) => (
        <Row alignCenter autoColumn  key={`MainTitleDescription-${key}`}>
          <Column noPadding>
            <TitleDescription
              title={props.description}
              headerH3
            />
          </Column>
        </Row>
      ))
    } */}
    </Container>
)

MainTitleDescription.defaultProps = {}

MainTitleDescription.propTypes = {}

export default MainTitleDescription