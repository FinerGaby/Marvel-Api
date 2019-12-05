import React from 'react';

//Provider del context
import FetchProvider from './context/FetchContext';

//Componentes
import Header from './component/header';
import Main from './component/main';

function App() {
  return (
    <FetchProvider>
      <Header />
      <Main />
    </FetchProvider>
  );
}

export default App;
