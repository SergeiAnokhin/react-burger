import styles from './burger-constructor.module.css';
import { ConstructorElement, DragIcon, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components';
import data from '../../utils/data';

function BurgerConstructor() {
  return (
      <section className={`${styles.section} pt-25 pl-4 pr-4`}>
        <div className={styles.bun}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
          />
        </div>
        <div className={styles.elements}>
          {data.map((elem, index) =>
          elem.type === 'main' ?
          <div key={elem._id} className={styles.element}>
            <DragIcon type="primary" />
            <ConstructorElement 
              key={elem._id}
              text={elem.name} 
              price={elem.price} 
              thumbnail={elem.image_mobile}
            />
          </div> :
          elem.type === 'sauce' &&
          <div key={elem._id} className={styles.element}>
            <DragIcon type="primary" />
            <ConstructorElement 
              key={elem._id}
              text={elem.name} 
              price={elem.price} 
              thumbnail={elem.image_mobile}
            />
          </div>
          )}
        </div>
        <div className={styles.bun}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
          />
        </div>
        <div className={`${styles.info} pr-4`}>
          <p className="text text_type_digits-medium mr-10"><span className='mr-2'>610</span><CurrencyIcon type="primary"/></p>
          <Button type="primary" size="large">Оформить заказ</Button>
        </div>
      </section>
  );
}

export default BurgerConstructor;