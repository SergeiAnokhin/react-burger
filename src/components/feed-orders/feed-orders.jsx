import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector } from 'react-redux';
import styles from './feed-orders.module.css';

export const FeedOrders = () => {
  const { orders } = useSelector((store) => store.wsReducer);
  const { ingredients } = useSelector((store) => store.ingredientsReducer);

  return (
    <div className={styles.feed}>
      <h1 className={styles.title}>Лента заказов</h1>
      <ul className={styles.orders}>
        {orders.map((item) => (
          <li className={styles.order} key={item._id}>
            <div className={styles.header}>
              <div className={styles.id}>#{item.number}</div>
              <div className={styles.date}>{item.createdAt}</div>
            </div>
            <h2 className={styles.title}>{item.name}</h2>
            <div className={styles.info}>
              <div
                className={styles.ingredients}
                style={{
                  transform: 'translateX(-65px)'
                }}
              >
                {[
                  ...new Set(
                    item.ingredients.map((elem) =>
                      ingredients.find((elem1) => elem === elem1._id)
                    )
                  )
                ].map((item1, i) =>
                  i < 5 ? (
                    <>
                      <div
                        key={i}
                        className={styles.iconWrapper}
                        style={{
                          zIndex: 5 - i,
                          transform: `translateX(${(5 - i) * 13}px)`
                        }}
                      >
                        <img
                          className={styles.icon}
                          src={item1.image_mobile}
                          alt=""
                        />
                      </div>
                    </>
                  ) : i === 5 ? (
                    <>
                      <div
                        key={i}
                        className={styles.iconWrapper}
                        style={{
                          zIndex: 5 - i,
                          transform: `translateX(${(5 - i) * 13}px)`
                        }}
                      >
                        <img
                          className={styles.icon}
                          src={item1.image_mobile}
                          alt=""
                        />
                      </div>
                      <p className={styles.more}>
                        {[...new Set(item.ingredients)].length > 6
                          ? `+${[...new Set(item.ingredients)].length - 1 - i}`
                          : ''}
                      </p>
                    </>
                  ) : (
                    ''
                  )
                )}
              </div>
              <div className={styles.price}>
                <p className={styles.count}>510</p>
                <CurrencyIcon type="primary" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
