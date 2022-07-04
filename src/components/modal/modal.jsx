import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openIngredientModal } from '../../services/actions/item-actions';
import { openOrderModal } from '../../services/actions/order-actions';
import ModalOverlay from '../modal-overlay/modal-overlay';
import styles from './modal.module.css';

const modalsContainer = document.querySelector('#modals');

const Modal = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const path = history.location.pathname.split('/')[1];

  const closeModal = useCallback(() => {
    dispatch(openIngredientModal(false));
    dispatch(openOrderModal(false));
    history.replace(path === 'ingredients' ? '/' : `/${path}`);
  }, [dispatch, history]);

  useEffect(() => {
    const onEscKeydown = (event) => {
      event.key === 'Escape' && closeModal();
    };
    document.addEventListener('keydown', onEscKeydown);

    return () => {
      document.removeEventListener('keydown', onEscKeydown);
    };
  }, [closeModal]);

  return ReactDOM.createPortal(
    <>
      <div className={`${styles.modal} p-10`}>
        <h3 className={styles.title}>{props.title}</h3>
        {props.children}
        <div className={styles.closeIcon} onClick={closeModal}>
          <CloseIcon type="primary" />
        </div>
      </div>
      <ModalOverlay />
    </>,
    modalsContainer
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Modal;
