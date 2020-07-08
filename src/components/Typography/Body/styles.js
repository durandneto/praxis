import styled from 'styled-components'
import Colors, { getHexColor } from '../../Colors'

export default styled.p`

    color: rgb(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b});

    ${({ color }) => color && `
        color: ${getHexColor(color)};
    `}

    ${({ xs }) => xs && `
        font-size: 12px;
    `}

    ${({ sm }) => sm && `
        font-size: 14px;
    `}

    ${({ md }) => md && `
        font-size: 16px;
    `}

    ${({ lg }) => lg && `
        font-size: 18px;
    `}

    ${({ nowrap }) => nowrap && `
        white-space: nowrap;
    `}

    ${({ upperCase }) => upperCase && `
        text-transform: uppercase;
    `}

    ${({ lowerCase }) => lowerCase && `
        text-transform: lowercase;
    `}

`