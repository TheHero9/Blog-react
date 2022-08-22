import '../App.css';
import Footer from "./Footer"
import NavBar from './NavBar';
import Photo from './Photo';
import Posts from './Posts';
import Input from "./Input"
import { useState } from 'react';

function App() {

  //Catch notes from Input.jsx and store them in an array
  const [notes, setNotes]= useState([])

    function addPost(post){
      setNotes(prev => {
        return [...prev, post]
      })
    }

    

  return (
    <div className="app">
      <NavBar/>
      <Photo/>
      <Input onAdd={addPost}/>
      <Posts notes={notes}/>
      <Footer/>
      
    </div>
  );
}

export default App;
