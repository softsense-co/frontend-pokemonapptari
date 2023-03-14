import React, { useState, useEffect} from 'react'
import { FaMinus } from "react-icons/fa";

const MyPokemonItem = () => {

    const [pokemonDatas, setPokemonData] = useState([]);

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

    const deleteMyPokemon = (id) => {
        console.log(id);
        const newArray = pokemonDatas.filter(p => p.id !== id);
        setPokemonData([...newArray]);
        localStorage.setItem('pokemonData', JSON.stringify([...newArray]));
        // const deleteItems = pokemonDatas.filter((elem, ind) => {
        //     return ind !== id;
        // });
        // setPokemonData(deleteItems);
    }

    return (
        <div className="flex flex-col justify-start px-[5rem] py-8 relative">
            <img src="/img/hero2.png" alt="" className='lg:w-[200px] w-[150px] mx-auto' />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8 gap-4 sm:gap-10 lg:gap-10">

                {/* From Storage */}
                {pokemonDatas.map(pokemon => {
                    return (
                        <div className='bg-white/75 p-4 rounded-3xl' key={pokemon.id}>
                            <img src={pokemon.image} alt="" className='h-52 mx-auto' />
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
                                    onClick={() => deleteMyPokemon(pokemon.id)}
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