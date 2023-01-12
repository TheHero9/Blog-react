import '../Css/App.css';
import '../Css/Footer.css'
import '../Css/Cards.css'


import Footer from "./Footer"
import NavBar from './NavBar';

import Posts from './Posts';
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import ContactMe from './ContactMe';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterPage from '../Pages/RegisterPage';
import LoginPage from '../Pages/LoginPage';


function App() {
  return (
  
    
    <div className="app">



        <NavBar/>
      
        

        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/footer' element={<ContactMe />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>


        <Footer/>
      
      
      
    </div>
  );
}

export default App;
