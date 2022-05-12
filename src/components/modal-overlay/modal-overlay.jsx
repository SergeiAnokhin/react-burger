import React from 'react';
import styles from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay(props) {
    return (
        <div className={styles.overlay} onClick={props.onClick} />
    );
}

ModalOverlay.propTypes = {
     onClick: PropTypes.func.isRequired
}

export default ModalOverlay;