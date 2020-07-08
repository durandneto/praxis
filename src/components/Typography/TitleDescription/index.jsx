import React from 'react'
import PropTypes from 'prop-types'
import { Row, Column } from '../../Grid'

import FontBody from './../Body'
import FontHeader from './../Header'

const TitleDescription = props => (
    <Row column={!props.inline} >
        <Column margin={props.highlight ? 2 : 0} noPadding marginRight={props.inline} justifyCenter={props.inline}>
            <FontHeader
                h1={props.headerH1}
                h2={props.headerH2}
                h3={props.headerH3}
                h4={props.headerH4}
                h5={props.headerH5}
                highlight={props.highlight}
                h6={props.headerH6}
                uppercase={props.headerUppercase}
                lowerCase={props.headerLowerCase}
                color={props.headerColor}
                label={props.title} />
        </Column>
        {
            props.description && (
                <Column noPadding justifyCenter={props.inline}  margin={props.highlight ? 5 : 0}>
                    <FontBody
                        xs={props.bodyXs}
                        sm={props.bodySm}
                        md={props.bodyMd}
                        lg={props.bodyLg}
                        uppercase={props.bodyUppercase}
                        lowerCase={props.bodyLowerCase}
                        color={props.descriptionColor}
                        highlight={props.highlight}
                        label={props.description} />
                </Column>
            )
        }
    </Row>
)

TitleDescription.defaultProps = {
    inline: false
}

TitleDescription.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    description: PropTypes.oneOfType([
        PropTypes.string.isRequired,
        PropTypes.number.isRequired,
    ]),
    headerColor: PropTypes.string,
    headerUpperCase: PropTypes.bool,
    headerLowerCase: PropTypes.bool,

    headerH1: PropTypes.bool,
    headerH2: PropTypes.bool,
    headerH3: PropTypes.bool,
    headerH4: PropTypes.bool,
    headerH5: PropTypes.bool,
    headerH6: PropTypes.bool,

    bodyColor: PropTypes.string,
    bodyUpperCase: PropTypes.bool,
    bodyLowerCase: PropTypes.bool,

    bodyXs: PropTypes.bool,
    bodySm: PropTypes.bool,
    bodyMd: PropTypes.bool,
    bodyLg: PropTypes.bool
}

export default TitleDescription