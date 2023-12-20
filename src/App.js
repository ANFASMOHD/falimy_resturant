import {Routes,Route} from 'react-router-dom' 

import './App.css';
import Home from './pages/Home';
import Resturantview from './pages/Resturantview';
import Header from './components/Header';
import Footer from './components/Footer';




function App() {
  return (
    <div >
    <Header/>

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/restview/:id' element={<Resturantview/>}/>
    </Routes>

    <Footer/>

    </div>
  );
}

export default App;
