import styles from './constructor-item.module.css'
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { deleteIngredient, sortConstructor } from '../../services/actions/constructor-actions';
import { useDrag, useDrop } from 'react-dnd';
import { useRef } from 'react';

function ConstructorItem ({elem, index}) {
    const dispatch = useDispatch()
    const ref = useRef()
    const id = elem.nanoid
    const data1 = useSelector(store => store.constructorReducer.ingredients)

    const [{isDragging}, dragRef1] = useDrag({
        type: "constructor-item",
        item: {id},
        collect: monitor => ({
            isDrag: monitor.isDragging(),
            isDragging: monitor.isDragging()
        })
    });

    const [{isHover}, dropTarget1] = useDrop({
        accept: "constructor-item",
        collect: monitor => ({
            isHover: monitor.isOver(),
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),
        drop(id) {
            const dragIndex = data1.findIndex((item, i) => item.nanoid === id.id)
            const dropIndex = index

            const data2 = [...data1]
            const drag = data2[dropIndex]
            data2[dropIndex] = data2[dragIndex]
            data2[dragIndex] = drag

            dispatch(sortConstructor(data2))
        },
        });     

    const dragDropRef = dragRef1(dropTarget1(ref))
    const opacity = isDragging ? styles.hidden : 1
    const transform = isHover ? styles.scale : ''
   return (
        <div className={`${styles.element} ${transform} ${opacity}`} ref={dragDropRef} >
            <DragIcon type="primary" />
            <ConstructorElement text={elem.name} price={elem.price} thumbnail={elem.image_mobile} handleClose={() => dispatch(deleteIngredient(elem._id))} />
        </div>
   )
}

export default ConstructorItem;