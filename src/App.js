import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import SingleMovie from './SingleMovie';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies/:id" element={<SingleMovie />} />
      </Routes>
    </div>
  );
};

export default App;
