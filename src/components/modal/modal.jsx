import React from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { isOpenedModal } from '../../services/actions/item-actions';
import { isOpenedOrderModal } from '../../services/actions/order-actions';

const modalsContainer = document.querySelector('#modals');

const Modal = (props) => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    const onEscKeydown = (event) => {
      event.key === "Escape" && dispatch(isOpenedModal(false)) && dispatch(isOpenedOrderModal(false));
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
        <div className={styles.closeIcon} onClick={() => {dispatch(isOpenedModal(false)); dispatch(isOpenedOrderModal(false));}}>
          <CloseIcon type="primary" />
        </div>
      </div>
      <ModalOverlay onClick={() => {dispatch(isOpenedModal(false)); dispatch(isOpenedOrderModal(false));}} /> 
    </>,
    modalsContainer
  );
};

Modal.propTypes = { 
  title: PropTypes.string,
  children: PropTypes.node
 }

export default Modal;