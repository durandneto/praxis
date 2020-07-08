import React from 'react'
import PropTypes from 'prop-types'
import TitleDescription from '../../Typography/TitleDescription'
import Container, { Row, Column } from '../../Grid'
import Divider from '../../Divider'

const MainTitleDescription = props => (
  <Container cover={props.bg} justifyCenter>
    <Row >
      <Column noPadding full>
        <Container lg fullHeight justifyCenter spaceAround>
          <Row>
          <Column full bgColor={"Black"} opacity={0.05} >
            {/* <TitleDescription
              title={props.title}
              description={props.description}
              headerH1
              highlight
              headerColor={"White"}
              descriptionColor={"White"}
              /> */}
              <h1 className='praxis_title'>
                Welcome to<br />
                Praxis SCI Accelerate<br />
                Demo Day 2020
              </h1>
            </Column>
          </Row>
          <Row>
            <Column justifyRight full bgColor={"Black"} opacity={0.05}>
              <Divider color={"Pink"} opacity={0.1} />
            </Column>
          </Row>
        </Container>
      </Column>
    </Row>
  </Container>
)

MainTitleDescription.defaultProps = {}

MainTitleDescription.propTypes = {}

export default MainTitleDescription