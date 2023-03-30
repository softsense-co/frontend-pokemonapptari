import React, { useState, useEffect } from 'react'
import { getPokemon, getPokemonName } from '../../../../services/pokemons';

import 'react-toastify/dist/ReactToastify.css';

const Index = () => {

    const [pokemonData, setPokemons] = useState([]);

    useEffect(() => {
        fetchPokemons();
    }, []);

    const fetchPokemons = async () => {
        try {
            const payload = await getPokemon();
            const promises = Array.from(payload?.data?.results || []).map(
                async (item) => {
                    const payloadDetail = await getPokemonName(item?.name || "");
                    return {
                        ...payloadDetail.data,
                        id: payloadDetail?.data?.name || "",
                        name: payloadDetail?.data?.name || "",
                        img:
                            payloadDetail?.data?.sprites.other.dream_world.front_default ||
                            "",
                    };
                }
            );
            const results = await Promise.all(promises);
            setPokemons(results);
        } catch (error) {
            console.log(error, "error");
        }
    };


    return (
        <div className="flex flex-col justify-start px-[5rem] py-8 relative">
            <h1 className='text-3xl font-bold text-slate-700 py-3'>Pokemons</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-8 gap-4 sm:gap-10 lg:gap-10">

                {/* Looping Data List */}
                {Array.from(pokemonData || []).map((item, index) => {
                    return (
                        <div key={index} id={item?.id} className='bg-white/75 p-4 rounded-3xl'>
                            <img src={item?.img} alt="" className='h-52 mx-auto' />
                            <h5 className='text-slate-700 text-base md:text-lg font-semibold py-3  text-center uppercase'>{item?.name}</h5>
                            
                        </div>
                    );

                })}

            </div>
        </div>
    )
}

export default Index