import { useEffect, useState } from 'react';
import {
  Counter,
  CurrencyIcon
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import styles from './ingredients-item.module.css';

const IngredientsItem = (props) => {
  const [count, setCount] = useState(0);
  const allIngredientsId = useSelector(
    (store) => store.constructorReducer.allIngredientsId
  );

  const location = useLocation();
  const id = props.id;

  const [, dragRef] = useDrag({
    type: 'ingredient-item',
    item: { id }
  });

  useEffect(() => {
    const arrLength = allIngredientsId.filter((item) => item === id).length;
    setCount(arrLength);
  }, [allIngredientsId, id]);

  return (
    <Link
      to={{
        pathname: `/ingredients/${id}`,
        state: { background: location }
      }}
      className={`${styles.item} p-4 mb-8`}
      ref={dragRef}
    >
      <img src={props.image} alt="" />
      <p className={`${styles.price} text text_type_main-default mb-2 mt-2`}>
        <span className="mr-2">{props.price}</span>{' '}
        <CurrencyIcon type="primary" />
      </p>
      <p className="text text_type_main-default">{props.name}</p>
      {count > 0 && <Counter count={count} size="default" />}
    </Link>
  );
};

IngredientsItem.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string
};

export default IngredientsItem;
