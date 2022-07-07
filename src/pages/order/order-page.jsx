import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { OrderInfo } from '../../components/order-info/order-info';
import { Preloader } from '../../components/preloader/preloader';
import { wsUserConnectionStart } from '../../services/actions/ws-user-actions';
import { URL_GET_ORDERS } from '../../services/requests/api';
import styles from './order-page.module.css';

export const OrderPage = () => {
  const dispatch = useDispatch();
  const { orders: allOrders } = useSelector((store) => store.wsReducer);
  const { orders: userOrders } = useSelector((store) => store.wsUserReducer);

  const orders =
    location.pathname.split('/').slice(1, -1).join('/') === 'feed'
      ? allOrders
      : userOrders;

  useEffect(() => {
    if (sessionStorage.getItem('token')) {
      dispatch(
        wsUserConnectionStart(
          `${URL_GET_ORDERS}?token=${
            sessionStorage.getItem('token').split('Bearer ')[1]
          }`
        )
      );
    }
  }, []);

  return orders.length ? (
    <main className={styles.wrapper}>
      <OrderInfo />
    </main>
  ) : (
    <Preloader />
  );
};
