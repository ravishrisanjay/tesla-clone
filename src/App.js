import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Orderpage from './components/Orderpage';
import Header from './components/Header';
import Testing from './components/testing';

function App() {
  return (
    <>
      <Routes>
      <Route path="/tesla-clone" element={<Home/>}/>
        <Route path='/tesla-clone/java' element={<Orderpage />} />
        <Route path='/tesla-clone/Testing' element={<Testing />} />
      </Routes>
    </>
  );
}

export default App;
