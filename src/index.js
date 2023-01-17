import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/Pages/App';
import {HashRouter as Router} from 'react-router-dom';
import { AuthProvider } from './Components/Pages/Context/AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>
    <AuthProvider>
      <App />
    </AuthProvider>
    
  </Router>
);


