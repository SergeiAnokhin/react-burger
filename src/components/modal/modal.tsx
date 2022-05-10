import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const Modal = (props: { title: string, onOverlayClick: any, onEscKeydown: any, children: any, modalsContainer: any }) => {

  React.useEffect(() => {
    document.addEventListener('keydown', props.onEscKeydown);

    return () => {
      document.removeEventListener('keydown', props.onEscKeydown);
    };
  }, []);


  return ReactDOM.createPortal (
    <>
      <div className={`${styles.modal} p-10`}>
        <h3 className={styles.title}>{props.title}</h3>
          {props.children} 
        <div className={styles.closeIcon} onClick={props.onOverlayClick}>
          <CloseIcon type="primary" />
        </div>
      </div>
      <ModalOverlay onClick={props.onOverlayClick} /> 
    </>,
    props.modalsContainer
  );
};

export default Modal;