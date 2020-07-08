import React from 'react'
import PropTypes from 'prop-types'
import {
  Poster,
} from './styles'
const ModalMediaSourceClick = props => {
  return  (
    <Poster
      onClick={
        () => {
          props.onEvent({
            data: props,
            event: 'onClick',
            target: 'ModalMediaSourceClick'
          })
        }
      }
      src={props.poster}
      height={props.height}
      width={props.width}
      className={`modal-media-source-click-component ${props.className ? props.className : ''}`} style={{height: props.height, width: props.width}}
    />
  )
}

ModalMediaSourceClick.defaultProps = {
  className: '',
  width: '200px',
  height: '200px',
}

ModalMediaSourceClick.propTypes = {
  className: PropTypes.string,
  poster: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default ModalMediaSourceClick


