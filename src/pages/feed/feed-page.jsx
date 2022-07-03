import { FeedOrders } from '../../components/feed-orders/feed-orders';
import { StatisticOrders } from '../../components/statistic-orders/statistic-orders';

import styles from './feed-page.module.css';

export const FeedPage = () => (
  <main className={styles.wrapper}>
    <FeedOrders />
    <StatisticOrders />
  </main>
);
