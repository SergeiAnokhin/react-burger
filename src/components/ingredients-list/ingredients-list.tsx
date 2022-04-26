import styles from './ingredients-list.module.css';
import data from '../../utils/data';
import Item from '../item/item';

function IngredientsList(props: any) {
    const type = props.type;
    return (
        <>
        <h2 className="text text_type_main-medium mb-6" id={props.id}>{props.name}</h2>
        <div className={`${styles.items} pl-4 pr-4 mb-10`}>
        {data.map((elem, index) => elem.type === type && <Item key={index} image={elem.image} price={elem.price} name={elem.name} />)}
        </div>
        </>
    );
}

export default IngredientsList;