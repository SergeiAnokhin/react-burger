import { OrderInfo } from '../../components/order-info/order-info';
import styles from './order-page.module.css';

export const OrderPage = () => (
  //   const itemId = location.pathname.split('/').slice(-1)[0];
  //   useEffect(() => {
  //     dispatch(ingredientId(itemId));
  //   }, [dispatch, itemId]);

  <main className={styles.wrapper}>
    <OrderInfo />
  </main>
);
