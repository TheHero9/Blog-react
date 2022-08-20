import '../App.css';
import Footer from "./Footer"
import NavBar from './NavBar';
import Photo from './Photo';
import Posts from './Posts';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Photo/>
      <Posts/>
      <Footer/>
      
    </div>
  );
}

export default App;
