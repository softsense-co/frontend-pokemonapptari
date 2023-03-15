import './App.css';
import Hero from './pages/hero';
import Pokemon from './pages/Pokemon';
import MyPokemon from './pages/MyPokemon';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Todo from './pages/Todo';
import DetailPokemon from './pages/detailPokemon';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Pokemon' element={<Pokemon />} />
        <Route path='/MyPokemons' element={<MyPokemon />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />

        <Route path='/DetailPokemon' element={<DetailPokemon />} />
      </Routes>
    </Router >
  );
}

export default App;