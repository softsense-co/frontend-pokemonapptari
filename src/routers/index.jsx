import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
            <Route path='/Pokemons' element={<IndexPokemon />} /> 
            <Route path='/DetailPokemon' element={<DetailPokemons />} />
            <Route path='/MyPokemons' element={<MyPokemons />} />

            <Route path='/Users' element={<IndexUser />} />

            <Route path='/SignIn' element={<SignIns />} />
            <Route path='/SignUp' element={<SignUps />} />
        </Routes>
    </Router>
  )
}

export default IndexRouter