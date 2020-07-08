import React from 'react'
import PropTypes from 'prop-types'
import TitleDescription from '../../Typography/TitleDescription'

import Container, { Row, Column } from '../../Grid'
import Divider from '../../Divider'

const logo1 = require("../../../images/Lead-Partners-768x307.png")
const logo2 = require("../../../images/cbb_uw.jpg")

const MadePossible = props => (
  <Container spaceAround>
    <Row alignCenter autoColumn >
    <Column full>
        <TitleDescription
          title={"Made possible by:"}
          headerH4
        />
      </Column>
    </Row>
    <Row>
      <Column full>
        <Divider color={"Light-Blue"} opacity={0.2} />
      </Column>
    </Row>
    <Row justifyCenter wrap alignCenter>
      <Column>
        <img src={logo1}/>
      </Column>
      <Column>
        <img src={logo2} height="250px"/>
      </Column>
         {/* <Column margin={1}>
        <img src={logo3} alt="WD" height={"100px"}/>
      </Column> */}
    </Row>
  </Container>
)

MadePossible.defaultProps = {}

MadePossible.propTypes = {}

export default MadePossible