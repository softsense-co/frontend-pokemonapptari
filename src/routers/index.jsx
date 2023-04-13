import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { isLoggedIn } from '../services/auth';
import Hero from '../pages/hero';
import IndexPokemon from '../pages/dashboard/pokemons/index';
import Todos from '../pages/dashboard/todos';
import SignIns from '../pages/auth/signins';
import SignUps from '../pages/auth/signups';
import MyPokemons from '../pages/dashboard/my-pokemons';
import IndexUser from '../services/users';
import DetailPokemons from '../pages/dashboard/pokemons/[id]';

function IndexRouter() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Hero />}/>
            <Route path='/Todos' element={<Todos />} />
            <Route path='/Users' element={<IndexUser />} />

            <Route path="/Pokemons" element={isLoggedIn() ? <IndexPokemon /> : <Navigate to="/Login" />} />
            <Route path="/MyPokemons" element={isLoggedIn() ? <MyPokemons /> : <Navigate to="/Login" />} />
            <Route path='/pokemons/:id' element={<DetailPokemons />} />

            <Route path="/Login" element={!!isLoggedIn() ? <Navigate to="/" /> : <SignIns />} />
            <Route path='/SignUp' element={<SignUps />} />
        </Routes>
    </Router>
  )
}

export default IndexRouter