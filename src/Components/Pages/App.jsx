import '../../Css/App.css'
import '../../Css/Footer.css'
import '../../Css/Cards.css'

import React from "react"

import Footer from "./Footer"
import NavBar from './NavBar';

import Posts from './Posts';
import ContactMe from './ContactMe';

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import RegisterPage from './Register/RegisterPage';
import LoginPage from './Login/LoginPage'
import Dashboard from '../Pages/Dashboard'
import ForgotPassword from '../Pages/ForgotPassword';
import SwitchMode from './SwitchMode';
import { useState } from 'react';
import ThemeContextComponent from './FunctionComponent';
import AppTest from './AppTest'



function App() {
  return (
        <div className="app">



          <NavBar/>
          <h1 className="testPPP">Test we</h1>
          <SwitchMode/>

          <AppTest/>

          <Routes>
            <Route path='/' element={<Posts />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/footer' element={<ContactMe />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={ <Dashboard />}/>
            <Route path='/forgot-password' element={ <ForgotPassword />}/>
          </Routes>

          <Footer/>

        </div>
  );
}

export default App;
