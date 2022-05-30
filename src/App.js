import React, { useState } from 'react'
import './App.css';
import {
  Route,
} from "wouter";
import Header from './components/Header/Header';

// Pages
import Home from './pages/Home/index';
import Search from './pages/Search';
import Detail from './pages/Detail';

import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {

  const [keyword, setKeyword] = useState('');

  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
  }}>
      <div className="App">
        <Header keyword={keyword} setKeyword={setKeyword}/>
        <section className="App-content">
          <GifsContextProvider>
            <Route
              component={Home}
              path="/"
            />
            <Route
              component={Search}
              path="/search/:keyword"
            />
            <Route
              component={Detail}
              path="/gifs/:id"
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
