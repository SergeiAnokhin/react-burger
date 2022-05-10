import React from 'react';
import styles from './order-details.module.css';
import done from '../../images/done.svg'


function OrderDetails() {
    return (
        <>
            <div className={`${styles.id} mt-20 mb-8`}>034356</div>
            <div className={`${styles.title} mb-15`}>идентификатор заказа</div>
            <img className='mb-15' src={done} alt="" />
            <div className={`${styles.status} mb-2`}>Ваш заказ начали готовить</div>
            <div className={`${styles.wait} mb-20`}>Дождитесь готовности на орбитальной станции</div>
        </>
    );
}

export default OrderDetails;