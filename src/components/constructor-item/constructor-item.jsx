import {
  DragIcon,
  ConstructorElement
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';
import {
  deleteIngredient,
  sortConstructor
} from '../../services/actions/constructor-actions';
import styles from './constructor-item.module.css';

const ConstructorItem = ({ elem, index }) => {
  const dispatch = useDispatch();
  const ref = useRef();
  const id = elem.nanoid;
  const { ingredients } = useSelector((store) => store.constructorReducer);

  const [{ isDragging }, dragRef1] = useDrag({
    type: 'constructor-item',
    item: { id },
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
      isDragging: monitor.isDragging()
    })
  });

  const [{ isHover }, dropTarget1] = useDrop({
    accept: 'constructor-item',
    collect: (monitor) => ({
      isHover: monitor.isOver(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    }),
    drop(id) {
      const dragElementIndex = ingredients.findIndex(
        (item, i) => item.nanoid === id.id
      );
      const dropElementIndex = index;

      const constructorIngredients = [...ingredients];
      const drag = constructorIngredients[dropElementIndex];

      constructorIngredients[dropElementIndex] =
        constructorIngredients[dragElementIndex];
      constructorIngredients[dragElementIndex] = drag;

      dispatch(sortConstructor(constructorIngredients));
    }
  });

  const dragDropRef = dragRef1(dropTarget1(ref));
  const opacity = isDragging ? styles.hidden : 1;
  const transform = isHover ? styles.scale : '';
  return (
    <div
      className={`${styles.element} ${transform} ${opacity}`}
      ref={dragDropRef}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={elem.name}
        price={elem.price}
        thumbnail={elem.image_mobile}
        handleClose={() => dispatch(deleteIngredient(elem._id))}
      />
    </div>
  );
};

export default ConstructorItem;
