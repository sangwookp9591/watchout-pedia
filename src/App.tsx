import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { MovieDetailPage } from './pages/MovieDetail';
import { TvDetailPage } from './pages/TvDetail';
import { TvPage } from './pages/TvPage';
function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/"  element={<MainPage />} />
      <Route path="/tv"  element={<TvPage />} />
      <Route path="/movie/:id"  element={<MovieDetailPage />} />
      <Route path="/tv/:id"  element={<TvDetailPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
