import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



export const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje= "Listado de productos"/>
    </>
  )
}

export default App;
