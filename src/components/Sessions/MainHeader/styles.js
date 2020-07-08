import styled from 'styled-components'
import { getHexColor } from '../../Colors'

export default styled.span`
    font-size: 14px;
    font-family: 'Freight Text Medium';
    font-style: normal;
    font-weight: normal;

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