import './App.css';
import Hero from './pages/hero';
import Pokemon from './pages/Pokemon';
import MyPokemon from './pages/MyPokemon';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DetailPokemon from './pages/detailPokemon';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Todo from './pages/Todo';
import TodoList from './pages/TodoList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Todo' element={<Todo />} />
        <Route path='/Todolist' element={<TodoList />} />
        <Route path='/Pokemon' element={<Pokemon />} />
        <Route path='/MyPokemons' element={<MyPokemon />} />
        <Route path='/DetailPokemon' element={<DetailPokemon />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </Router >
  );
}

export default App;