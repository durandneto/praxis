import React from 'react'
import MainHeader from '../../Sessions/MainHeader'
import MainLogoTitleDescription from '../../Sessions/LogoTitleDescription'
import VideoSession from '../../Sessions/VideoSession'
import PitDescriptionSession from '../../Sessions/PitsSession'
import MadePossibleSession from '../../Sessions/MadePossible'
import Container, { Row, Column } from '../../Grid'

const HomeTemplate = props => (
  <Container >
    <Row>
      <Column noPadding full bgColor={"Black"} >
        <MainHeader
          {...props.header}
        />
      </Column>
    </Row>
    <Row justifyCenter alignCenter>
      <Column margin={20}>
        <MainLogoTitleDescription
          {...props.secondSession}
        />
      </Column>
    </Row>
    <Row bgColor={"Black"}>
      <Column full margin={10}>
        <VideoSession

          {...props.video}
        />
      </Column>
    </Row>
    <Row justifyCenter>
      <Column
        noPadding
        sm
        full
        alignCenter
        justifyCenter
        margin={10}
      >
        <PitDescriptionSession
          loading={props.controls.loading}
          success={props.controls.success}
          pits={props.pits}
          onEvent={props.onEvent}
        />
      </Column>
    </Row>
    <Row justifyCenter>
      <Column
        noPadding
        md
        full
        alignCenter
        justifyCenter
        margin={15}
      >
        <MadePossibleSession />
      </Column>
    </Row>
  </Container>
)

HomeTemplate.defaultProps = {}

HomeTemplate.propTypes = {}

export default HomeTemplate