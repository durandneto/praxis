import React from 'react'
import PropTypes from 'prop-types'
import TitleDescription from '../../Typography/TitleDescription'
import Container, { Row, Column } from '../../Grid'
import Button from '../../Button'
import Divider from '../../Divider'
import BodyFont from '../../Typography/Body'
import MediaSource from '../../MediaSource'

import {
  ColapsedContainer,
  ChildContainer
} from './styles'

const PitDescription = props => {
  return (
    <Container lg >
      <Row>
        <Column full justifyCenter alignCenter   marginRight>
          <Row >
            <Column >
              <TitleDescription
                title={"Introducing the 2020 Cohort"}
                description={"We hope you will take a moment to hear from us—and understand why we do what we do."}
                headerH2
                highlight
                headerColor={"White"}
                descriptionColor={"White"}
              />
            </Column>
          </Row>
          <Row alignCenter wrap >
            <Column  marginRight>
              <BodyFont
                nowrap
                label={"Follow along"}
                color={"White"}
              />
            </Column>
            <Column noPadding marginRight>
              <a href="http://twitter.com/praxis_sci" target={"_blank"}>
              <BodyFont
                label={"@praxis_sci"}
                color={"White"}
              />
              </a>
            </Column>
            <Column noPadding marginRight>
            <a href="https://twitter.com/hashtag/PraxisDemoDay?src=hashtag_click&f=live" target={"_blank"}>
              <BodyFont
                label={"#PraxisDemoDay"}
                color={"White"}
              />
              </a>
            </Column>
            <Column noPadding marginRight>
            <a href="https://twitter.com/hashtag/hacksci?src=hashtag_click&f=live" target={"_blank"}>
              <BodyFont
                label={"#hackSCI"}
                color={"White"}
              />
              </a>
            </Column>
          </Row>
          <Row alignCenter autoColumn>
            <Column full hideOnDesktop bgColor={"Black"} opacity={0.05} noPadding margin={5}>
              <MediaSource
                source={props.video}
                youtube
                controls
                width={"100%"}
                height={"300"}
              />
            </Column>
          </Row>
        </Column>
        <Column hideOnMobile >
          <div style={{width: '150px'}} />
        </Column>
        <Column full autoColumnFullWidthOnDesktop hideOnMobile noPadding>
            <MediaSource
              source={props.video}
              youtube
              controls
              width={"100%"}
              height={"300"}
            />
        </Column>
      </Row>
    </Container>
)}

PitDescription.defaultProps = {}

PitDescription.propTypes = {}

export default PitDescription