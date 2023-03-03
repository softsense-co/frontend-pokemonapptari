import './App.css';
import Hero from './pages/hero';
import Pokemon from './pages/Pokemon';
import MyPokemon from './pages/MyPokemon';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Pokemon' element={<Pokemon />} />
        <Route path='/MyPokemons' element={<MyPokemon />} />
      </Routes>
    </>
  );
}

export default App;