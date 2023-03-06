import './App.css';
import Hero from './pages/hero';
import Pokemon from './pages/Pokemon';
import MyPokemon from './pages/MyPokemon';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPokemon from './pages/detailPokemon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Pokemon' element={<Pokemon />} />
        <Route path='/MyPokemons' element={<MyPokemon />} />
        <Route path='/DetailPokemon' element={<DetailPokemon />} />
      </Routes>
    </Router >
  );
}

export default App;