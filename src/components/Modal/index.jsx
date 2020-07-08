import React from 'react';
import PropTypes from 'prop-types';

import CloseIcon from '../../assets/icons/close.svg'
import Button from '../Button'
import * as S from './styles';

const Modal = props => {
  return (
    <S.ModalContainer open={props.open}>
        <S.ModalBox full={props.full}>
          <S.Close>
            <img src={CloseIcon} alt="Close icon" onClick={() => {
              props.onEvent({
                event: 'onClose',
                target: 'Modal'
              })
              if ( props.onClose ) {
                props.onClose()
              }
            }}/>
          </S.Close>
          {props.content}
        </S.ModalBox>
        {/*  */}
    </S.ModalContainer>
  );
};

export default Modal;
