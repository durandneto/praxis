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
import PitV2 from './index.v2'

import {
  ColapsedContainer,
  ChildContainer
} from './styles'

const PitDescription = props => {


  const [show, setShowDetail] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [view, setViewModal] = React.useState('initial')


  // if (props.v2) return <PitV2 {...props} />

  return (
  <Container>
    <Modal
        full
        open={showModal}
        onEvent={e => {
          setShowModal(false)
          setViewModal('initial')
          props.onEvent(e)
        }}
        content={
          <>
          {
            view === 'share' && (
              <BodyFont color={"Green"} label={`Share link for ${props.title} has been copied to your clipboard!`} />
            )
          }
          {
            view === 'contact' && (
              <ContactForm
                company={{
                  name: props.companyName
                }}
                data={props.data}
                loading={props.loading}
                success={props.success}
                onEvent={e => {
                  console.log('PitDescription|ContactForm',e)
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
              <>
                <Row>
                  <Column full>
                    <TitleDescription
                      title={props.title}
                      description={props.description}
                      headerH3
                      highlight
                      />
                  </Column>
                  </Row>
                <Row>
                  <Column full>
                    <MediaSource
                      source={props.video}
                      youtube
                      controls
                      width={"100%"}
                      height={"500"}
                    />
                  </Column>
                </Row>
                <Row justifyRight>
                  <Column>
                    <Button
                      onEvent={ e => {
                        setViewModal('contact')
                      }}
                      blue
                      xs
                      label={"Contact"}
                    />
                  </Column>
                </Row>
                </>
            )
          }


          </>
        }
      />
    <Row>
      <Column full>
        <TitleDescription
          title={props.title}
          description={props.description}
          headerH3
          highlight
          />
      </Column>
      <Column hideOnMobile>
        <a href={props.growth_story} target="_blank" style={{paddingTop: '13px'}}>
          <BodyFont nowrap color={"Light-Blue"} xs label={`See Story`} />
        </a>
      </Column>
      {
        props.website && (
          <Column hideOnMobile>
            <a href={props.website} target="_blank" style={{paddingTop: '13px'}}>
              <BodyFont nowrap xs label={`WebSite`} />
            </a>
          </Column>
        )
      }
      {
        props.twitter && (
          <Column hideOnMobile>
            <a href={props.twitter} target="_blank" style={{paddingTop: '13px'}}>
              <BodyFont  nowrap xs label={`Twitter`} />
            </a>
          </Column>
        )
      }
      {
        props.email && (
          <Column hideOnMobile>
            <a onClick={() => {
              setShowModal(true)
              setViewModal('contact')
            }} style={{paddingTop: '13px'}}>
              <BodyFont  nowrap xs label={`@`} />
            </a>
          </Column>
        )
      }
    </Row>
    <Row alignCenter autoColumn>
      <Column autoColumnFullWidth hideOnDesktop>
        <Row justifyRight>
          <Column>
            <a href={props.growth_story}target="_blank">
              <BodyFont nowrap color={"Light-Blue"} xs label={`See Story`} />
            </a>
          </Column>
          {
            props.website && (
              <Column>
                <a href={props.website} target="_blank">
                  <BodyFont nowrap xs label={`WebSite`} />
                </a>
              </Column>
            )
          }
          {
            props.twitter && (
              <Column>
                <a href={props.twitter} target="_blank">
                  <BodyFont  nowrap xs label={`Twitter`} />
                </a>
              </Column>
            )
          }
          {
            props.email && (
              <Column>
                <a onClick={() => {
                    setShowModal(true)
                    setViewModal('contact')
                  }}>
                  <BodyFont  nowrap xs label={`@`} />
                </a>
              </Column>
            )
          }
        </Row>
      </Column>
      <Column autoColumnFullWidth hideOnDesktop>
        <MediaSource
          source={props.video}
          youtube
          controls
          width={"100%"}
          height={"300"}
        />
      </Column>
      <Column autoColumnFullWidth  hideOnMobile>
        <Button
          onEvent={ e => {
            setShowModal(true)
            setViewModal('video')
          }}
          pink
          xs
          label={"View Pitch"}
        />
      </Column>
      <Column autoColumnFullWidth  >
        <Button
          onEvent={ e => {
            setShowModal(true)
            setViewModal('contact')
          }}
          blue
          xs
          label={"Contact"}
      />
      </Column>
      <Column autoColumnFullWidth  >
        <Button
          onEvent={ e => {
            var text = props.video;
              navigator.clipboard.writeText(text).then(function() {
                console.log('Async: Copying to clipboard was successful!');
                setShowModal(true)
                setViewModal('share')

              }, function(err) {
                console.error('Async: Could not copy text: ', err);
              });
          }}
          blue
          xs
          label={"Share"}
      />
      </Column>
    </Row>
    <Row>
      <Column full  margin={10}>
        <ColapsedContainer show={show} onClick={() => {
          setShowDetail(!show)
        }}>
          <Row alignCenter spaceBetween>
            <Column >
              <Row>
              {
                props.founders.map((founder, key) => (
                  <Column>
                    <Avatar
                      src={founder.avatar}
                      cursorPointer
                      onEvent={e => {
                        setShowDetail(!show)
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
            <Row spaceAround >
            {
              props.founders.map((founder, key) => (
                <Column alignCenter justifyCenter>
                    <TitleDescription
                      title={founder.name}
                      description={founder.position}
                      headerH3
                      />
                    <Avatar
                        src={founder.avatar}
                        cursorPointer
                        lg
                        onEvent={e => {
                          if (founder.linkedin) {
                            window.open(founder.linkedin)
                            props.onEvent({
                              data: {
                                ...props.data,
                                founder
                              },
                              type: 'onClick',
                              target: 'Avatar'
                            })
                          }
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
      <Column full margin={3}>
        <Divider color="Black" opacity={0.05}/>
      </Column>
    </Row>
  </Container>
)}

PitDescription.defaultProps = {}

PitDescription.propTypes = {}

export default PitDescription