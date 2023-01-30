import '../../Css/App.css'
import '../../Css/Footer.css'
import '../../Css/Cards.css'

import React from "react"

import Footer from "./Footer"
import NavBar from './NavBar';

import Posts from './UnusedPages/Posts';
import ContactMe from './ContactMe';

import { useThemeUpdate } from "./Context/ThemeContext"
import { useTheme } from "./Context/ThemeContext"

import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';


import RegisterPage from './Register/RegisterPage';
import LoginPage from './Login/LoginPage'
import Dashboard from '../Pages/Dashboard'
import ForgotPassword from '../Pages/ForgotPassword';
import SwitchMode from './SwitchMode';
import { useState } from 'react';
import ThemeContextComponent from './FunctionComponent';

import { Button } from 'react-bootstrap'
import { FaMoon } from 'react-icons/fa'


import { ThemeProvider } from './Context/ThemeContext'
import TestDiv from './TestDiv'
import PostComponent from './PagesSection/PostsComponent'
import ProgrammingTopics from '../ProgrammingTopics/MainPage'
import Recursion from '../ProgrammingTopics/Topics/Recursion'


function App() {

//   const lightTheme = useTheme()
//   const toggleTheme = useThemeUpdate()


//   const themeStyles = {
//     backgroundColor: lightTheme ? 'red' : 'blue',
//     color: !lightTheme ? 'red' : 'blue'
// }

  return (
    <ThemeProvider>
    
        <div className="app">


          <NavBar/>
          {/* <TestDiv/> */}

          {/* <ThemeContextComponent/> */}

          <Routes>
            <Route path='/' element={<PostComponent />} />


            <Route path='/programming' element={<ProgrammingTopics/>} />
            <Route path='/programming&recursion' element={<Recursion/>} />
            <Route path='/posts' element={<PostComponent />} />
            <Route path='/footer' element={<ContactMe />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/dashboard' element={ <Dashboard />}/>
            <Route path='/forgot-password' element={ <ForgotPassword />}/>
          </Routes>

          <Footer/>

        </div>
      </ThemeProvider>
  );
}

export default App;
