import React from 'react';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';
import IngredientDetails from '../ingredient-details/ingredient-details';
import OrderDetails from '../order-details/order-details';

const modalsContainer = document.querySelector('#modals');

function App() {
  const [isIngredientDetailsOpened, setIsIngredientDetailsOpened] = React.useState(false);
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false)
  const [hasError, setHasError] = React.useState(false)
  const [data, setData] = React.useState([])

  const [id, setId] = React.useState('')

  
  React.useEffect(() => {
    const getIngredients = () => {
      setIsLoading(true);
      fetch('https://norma.nomoreparties.space/api/ingredients')
        .then(res => {if (res.ok) {return res.json()}
          return Promise.reject(`Ошибка: ${res.status}`);})
        .then(data => {setData(data.data); setIsLoading(false);})
        .catch(e => {
          setHasError(true); setIsLoading(false);
          console.log('Ошибка получения данных с сервера', e.message);
        });
    };
    getIngredients();
  }, [])

  const openIngredientModal = (id: any) => {
    setIsIngredientDetailsOpened(true);
    setId(id)
  };

  const openOrderModal = () => {
    setIsOrderDetailsOpened(true);
  };

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
    setIsOrderDetailsOpened(false);
  };

    return (
      <>
        <AppHeader />
        {!isLoading && !hasError && data.length &&
          <AppMain ingredientData={data} openIngredientModal={openIngredientModal} openOrderModal={openOrderModal}/>
        }
 
        {isIngredientDetailsOpened &&
        <Modal
          title="Детали ингредиента"
          onClose={closeAllModals}   
          modalsContainer={modalsContainer}
        >       
          <IngredientDetails ingredientData={data} id={id}/>
        </Modal>}

        {isOrderDetailsOpened &&
        <Modal
          title=""
          onClose={closeAllModals}
          modalsContainer={modalsContainer}
        >       
          <OrderDetails />
        </Modal>}

      </>
    );
  }

export default App;
