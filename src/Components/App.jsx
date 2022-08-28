import '../App.css';
import Footer from "./Footer"
import NavBar from './NavBar';

import Posts from './Posts';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <Posts />
      <Footer/>
      
    </div>
  );
}

export default App;
