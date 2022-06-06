import React, { useEffect } from 'react';
import styles from './ingredients-item.module.css';
import { Counter, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { isOpenedModal, getIdItem } from '../../services/actions/item-actions';
import { addIngredient, addBun } from '../../services/actions/constructor-actions';
import { useDrag } from "react-dnd";

function IngredientsItem(props) {
    const [count, setCount] = React.useState(0)
    const allIngredientsId = useSelector(store => store.constructorReducer.allIngredientsId)
    const dispatch = useDispatch()
    
    const handleClickItem = () => {
        dispatch(isOpenedModal(true))
        dispatch(getIdItem(props.id))
        // ingredient.type === 'bun' ? dispatch(addBun(ingredient)) : dispatch(addIngredient(ingredient))
        // setCount(count + 1)
    }

    const id = props.id;

    const [, dragRef] = useDrag({
        type: "ingredient-item",
        item: {id},
    });

    useEffect(() => {
        const arrLength = allIngredientsId.filter(item => item === id).length
        setCount(arrLength)
    }, [allIngredientsId])

    return (
        <div className={`${styles.item} p-4 mb-8`} ref={dragRef} onClick={handleClickItem}>
            <img src={props.image} alt="" />
            <p className={`${styles.price} text text_type_main-default mb-2 mt-2`}><span className="mr-2">{props.price}</span> <CurrencyIcon type="primary" /></p>
            <p className="text text_type_main-default">{props.name}</p>
            {count > 0 && <Counter count={count} size="default" />}
        </div>
    );
}

// Item.propTypes = {
//     id: PropTypes.string,
//     image: PropTypes.string,
//     price: PropTypes.number,
//     name: PropTypes.string,
// }

export default IngredientsItem;