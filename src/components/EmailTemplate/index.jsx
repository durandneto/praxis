import React from 'react'
import PropTypes from 'prop-types'
import {
  StyledEmailTemplate
}
from './styles'

const EmailTemplate = props => {
  return (
    <table>
      <tr>
        <td style={{padding:'14px 0'}} >Hi COMPANY</td>
      </tr>
      <tr>
        <td  style={{paddingBottom:'14px'}} >This message came from Praxis Demo Day 2020 - contact form</td>
      </tr>
      <tr>
        <td>From: <b>Durand Neto</b></td>
      </tr>
      <tr>
        <td>Email: <b>durand.neto@gmail.com</b></td>
      </tr>
      <tr>
        <td>Affiliation: <b>Home</b></td>
      </tr>
      <tr>
        <td style={{padding:'24px 0'}}>Message:</td>
      </tr>
      <tr>
        <td>here is my message</td>
      </tr>
      <tr>
        <td style={{padding:'24px 0'}}><b>Feel free to contact us in case you have any questions</b></td>
      </tr>
      <tr>
        <td><b>Best regards</b></td>
      </tr>
    </table>
  )
}

EmailTemplate.defaultProps = {
  cursorPointer: false,
}

EmailTemplate.propTypes = {
  src: PropTypes.string.isRequired,
  cursorPointer: PropTypes.bool,
}

export default EmailTemplate

