import styled from 'styled-components'
import Color from '../Colors'

export const ColapsedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 56px;
    transition: height 0.3s ease-out;
    cursor: pointer;

    background-color: rgb(${Color["Black"].r}, ${Color["Black"].g}, ${Color["Black"].b}, 0.02);
    :hover {
        background-color: rgb(${Color["Black"].r}, ${Color["Black"].g}, ${Color["Black"].b}, 0.03);
    }
    ${({ show }) => show && `
        height: 250px;
        background-color: rgb(${Color["Black"].r}, ${Color["Black"].g}, ${Color["Black"].b}, 0.04);
    `}


`

export const ChildContainer = styled.div`
    overflow: hidden;
    transition: flex 0.3s ease-out;
    height:auto;
    flex: 0;
    ${({ show }) => show && `
        flex: 1;
    `}
`