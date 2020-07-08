import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Colors from '../Colors'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    position: relative;

    ${({ spaceAround }) => spaceAround && `
        justify-content: space-around;
    `}

    ${({ spaceBetween }) => spaceBetween && `
        justify-content: space-between;
    `}

    ${({ justifyCenter }) => justifyCenter && `
        justify-content: center;
    `}

    ${({ justifyRight }) => justifyRight && `
        justify-content: flex-end;
    `}

    ${({ alignCenter }) => alignCenter && `
        align-items: center;
    `}

    ${({ fullHeight }) => fullHeight && `
        height: 100vh;
    `}

    ${({ halfHeight }) => halfHeight && `
        height: 50vh;
    `}

    ${({ lg }) => lg && `
        max-width: 1200px;
    `}

    ${({ md }) => md && `
        max-width: 1024px;
    `}

    ${({ sm }) => sm && `
        max-width: 767px;
    `}

    ${({ xs }) => xs && `
        max-width: 320px;
    `}

    ${({ loading }) => loading && `
        opacity: 0.2;
    `}

    ${({ wrap }) => wrap && `
        flex-wrap: wrap;
    `}

    ${({ bgColor, opacity }) => bgColor && `
        background-color: rgba(${Colors[bgColor].r},${Colors[bgColor].g},${Colors[bgColor].b}, ${opacity ? opacity : '1'});

    `}

    ${({ cover }) => cover && `
        background: url(${cover});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    `}

`

export const Container = props => <StyledContainer {...props}>{props.children}</StyledContainer>

Container.propTypes = {
    alignCenter: PropTypes.bool,
    justifyCenter: PropTypes.bool,
    justifyRight: PropTypes.bool,
    fullHeight: PropTypes.bool,
    spaceAround: PropTypes.bool,
    spaceBetween: PropTypes.bool,
    bgColor: PropTypes.string,
    lg: PropTypes.bool,
    md: PropTypes.bool,
    sm: PropTypes.bool,
    xs: PropTypes.bool,
}

Container.defaultProps = {
    alignCenter: false,
    justifyCenter: false,
    justifyRight: false,
    fullHeight: false,
    spaceAround: false,
    spaceBetween: false,
    lg: false,
    md: false,
    sm: false,
    bgColor: "",
    xs: false,
}

const StyledRow = styled(StyledContainer)`
    flex-direction: row;
    margin: initial;
    width: 100%;
    position: relative;
    height: initial;

    ${({ wrap }) => wrap && `
        flex-flow: wrap;
    `}

    ${({ margin }) => margin && `
        margin: 6px 0;
    `}

    ${({ column }) => column && `
        flex-direction: column;
    `}

    ${({ autoColumn }) => autoColumn && `
        @media only screen and (max-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
        }
    `}
    ${({ halfHeight }) => halfHeight && `
        height: 50vh;
    `}

`

const StyledColumn = styled(StyledContainer)`
    margin: initial;
    padding: 6px;
    width: fit-content;
    position: relative;
    height: initial;

    ${({ noPadding }) => noPadding && `
        padding: 0px;
    `}

    ${({ noMargin }) => noMargin && `
        margin: 0px;
    `}

    ${({ margin }) => margin && `
        margin: ${margin * 3}px 0px;
    `}

    ${({ marginRight }) => marginRight && `
        margin-right: 6px ;
    `}

    ${({ full }) => full && `
        width: 100%;
    `}

    ${({ autoColumnFullWidth }) => autoColumnFullWidth && `
        @media only screen and (max-width: 767px) {
            width: 100%;
        }
    `}

    ${({ autoColumnFullWidthOnDesktop }) => autoColumnFullWidthOnDesktop && `
        @media only screen and (min-width: 767px) {
            width: 100%;
        }
    `}

    ${({ hideOnMobile }) => hideOnMobile && `
        @media only screen and (max-width: 767px) {
            display: none;
        }
    `}
    ${({ hideOnDesktop }) => hideOnDesktop && `
        @media only screen and (min-width: 767px) {
            display: none;
        }
    `}

    ${({ halfHeight }) => halfHeight && `
        height: 50vh;
    `}
`

export const Column = props => <StyledColumn {...props}>{props.children}</StyledColumn>
export const Row = props => <StyledRow {...props}>{props.children}</StyledRow>

Row.propTypes =  Container.propTypes;
Row.defaultProps =  Container.defaultProps;

Column.propTypes =  Container.propTypes;
Column.defaultProps =  Container.defaultProps;

export default Container