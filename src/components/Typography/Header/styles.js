import styled from 'styled-components'
import Colors, { getHexColor } from '../../Colors'

export const H1 = styled.h1`
    text-shadow: 0px 0px 14px #161616;
    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ highlight }) => highlight && `
        font-size: 5rem;
        line-height: 5.5rem;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}

    @media only screen and (max-width: 768px) {
        font-size: 4rem;
        line-height: 4.5rem;
    }

`

export const H2 = styled.h2`

    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        line-height: 2.5rem;
    }

`

export const H3 = styled.h3`

    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}
    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}

`

export const H4 = styled.h4`

    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}
    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}
`

export const H5 = styled.h5`

    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}
    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}
`

export const H6 = styled.h6`

    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}
    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}
`
