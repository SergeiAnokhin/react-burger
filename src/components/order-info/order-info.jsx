import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../../utils/formatDate';
import styles from './order-info.module.css';

export const OrderInfo = () => {
  const [order, setOrder] = useState('');
  const itemId = location.pathname.split('/').slice(-1)[0];
  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const { orders } = useSelector((store) => store.wsReducer);
  const { open } = useSelector((store) => store.itemReducer);
  const history = useHistory();

  useEffect(() => {
    setOrder(orders.find((item) => itemId === item._id));
  }, []);

  useEffect(() => {
    !open ? history.replace(`/feed/${itemId}`) : '';
  }, []);

  return order ? (
    <>
      <div className={styles.number}>{`#${order.number}`}</div>
      <h1 className={styles.title}>{order.name}</h1>
      <div className={styles.status}>
        {order.status === 'done' ? 'Выполнен' : 'В работе'}
      </div>
      <h2 className={styles.title}>Состав:</h2>
      <div className={styles.ingredients}>
        {[
          ...new Set(
            order.ingredients.map((item) =>
              ingredients.find((elem) => item === elem._id)
            )
          )
        ].map((elem) => (
          <div key={nanoid()} className={styles.ingredient}>
            <div className={styles.iconWrapper}>
              <img className={styles.icon} src={elem.image_mobile} alt="" />
            </div>
            <h3 className={styles.name}>{elem.name}</h3>
            <div className={styles.price}>
              <p className={styles.count}>{`${
                order.ingredients.filter((item) => item === elem._id).length
              } x ${elem.price}`}</p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.info}>
        <div className={styles.date}>{formatDate(order.createdAt)}</div>
        <div className={styles.total}>
          <p>
            {order.ingredients
              .map((elem) => ingredients.find((elem1) => elem === elem1._id))
              .reduce((acc, obj) => acc + obj.price, 0)}
          </p>
          <CurrencyIcon />
        </div>
      </div>
    </>
  ) : (
    ''
  );
};