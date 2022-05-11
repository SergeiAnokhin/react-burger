import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';


const Modal = (props) => {

  React.useEffect(() => {
    const onEscKeydown = (event) => {
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

Modal.propTypes = { 
  title: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
  modalsContainer: PropTypes.node
 }

export default Modal;