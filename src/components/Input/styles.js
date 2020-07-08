import styled, { keyframes } from 'styled-components'
import Colors from '../Colors'

const inputLoadingAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const StyledErrorMessage = styled.span`
  color: ${Colors['Yellow'].hex};
  top: 58px;
  ${({ highlight }) => highlight && `
    top: 72px;
  `}
  position: absolute;
  width: 100%;
  overflow: hidden;
  height: 20px;
  font-size: 12px;
`

export const StyledIconError = styled.span`
    color: ${Colors['Yellow'].hex};
    top: 58px;
    position: absolute;
    width: 100%;
    :before {
        content: '!';
        color: #fff ;
        padding-left: 6px;
        box-sizing: border-box;
        position: absolute;
        top: -21px;;
        right: 21px;
        width: 20px;
        height: 20px;
        margin-top: -10px;
        margin-left: -10px;
        border-radius: 50%;
        border: 2px solid #fff;
    }
`

export const StyledIconLoading = styled.span`
  cursor: wait;
  :before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    right: 12px;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 1px solid ${Colors['Light-Blue'].hex};
    border-top-color: ${Colors['Pink'].hex};
    animation: ${inputLoadingAnimation} .6s linear infinite;
  }
`

export const Input = styled.input`
  position: relative;
  border: 1px solid;
  border-color: rgba(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b}, 0.53);
  color: rgba(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b}, 0.7);
  font-size: 14px;
  padding: 15px;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    font-size: 14px;
    ${({ highlight }) => highlight && `
      font-size: 2.4rem;
    `}
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: normal;
    color: rgba(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b}, 0.3);
  }

  ${({ disabled }) => disabled && `
    border-color: rgba(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b}, 0.1);
    border-color: rgba(${Colors["Black"].r},${Colors["Black"].g},${Colors["Black"].b}, 0.1);
    cursor: not-allowed;
    ::placeholder {
      color: ${Colors["Black"].hex};
    }`}

  ${({ textCenter }) => textCenter && `
    text-align: center;
  `}

  ${({ highlight }) => highlight && `
    font-size: 2.4rem;
  `}

  ${({ loading }) => loading && `
    color: ${Colors["Light-Blue"].hex};
    border-color: rgba(${Colors["Light-Blue"].r},${Colors["Light-Blue"].g},${Colors["Light-Blue"].b}, 0.5);
    background-color: transparent;
    cursor: wait;
    ::placeholder {
      color: ${Colors["Light-Blue"].hex};
    }`}

  ${({ error }) => error && `
    color: ${Colors["Yellow"].hex};
    border-color: rgba(${Colors["Yellow"].r},${Colors["Yellow"].g},${Colors["Yellow"].b}, 0.5);
    ::placeholder {
      color: ${Colors["Yellow"].hex};
    }`}

  ${({ success }) => success && `
    color: ${Colors["Green"].hex};
    border-color: ${Colors["Green"].hex};
    ::placeholder {
      color: ${Colors["Green"].hex};
    }`}

`;

export default Input