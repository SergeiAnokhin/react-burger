import { useSelector } from 'react-redux';
import styles from './statistic-orders.module.css';

export const StatisticOrders = () => {
  const { total, totalToday } = useSelector((store) => store.wsReducer);
  return (
    <div className={styles.statistic}>
      <div className={styles.statuses}>
        <div className={styles.status}>
          <h2 className={styles.title}>Готовы:</h2>
          <ul className={styles.list}>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
            <li className={`${styles.item} ${styles.ready}`}>034533</li>
          </ul>
        </div>
        <div className={styles.status}>
          <h2 className={styles.title}>В работе:</h2>
          <ul className={styles.list}>
            <li className={styles.item}>034533</li>
            <li className={styles.item}>034533</li>
            <li className={styles.item}>034533</li>
            <li className={styles.item}>034533</li>
            <li className={styles.item}>034533</li>
            <li className={styles.item}>034533</li>
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
