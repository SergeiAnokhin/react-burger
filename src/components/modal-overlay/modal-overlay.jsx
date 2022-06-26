import styles from './modal-overlay.module.css';
import { useDispatch } from 'react-redux';
import { openIngredientModal } from '../../services/actions/item-actions';
import { openOrderModal } from '../../services/actions/order-actions';
import { useHistory } from 'react-router-dom';

function ModalOverlay() {

    const dispatch = useDispatch()
    const history = useHistory()

    const closeModal = () => {
        dispatch(openIngredientModal(false))
        dispatch(openOrderModal(false))
        history.replace('/')
      }

    return (
        <div className={styles.overlay} onClick={closeModal} />
    );
}

export default ModalOverlay;