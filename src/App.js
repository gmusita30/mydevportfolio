import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RemindMed from './components/pages/RemindMed';
import Widtw from './components/pages/Widtw';
import Ibgame from './components/pages/Ibgame';
import Node from './components/pages/nodeblog';
import Rootmates from './components/pages/Rootmates';
import About from './components/About';

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar sticky="top"/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/remindmed' element={<RemindMed/>} />
          <Route path='/widtw' element={<Widtw/>} />
          <Route path='/rootmates' element={<Rootmates/>} />
          <Route path='/ibgame' element={<Ibgame/>} />
          <Route path='/nodeblog' element={<Node/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
