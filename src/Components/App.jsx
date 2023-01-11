import '../Css/App.css';
import '../Css/Footer.css'
import '../Css/Cards.css'


import Footer from "./Footer"
import NavBar from './NavBar';

import Posts from './Posts';
import Register from '../Pages/Register';
import Login from '../Pages/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="app">

      {/* <Router> */}

        <NavBar/>
        

        <Routes>
        <Route path='/' element={<Posts />} />
          <Route path='Blog-react/#/posts' element={<Posts />} />
          <Route path='#/register' element={<Register />} />
          <Route path='#/login' element={<Login />} />

        </Routes>


        <Footer/>
      {/* </Router> */}
      
      
      
    </div>
  );
}

export default App;
