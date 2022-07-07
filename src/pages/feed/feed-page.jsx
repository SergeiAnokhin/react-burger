import { useSelector } from 'react-redux';
import { FeedOrders } from '../../components/feed-orders/feed-orders';
import { StatisticOrders } from '../../components/statistic-orders/statistic-orders';
import styles from './feed-page.module.css';

export const FeedPage = () => {
  const { orders } = useSelector((store) => store.wsReducer);
  return (
    <main className={styles.wrapper}>
      <div className={styles.feed}>
        <h1 className={styles.title}>Лента заказов</h1>
        <FeedOrders orders={orders} />
      </div>
      <StatisticOrders />
    </main>
  );
};
