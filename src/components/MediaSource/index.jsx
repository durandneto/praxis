import React from 'react'
import PropTypes from 'prop-types'

const MediaSource = props => {
  if (props.youtube) {
    const autoplay = props.autoplay ? '?autoplay=1;' : '';
    return (
      <iframe
        style={{borderRadius: "4px"}}
        width={props.width}
        height={props.height}
        src={`${props.source}${autoplay}`}
        frameborder="0"
        className={`media-youtube-component ${props.className ? props.className : ''}`}
        allow={`accelerometer; encrypted-media; gyroscope; picture-in-picture;`}
        allowfullscreen></iframe>
    )
  }
  return  (
    <video
      style={{borderRadius: "4px"}}
      controls={props.controls}
      width={props.width}
      height={props.height}
      className={`media-source-component ${props.className ? props.className : ''}`}
      poster={props.poster}
    >
      <source src={props.source} type={props.type} />
    </video>
  )
}

MediaSource.defaultProps = {
  controls: null,
  className: '',
  width: '200px',
  height: '200px',
}

MediaSource.propTypes = {
  controls: PropTypes.bool,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default MediaSource


