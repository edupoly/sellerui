import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/js/bootstrap'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sellers from './components/Sellers';
import AddSeller from './components/AddSeller';
import ApproveSeller from './components/ApproveSeller';
import SellerSignup from './components/SellerSignup';
import Login from './components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="sellers" element={<Sellers></Sellers>}></Route>
        <Route path="addsellers" element={<AddSeller></AddSeller>}></Route>
        <Route path="approvesellers" element={<ApproveSeller></ApproveSeller>}></Route>
        <Route path="sellerSignup" element={<SellerSignup></SellerSignup>}></Route>
        <Route path="singin" element={<Login></Login>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
