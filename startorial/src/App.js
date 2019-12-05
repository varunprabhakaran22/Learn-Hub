import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Search from './components/Search/Search.jsx'

function App() {
  return (
    //Main component which render the two sub components
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}
 
export default App;
