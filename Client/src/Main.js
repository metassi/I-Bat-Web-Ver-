//CSS file Import
import './index.css';
//Page Component Import/JS
import Home from './Home';
//Function Package Import
import React from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function Main() {
  return (
    // <div className="App">
      
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
