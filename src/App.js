import React from 'react';

import PetContextProvider from './contexts/PetContext'
import Header from './components/Header'
import PetList from './components/PetList'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <PetContextProvider>
        <Header />
        <main>
          <PetList />
        </main>
      </PetContextProvider>
      <Footer />
    </div>
  );
}

export default App;
