import React from 'react'
import { Link } from "react-router-dom";

export const PokemonItem = () => {

    const traceButton = () => {
        console.log("Tombol Di Klik");
        alert("Tombol diklik")
    }

    const pokemons = [
        {
            name: "Totodile",
            image: require("../img/totodile.png"),
            price: " US $45"
        },
        {
            name: "Bulbasaur",
            image: require("../img/bulbasaur.png"),
            price: " US $40"
        },
        {
            name: "Chikorita",
            image: require("../img/Chikorita.png"),
            price: " US $33"
        },
        {
            name: "Grookey",
            image: require("../img/grookey.png"),
            price: " US $37"
        },
        {
            name: "Lapras",
            image: require("../img/Lapras.png"),
            price: " US $36"
        },
        {
            name: "Eevee",
            image: require("../img/Eevee.png"),
            price: " US $34"
        },
        {
            name: "Meowth",
            image: require("../img/Meowth.png"),
            price: " US $40"
        },
        {
            name: "Wartortle",
            image: require("../img/wartortle.png"),
            price: " US $38"
        },
    ];

    return (
        <div className="flex flex-col items-center justify-start px-[5rem] py-8 relative">
            <h1 className='text-4xl font-extrabold text-slate-700 py-3'>Pokemons</h1>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:px-10 py-8 gap-4 sm:gap-10 md:gap-12 lg:gap-10">


                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <Link to="/DetailPokemon">
                        <img src={require("../img/Charmeleon.png")} alt="" className='w-full md:w-[18rem] mx-auto py-7' />
                        <h5 className='text-slate-700 text-lg md:text-xl text-center font-bold mb-2 uppercase'>Charmeleon</h5>
                    </Link>
                    <div className='text-sm md:text-base pb-2  pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $33
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className=' px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                {/* Looping array object */}
                {pokemons.map(pokemon => {
                    return (
                        <div className='bg-white/75 p-5 rounded-[35px]'>
                            <img src={pokemon.image} alt="" className='w-full md:w-[13.5rem] mx-auto py-7' />
                            <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2  text-center uppercase'>{pokemon.name}</h5>
                            <div className='text-sm md:text-base pb-2 text-left pl-3'>
                                <p className='text-slate-600'>
                                    Price
                                </p>
                                <p className='text-slate-600 font-bold'>
                                    {pokemon.price}
                                </p>
                            </div>
                            <div className='text-right pr-3'>
                                <button onClick={() => traceButton()}
                                    type="button"
                                    className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                                    Add
                                </button>
                            </div>
                        </div>
                    );
                })}


                {/* 
                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/bulbasaur.png")} alt="" className='w-full md:w-[14rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Bulbasaur</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $38
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Chikorita.png")} alt="" className='w-full md:w-[14rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Chikorita</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $37
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Mewtwo.png")} alt="" className='w-full md:w-[11.5rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Mewtwo</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $40
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/squirtle.png")} alt="" className='w-full md:w-[18rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Squirtle</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $39
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Meowth.png")} alt="" className='w-full md:w-[13rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Meowth</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $39
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Eevee.png")} alt="" className='w-full md:w-[13rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Evee</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/grookey.png")} alt="" className='w-full md:w-[11.5rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Grookey</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Lapras.png")} alt="" className='w-full md:w-[14rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Lapras</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Mudkip.png")} alt="" className='w-full md:w-[11.4rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Mudkip</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/wartortle.png")} alt="" className='w-full md:w-[15rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Wartortle</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/pikachu.png")} alt="" className='w-full md:w-[14rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Pikachu</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div>

                <div className='bg-white/75 p-5 rounded-[35px]'>
                    <img src={require("../img/Jigglypuff.png")} alt="" className='w-full md:w-[20rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Jigglypuff</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
                        </p>
                    </div>
                    <div className='text-right pr-3'>
                        <button
                            type="button"
                            className='px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]'>
                            Add
                        </button>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default PokemonItem