import React from 'react';

import PetContextProvider from './contexts/PetContext'
import Header from './components/Header'
import PetList from './components/PetList'

function App() {
  return (
    <div className="App">
      <PetContextProvider>
        <Header />
        <main>
          <PetList />
        </main>
      </PetContextProvider>
      <footer>
      <p>MIT license {new Date().getFullYear()}. Download <strong>free</strong> code from <a href='/'>Github repo</a>.</p>
      </footer>
    </div>
  );
}

export default App;
