import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import { Header, Footer } from './components';
import { Home, Paints, Exhibitions, Paint } from './pages';


function App() {

  const [paints, setPaints] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPaints(json.paints);
      });
  }, []);

  return (
    <div className=''>
      <Header/>
      <div>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home  />} exact />
            <Route path="/exh" element={<Exhibitions/>} exact />
            <Route path="/paints" element={<Paints items={paints} />} exact />
            <Route path="/paint" element={<Paint items={paints}/>} exact />
            <Route path="/paint/:id" element={<Paint items={paints} />} />
          </Routes>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
