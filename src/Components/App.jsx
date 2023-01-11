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


function App() {
  return (
    
    <div className="app">



        <NavBar/>
        

        <Routes>
          <Route path='/' element={<Posts />} />
          <Route path='/posts' element={<Posts />} />
          <Route path='/footer' element={<ContactMe />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>


        <Footer/>
      
      
      
    </div>
  );
}

export default App;
