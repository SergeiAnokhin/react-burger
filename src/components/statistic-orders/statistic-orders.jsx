import { nanoid } from 'nanoid';
import { useSelector } from 'react-redux';
import styles from './statistic-orders.module.css';

export const StatisticOrders = () => {
  const { total, totalToday, orders } = useSelector((store) => store.wsReducer);

  return (
    <div className={styles.statistic}>
      <div className={styles.statuses}>
        <div className={styles.status}>
          <h2 className={styles.title}>Готовы:</h2>
          <ul className={styles.list}>
            {orders
              .filter((item) => item.status === 'done')
              .map(
                (elem, i) =>
                  i < 10 && (
                    <li
                      key={nanoid()}
                      className={`${styles.item} ${styles.ready}`}
                    >
                      {elem.number}
                    </li>
                  )
              )}
          </ul>
        </div>
        <div className={styles.status}>
          <h2 className={styles.title}>В работе:</h2>
          <ul className={styles.list}>
            {orders
              .filter((item) => item.status !== 'done')
              .map(
                (item, i) =>
                  i < 10 && (
                    <li key={nanoid()} className={styles.item}>
                      {item.number}
                    </li>
                  )
              )}
          </ul>
        </div>
      </div>
      <div>
        <h2 className={styles.title}>Выполнено за все время:</h2>
        <p className={styles.number}>{total}</p>
      </div>
      <div>
        <h2 className={styles.title}>Выполнено за сегодня:</h2>
        <p className={styles.number}>{totalToday}</p>
      </div>
    </div>
  );
};
