import styled from 'styled-components';

export const CloseButton = styled.img`
  display: none;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  ${({ show }) => show && `
    display: initial;
  `}
`
export const Poster = styled.img`
  cursor: pointer;
  :hover {
    opacity: 0.5;
  }
`


export const ModalContainer = styled.div`
  ${({ modal }) => modal && `
    background-color: rgba(0,0,0,0.8);
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
    position: fixed;
    left: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    iframe {
      width: 90%;
      height: 80%;
    }
  `}
`;

export const PosterContainer = styled.div`
  background-color: rgba(0,0,0,0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;

  ${({ width }) => width && `
    width: ${width}px;
  `}

  ${({ height }) => height && `
    height: ${height}px;
  `}

${({ mobile }) => !mobile && `
    :hover {
      top: 60px;
      opacity: 1;
      .play-button-bg {
        fill: red;
      }
  }
  `}

`;