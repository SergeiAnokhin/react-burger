import React from 'react';
import styles from './item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Item(props: { image: string; price: number; name: string; }) {
    const [count, setCount] = React.useState(0)
    return (
        <div className={`${styles.item} p-4 mb-8`} onClick={() => setCount(count + 1)}>
            <img src={props.image} alt="" />
            <p className={`${styles.price} text text_type_main-default mb-2 mt-2`}><span className="mr-2">{props.price}</span> <CurrencyIcon type="primary" /></p>
            <p className="text text_type_main-default">{props.name}</p>
            {count > 0 && <Counter count={count} size="default" />}
        </div>
    );
}

export default Item;