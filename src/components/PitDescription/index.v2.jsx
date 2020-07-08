import React from 'react'
import PropTypes from 'prop-types'
import TitleDescription from '../Typography/TitleDescription'
import Container, { Row, Column } from '../Grid'
import Button from '../Button'
import Avatar from '../Avatar'
import Divider from '../Divider'
import BodyFont from '../Typography/Body'
import ContactForm from '../ContactForm'
import Modal from '../Modal'
import MediaSource from '../MediaSource'
import {
  ColapsedContainer,
  ChildContainer
} from './styles'

const PitDescription = props => {

  const [show, setShowDetail] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [view, setViewModal] = React.useState('initial')


  return (
  <Container>
    <Modal
        open={showModal}
        onEvent={e => {
          setShowModal(false)
          setViewModal('initial')
          props.onEvent(e)
        }}
        content={
          <>
          {
            view === 'contact' && (
              <ContactForm
                company={{
                  name: props.companyName
                }}
                loading={props.loading}
                success={props.success}
                onEvent={e => {
                  if (e.type === "CancelContactForm"
                    || e.type === "CloseContactForm") {
                    setShowModal(false)
                    setViewModal('initial')
                  }
                  props.onEvent(e)
                }
              }
              />
            )
          }
          {
            view === 'video' && (
              <MediaSource
                source={props.video}
                youtube
                controls
                width={"100%"}
                height={"500"}
              />
            )
          }


          </>
        }
      />
    <Row>
      <Column full noPadding>
        <Row>
          <Column >
            <TitleDescription
              title={props.title}
              description={props.description}
              headerH3
              highlight
            />
          </Column>
        </Row>
        <Row alignCenter autoColumn>
          <Column full hideOnDesktop bgColor={"Black"} opacity={0.05}>
            <MediaSource
              source={props.video}
              youtube
              controls
              width={"100%"}
              height={"300"}
            />
          </Column>
          <Column autoColumnFullWidth noPadding margin={2} >
            <Button
              onEvent={ e => {
                setShowModal(true)
                setViewModal('contact')
              }}
              yellow
              xs
              label={"Contact"}
          />
          </Column>
          <Column autoColumnFullWidth noPadding>
            <Button
              onEvent={ e => {
                console.log(e)
              }}
              blue
              xs
              label={"Share"}
          />
          </Column>
        </Row>
        <Row>
          <Column autoColumnFullWidth noPadding>
            <Row justifyRight>
              <Column>
                <BodyFont xs label={`WebSite`} />
              </Column>
              <Column>
                <BodyFont xs label={`Twitter`} />
              </Column>
              <Column>
                <BodyFont xs label={`E-mail`} />
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
      <Column full autoColumnFullWidthOnDesktop hideOnMobile>
          <MediaSource
            source={props.video}
            youtube
            controls
            width={"100%"}
            height={"300"}
          />
      </Column>
    </Row>
    <Row>
      <Column full noPadding margin={2}>
        <ColapsedContainer show={show} onClick={() => {
          setShowDetail(!show)
        }}>
          <Row alignCenter spaceBetween>
            <Column >
              <Row>
              {
                props.founders.map((founder, key) => (
                  <Column >
                    <Avatar
                      src={founder.avatar}
                      cursorPointer
                      onEvent={e => {
                        props.onEvent({
                          data: {
                            ...props.data,
                            founder
                          },
                          type: 'onClick',
                          target: 'Avatar'
                        })
                      }}
                      />
                  </Column>
                ))
              }
              </Row>
            </Column>

            <Column>
              <BodyFont lg label={`Meet the founders`} />
              <Divider color="Yellow" />
            </Column>
          </Row>
          <ChildContainer show={show}>
            <Row spaceAround>
            {
              props.founders.map((founder, key) => (
                <Column>
                  <TitleDescription
                    title={founder.name}
                    description={founder.position}
                    />
                  <Avatar
                      src={founder.avatar}
                      cursorPointer
                      lg
                      onEvent={e => {
                        console.log('Avatar', e)
                        props.onEvent({
                          data: {
                            ...props.data,
                            founder
                          },
                          type: 'onClick',
                          target: 'Avatar'
                        })
                      }}
                  />
                </Column>
              ))
            }
            </Row>
          </ChildContainer>
        </ColapsedContainer>
      </Column>
    </Row>
    <Row>
      <Column full margin={15}>
        <Divider color="Black" opacity={0.05}/>
      </Column>
    </Row>
  </Container>
)}

PitDescription.defaultProps = {}

PitDescription.propTypes = {}

export default PitDescription