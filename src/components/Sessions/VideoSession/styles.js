import styled from 'styled-components'
import Color from '../../Colors'

export const ColapsedContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 20px;
    padding: 14px 6px;
    transition: height 0.3s ease-out;
    cursor: pointer;

    background-color: rgb(${Color["White"].r}, ${Color["White"].g}, ${Color["White"].b}, 0.02);
    :hover {
        background-color: rgb(${Color["White"].r}, ${Color["White"].g}, ${Color["White"].b}, 0.03);
    }
    ${({ show }) => show && `
        height: 200px;
        background-color: rgb(${Color["White"].r}, ${Color["White"].g}, ${Color["White"].b}, 0.04);
    `}


`

export const ChildContainer = styled.div`
    overflow: hidden;
    transition: flex 0.3s ease-out;
    height:auto;
    flex: 1;
`