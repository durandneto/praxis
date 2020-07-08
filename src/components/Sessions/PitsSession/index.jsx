import React from 'react'
import PropTypes from 'prop-types'
import PitDescription from '../../PitDescription'
import Divider from '../../Divider'
import TitleDescription from '../../Typography/TitleDescription'

import Container, { Row, Column } from '../../Grid'

const PitDescriptionSession = props => {

  const [show, setShowDetail] = React.useState(false)

  return (
    <Container>
    <Row>
    <Column full>
        <TitleDescription
          title={"The only accelerator program focused on SCI innovations worldwide."}
          headerH2
        />
      </Column>
    </Row>
    <Row>
      <Column full>
        <Divider color={"Light-Blue"} opacity={0.2} />
      </Column>
    </Row>
    {
      props.pits.map((pit, key) => (
        <Row key={`pit-${key}`}>
          <Column full>
            <PitDescription
              {...pit}
              data={pit}
              loading={props.loading}
              success={props.success}
              onEvent={props.onEvent}
            />
          </Column>
        </Row>
      ))
    }
  </Container>
)}

PitDescriptionSession.defaultProps = {}

PitDescriptionSession.propTypes = {}

export default PitDescriptionSession