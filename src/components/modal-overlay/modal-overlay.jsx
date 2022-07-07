import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { openIngredientModal } from '../../services/actions/item-actions';
import { openOrderModal } from '../../services/actions/order-actions';
import styles from './modal-overlay.module.css';

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const path = history.location.pathname.split('/').slice(1, -1).join('/');

  const closeModal = () => {
    dispatch(openIngredientModal(false));
    dispatch(openOrderModal(false));
    history.replace(path === 'ingredients' ? '/' : `/${path}`);
  };

  return <div className={styles.overlay} onClick={closeModal} />;
};

export default ModalOverlay;
