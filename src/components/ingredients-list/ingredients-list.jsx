import styles from './ingredients-list.module.css';
import Item from '../item/item';
import PropTypes from 'prop-types';

function IngredientsList(props) {
    const data = props.ingredientData
    const type = props.type;
    return (
        <>
            <h2 className="text text_type_main-medium mb-6" id={props.id}>{props.name}</h2>
            <div className={`${styles.items} pl-4 pr-4 mb-10`}>
                {data.map((elem) => elem.type === type && <Item key={elem._id} id={elem._id} image={elem.image} price={elem.price} name={elem.name} openModal={props.openModal} />)}
            </div>
        </>
    );
}

IngredientsList.propTypes = {
    name: PropTypes.string, 
    type: PropTypes.string, 
    id: PropTypes.string, 
    ingredientData: PropTypes.arrayOf(PropTypes.object).isRequired, 
    openModal: PropTypes.func.isRequired
}

export default IngredientsList;