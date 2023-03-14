import React, { useState, useEffect} from 'react'
import { FaMinus } from "react-icons/fa";

const MyPokemonItem = () => {

    const [pokemonData, setPokemonData] = useState([]);

    const handleGetPokemonData = () => {
        const dataFromStorage = localStorage.getItem("pokemonData");
        if (dataFromStorage) {
            setPokemonData(JSON.parse(dataFromStorage))
        }
    }

    useEffect(() => {
        handleGetPokemonData()
        return () => {
            
        }
    }, [])

    function deleteMyPokemon(id) {
        const newData = pokemonData.filter(p => p.id !== id);
        handleGetPokemonData([...newData]);
        console.log("Delete Data");
    };

    return (
        <div className="flex flex-col justify-start px-[5rem] py-8 relative">
            <img src="/img/hero2.png" alt="" className='lg:w-[200px] w-[150px] mx-auto' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8 gap-4 sm:gap-10 lg:gap-10">

                {/* From Storage */}
                {pokemonData.map(pokemon => {
                    return (
                        <div className='bg-white/75 p-4 rounded-3xl'>
                            <img key={pokemon.id} src={pokemon.image} alt="" className='h-52 mx-auto' />
                            <h5 className='text-slate-700 text-base md:text-lg font-semibold py-3  text-center uppercase'>{pokemon.name}</h5>
                            <div className='text-sm md:text-base pb-2 text-left pl-3'>
                                <p className='text-slate-600'>
                                    Price
                                </p>
                                <p className='text-slate-600 font-bold'>
                                    {pokemon.price}
                                </p>
                            </div>
                            <div className='text-right pr-3'>

                                <button
                                    onClick={() => deleteMyPokemon(pokemonData.id)}
                                    type="button"
                                    className='px-3 py-2 bg-[#55a8a3] text-slate-700 font-medium text-sm uppercase rounded-md hover:bg-[#bfdfde]'>
                                    <FaMinus />
                                </button>

                            </div>
                        </div>
                    );
                })}


            </div>
            
        </div>
    )
}

export default MyPokemonItem