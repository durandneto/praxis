import styled from "styled-components";

export const ModalContainer = styled.div`
  display: none;

  ${({ open }) => open && `
    background-color: rgba(0,0,0,0.8);
    top: 0;
    width: 100%;
    z-index: 100;
    position: fixed;
    left: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow: scroll;
    z-index: 100000;
  `}
`;

export const ModalBox = styled.div`
  width: fit-content;
  max-width: 70vw;
  margin-top: 5% ;
  margin-bottom: 10%;

  @media only screen and (max-width: 768px) {
    margin-top: 20% ;
    width: 90vw;
    max-width: 100%;
    margin-bottom: 40%;
  }

  background: white;
  border: solid 1px #e0e0e0;
  border-radius: 3px;
  padding: 15px;
  display: table;
  position: relative;

  ${({ full }) => full && `
    width: 100%;
  `}
`;

export const Close = styled.span`
  cursor: pointer;
  color: #000000;
  position: absolute;
  right: 3%;
  z-index: 10000;
`;
