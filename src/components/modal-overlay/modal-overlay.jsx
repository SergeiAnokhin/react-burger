import styles from './modal-overlay.module.css';
import { useDispatch } from 'react-redux';
import { openIngredientModal } from '../../services/actions/item-actions';
import { openOrderModal } from '../../services/actions/order-actions';

function ModalOverlay() {

    const dispatch = useDispatch()

    return (
        <div className={styles.overlay} onClick={() => {dispatch(openIngredientModal(false)); dispatch(openOrderModal(false));}} />
    );
}

export default ModalOverlay;