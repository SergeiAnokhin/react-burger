import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openIngredientModal } from '../../services/actions/item-actions';
import { openOrderModal } from '../../services/actions/order-actions';
import styles from './modal-overlay.module.css';

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const closeModal = () => {
    dispatch(openIngredientModal(false));
    dispatch(openOrderModal(false));
    history.replace('/');
  };

  return <div className={styles.overlay} onClick={closeModal} />;
};

export default ModalOverlay;
