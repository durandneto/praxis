import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledAvatar
}
from './styles'

const Avatar = props => {
  return (
    <StyledAvatar
      src={props.src}
      cursorPointer={props.cursorPointer}
      loading={props.loading}
      lg={props.lg}
      onClick={e => {
        // e.preventDefault()
        console.log('asdasdas', props.onEvent)
        if (props.onEvent) {
          props.onEvent({
            // data: props.data,
            type: 'onClick',
            target: 'Avatar'
          })
        }
        e.stopPropagation()
      }}
    />
  )
}

Avatar.defaultProps = {
  cursorPointer: false,
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  cursorPointer: PropTypes.bool,
}

export default Avatar

