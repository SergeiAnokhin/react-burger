import styles from './modal-overlay.module.css';
import { useDispatch } from 'react-redux';
import { isOpenedModal } from '../../services/actions/item-actions';
import { isOpenedOrderModal } from '../../services/actions/order-actions';

function ModalOverlay() {

    const dispatch = useDispatch()

    return (
        <div className={styles.overlay} onClick={() => {dispatch(isOpenedModal(false)); dispatch(isOpenedOrderModal(false));}} />
    );
}

export default ModalOverlay;