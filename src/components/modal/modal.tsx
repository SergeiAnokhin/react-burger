import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';


const Modal = (props: { title: string, onClose: any, children: any, modalsContainer: any }) => {

  React.useEffect(() => {
    const onEscKeydown = (event: any) => {
      event.key === "Escape" && props.onClose();
    };
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, []);


  return ReactDOM.createPortal (
    <>
      <div className={`${styles.modal} p-10`}>
        <h3 className={styles.title}>{props.title}</h3>
          {props.children} 
        <div className={styles.closeIcon} onClick={props.onClose}>
          <CloseIcon type="primary" />
        </div>
      </div>
      <ModalOverlay onClick={props.onClose} /> 
    </>,
    props.modalsContainer
  );
};

export default Modal;