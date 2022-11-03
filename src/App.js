import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
function App() {
  
  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </Provider>
  );
}

export default App;
