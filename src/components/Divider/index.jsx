import React from 'react'
import Colors from './../Colors'

const DividerStory = props => (
  <div style={{
    backgroundColor: Colors[props.color].hex,
    width: '100%',
    height: '2.5px',
    opacity: props.opacity ? props.opacity : 1
  }} />
)

DividerStory.defaultProps = {}

DividerStory.propTypes = {}

export default DividerStory