import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '../../assets/icons/close.svg'
import PlayIcon from '../../assets/icons/play.svg'
import {
  ModalContainer,
  CloseButton,
  Poster,
  PosterContainer
} from './styles'
const ModalMediaSource = props => {
  const [showModal, setShowModal] = React.useState(false);
  const [showVideo, setShowVideo] = React.useState(false);
  return  (
    <div className={`modal-media-source-component ${props.className ? props.className : ''}`} style={{ position: 'relative', height: props.height, width: props.width}}>
      <ModalContainer modal={showModal} onClick={() => {
          setShowModal(!showModal)
          if (!showModal) {
            setShowVideo(!showVideo)
          }
        }}>
        <CloseButton src={CloseIcon} show={showModal}/>
        {
          (!showModal && !showVideo) ? (
            <React.Fragment>
              <Poster
                src={props.poster}
                height={props.height}
                width={props.width}
              />
              <PosterContainer
                className={'poster-hover-container'}
                height={props.height}
                width={props.width}
              >
                <svg width="68px" height="48px" version="1.1">
                  <path className="play-button-bg" d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="#212121" fillOpacity="0.8"></path>
                  <path d="M 45,24 27,14 27,34" fill="#fff"></path>
              </svg>
              </PosterContainer>
            </React.Fragment>
          ) : (
            props.children
          )
        }
      </ModalContainer>
    </div>
  )
}

ModalMediaSource.defaultProps = {
  className: '',
  width: '200px',
  height: '200px',
}

ModalMediaSource.propTypes = {
  controls: PropTypes.bool,
  className: PropTypes.string,
  src: PropTypes.string,
  poster: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default ModalMediaSource


