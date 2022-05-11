import React from 'react';
import styles from './item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

function Item(props) {
    const [count, setCount] = React.useState(0)
    return (
        <div className={`${styles.item} p-4 mb-8`} onClick={() => {setCount(count + 1); props.openModal(props.id)}}>
            <img src={props.image} alt="" />
            <p className={`${styles.price} text text_type_main-default mb-2 mt-2`}><span className="mr-2">{props.price}</span> <CurrencyIcon type="primary" /></p>
            <p className="text text_type_main-default">{props.name}</p>
            {count > 0 && <Counter count={count} size="default" />}
        </div>
    );
}

Item.propTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    name: PropTypes.string,
    openModal: PropTypes.func
}

export default Item;