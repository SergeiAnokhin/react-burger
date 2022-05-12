import React from 'react';
import styles from './ingredient-details.module.css';
import PropTypes from 'prop-types';

function IngredientDetails(props) {

    const ingredient = props.ingredientData.find((elem) => elem._id === props.id)
    
    return (
                <>
                    <img src={ingredient.image_large} alt="" />
                    <h4 className={`${styles.title} mb-8`}>{ingredient.name}</h4>
                    <div className={`${styles.items}`}>
                        <div className={`${styles.item}`}>
                            <div className={`${styles.name} mb-2`}>Калории,ккал</div>
                            <div className={`${styles.value}`}>{ingredient.calories}</div>
                        </div>
                        <div className={`${styles.item}`}>
                            <div className={`${styles.name} mb-2`}>Белки, г</div>
                            <div className={`${styles.value}`}>{ingredient.proteins}</div>
                        </div>
                        <div className={`${styles.item}`}>                    
                            <div className={`${styles.name} mb-2`}>Жиры, г</div>
                            <div className={`${styles.value}`}>{ingredient.fat}</div>
                        </div>
                        <div className={`${styles.item}`}>                    
                            <div className={`${styles.name} mb-2`}>Углеводы, г</div>
                            <div className={`${styles.value}`}>{ingredient.carbohydrates}</div>
                        </div>
                    </div>
                </> 
    );
}

IngredientDetails.propTypes = {
    ingredientData: PropTypes.arrayOf(PropTypes.object).isRequired,
    id: PropTypes.string
}

export default IngredientDetails;