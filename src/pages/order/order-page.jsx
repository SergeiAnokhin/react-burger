import { useSelector } from 'react-redux';
import { OrderInfo } from '../../components/order-info/order-info';
import { Preloader } from '../../components/preloader/preloader';
import styles from './order-page.module.css';

export const OrderPage = () => {
  const { orders } = useSelector((store) => store.wsReducer);

  return orders.length ? (
    <main className={styles.wrapper}>
      <OrderInfo />
    </main>
  ) : (
    <Preloader />
  );
};
