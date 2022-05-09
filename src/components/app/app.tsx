import React from 'react';
import AppHeader from '../app-header/app-header';
import AppMain from '../app-main/app-main';
import Modal from '../modal/modal';

const modalsContainer = document.querySelector('#modals');

function App() {
  const [isOrderDetailsOpened, setIsOrderDetailsOpened] = React.useState(false);

  React.useEffect(() => {
    const getIngredients = async () => {
      const res = await fetch('https://norma.nomoreparties.space/api/ingredients');
      const data = await res.json();
      console.log(data)
    }

    getIngredients();
  }, [])

  const openModal = () => {
    setIsOrderDetailsOpened(true);
  };

  const closeAllModals = () => {
    setIsOrderDetailsOpened(false);
  };

  const handleEscKeydown = (event: any) => {
    event.key === "Escape" && closeAllModals();
  };
    return (
      <>
        <AppHeader />
        <AppMain openModal={openModal}/>
        {isOrderDetailsOpened &&
        <Modal
          title="Детали ингредиента"
          onOverlayClick={closeAllModals}
          onEscKeydown={handleEscKeydown}
          modalsContainer={modalsContainer}
        >
          
        </Modal>}

      </>
    );
  }

export default App;
