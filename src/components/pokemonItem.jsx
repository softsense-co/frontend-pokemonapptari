import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";


const PokemonItem = () => {

    const [myPokemons, setMyPokemon] = useState((""));
    const [pokemons, setPokemons] = useState([
        {
            id: "1",
            name: "Charmeleon",
            image: '/img/Charmeleon.png',
            price: " US $38"
        },
        {
            id: "2",
            name: "Totodile",
            image: '/img/totodile.png',
            price: " US $45"
        },
        {
            id: "3",
            name: "Bulbasaur",
            image: '/img/bulbasaur.png',
            price: " US $40"
        },
        {
            id: "4",
            name: "Chikorita",
            image: '/img/Chikorita.png',
            price: " US $33"
        },
        {
            id: "5",
            name: "Lapras",
            image: '/img/Lapras.png',
            price: " US $36"
        },
        {
            id: "6",
            name: "Eevee",
            image: '/img/Eevee.png',
            price: " US $34"
        },
        {
            id: "7",
            name: "Meowth",
            image: '/img/Meowth.png',
            price: " US $40"
        },
        {
            id: "8",
            name: "Wartortle",
            image: '/img/wartortle.png',
            price: " US $38"
        },
        {
            id: "9",
            name: "Charmeleon",
            image: '/img/Charmeleon.png',
            price: " US $38"
        },
        {
            id: "10",
            name: "Blastoise",
            image: '/img/Blastoise.png',
            price: " US $38"
        },
        {
            id: "11",
            name: "Espurr",
            image: '/img/Espurr.png',
            price: " US $38"
        },
        {
            id: "12",
            name: "Goodra",
            image: '/img/Goodra.png',
            price: " US $38"
        },
        {
            id: "13",
            name: "Pancham",
            image: '/img/Pancham.png',
            price: " US $38"
        },
        {
            id: "14",
            name: "Piplup",
            image: '/img/piplup.png',
            price: " US $38"
        },
        {
            id: "15",
            name: "Shinx",
            image: '/img/Shinx.png',
            price: " US $38"
        },
    ]);

    const handleChangePokemon = (values) => {
        setPokemons(values)
        localStorage.setItem("pokemonitems", JSON.stringify(values))
    }

    const handleGetPokemon = () => {
        const dataFromStorage = localStorage.getItem("pokemonitems");
        if (dataFromStorage) {
            setMyPokemon(JSON.parse(dataFromStorage))
        }
    }

    useEffect(() => {
        handleGetPokemon()

        return () => {

        }
    }, [])


    function addPokemon() {
        if (myPokemons !== "") {
            handleChangePokemon([...pokemons, { myPokemons, id: `${myPokemons}-${Date.now()}` }]);
            setMyPokemon("")
        }
        console.log("Tombol diklik");
    };

    function deletePokemon(id) {
        const newPokemon = pokemons.filter(p => p.id !== id);
        handleChangePokemon([...newPokemon]);
    }




    return (
        <div className="flex flex-col justify-start px-[5rem] py-8 relative">
            <h1 className='text-3xl font-bold text-slate-700 py-3'>Pokemons</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8 gap-4 sm:gap-10 lg:gap-10">

                {/* Looping array object */}
                {pokemons.map(pokemon => {
                    return (
                        <div className='bg-white/75 p-4 rounded-3xl'>
                            <Link to="/DetailPokemon">
                                <img src={pokemon.image} alt="" className='h-52 mx-auto' />
                                <h5 className='text-slate-700 text-lg md:text-xl font-bold py-3  text-center uppercase'>{pokemon.name}</h5>
                            </Link>
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
                                    onClick={() => addPokemon()}
                                    type="button"
                                    className='px-3 py-2 bg-[#55a8a3] text-slate-700 font-medium text-sm uppercase rounded-md hover:bg-[#bfdfde]'>
                                    Add
                                </button>

                            </div>
                        </div>
                    );
                })}

                {/* Looping array object */}
                {pokemons.map(myPokemons => {
                    return (
                        <div className='bg-white/75 p-4 rounded-[35px]'>
                            <li key={myPokemons.id}>{myPokemons.myPokemons}</li>
                            <div className='text-right pr-3'>
                                <button
                                    onClick={() => deletePokemon(myPokemons.id)}
                                    type="button"
                                    className='px-3 py-2.5 bg-[#b2d7d5] text-slate-800 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default PokemonItem