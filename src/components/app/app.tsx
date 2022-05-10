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
        .then(res => res.json())
        .then(data => {setData(data.data); setIsLoading(false);})
        .catch(e => {
          setHasError(true); setIsLoading(false);
        });
    };
    
    getIngredients();
  }, [])

  const openModal = (id: any) => {
    setIsIngredientDetailsOpened(true);
    setId(id)
  };

  const openModal1 = () => {
    setIsOrderDetailsOpened(true);
  };

  const closeAllModals = () => {
    setIsIngredientDetailsOpened(false);
    setIsOrderDetailsOpened(false);
  };

  const handleEscKeydown = (event: any) => {
    event.key === "Escape" && closeAllModals();
  };
    return (
      <>
        <AppHeader />
        {isLoading && 'Загрузка...'}
        {hasError && 'Произошла ошибка'}
        {data.length &&
          <AppMain ingredientData={data} openIngredientModal={openModal} openOrderModal={openModal1}/>
        }
 
        {isIngredientDetailsOpened &&
        <Modal
          title="Детали ингредиента"
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
          modalsContainer={modalsContainer}
        >       
          <IngredientDetails ingredientData={data} id={id}/>
        </Modal>}

        {isOrderDetailsOpened &&
        <Modal
          title=""
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
          modalsContainer={modalsContainer}
        >       
          <OrderDetails />
        </Modal>}

      </>
    );
  }

export default App;
