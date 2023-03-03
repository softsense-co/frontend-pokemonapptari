import React from 'react'
import Header from '../components/header'
import PokemonItem from '../components/pokemonItem'
import DetailPokemon from './detailPokemon'

function Pokemon() {
  return (
    <div>
      <Header />
      <PokemonItem />
    </div>
  )
}

export default Pokemon