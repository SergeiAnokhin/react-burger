import React from 'react';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { formatDate } from '../../utils/formatDate';
import { openIngredientModal } from '../../services/actions/item-actions';
import styles from './feed-orders.module.css';

export const FeedOrders = ({ orders }) => {
  const dispatch = useDispatch();
  // const { orders } = useSelector((store) => store.wsReducer);
  const { ingredients } = useSelector((store) => store.ingredientsReducer);
  const location = useLocation();

  const handleClickItem = () => {
    dispatch(openIngredientModal(true));
  };

  return (
    <div className={styles.orders}>
      {orders.map((item) => (
        <Link
          key={nanoid()}
          to={{
            pathname: `/feed/${item._id}`,
            state: { background: location }
          }}
          className={styles.order}
          onClick={handleClickItem}
        >
          <div className={styles.header}>
            <div className={styles.id}>#{item.number}</div>
            <div className={styles.date}>{formatDate(item.createdAt)}</div>
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
              ]
                .filter((elem2) => elem2)
                .map((item1, i) =>
                  i < 5 ? (
                    <div
                      key={nanoid()}
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
                  ) : i === 5 ? (
                    <React.Fragment key={nanoid()}>
                      <div
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
                    </React.Fragment>
                  ) : (
                    ''
                  )
                )}
            </div>
            <div className={styles.price}>
              <p className={styles.count}>
                {item.ingredients
                  .map((elem) =>
                    ingredients.find((elem1) => elem === elem1._id)
                  )
                  .filter((elem2) => elem2)
                  .reduce((acc, obj) => acc + obj.price, 0)}
                {/* {console.log(
                    item.ingredients
                      .map((elem) =>
                        ingredients.find((elem1) => elem === elem1._id)
                      )
                      .filter((elem2) => elem2)
                      .reduce((acc, obj) => acc + obj.price, 0)
                  )} */}
              </p>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};