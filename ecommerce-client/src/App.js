import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

const App = () =>{
  return(
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/product/:id" element={<ProductPage/>}/>
        <Route path="/cart" element={<CartPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;



