import React from "react";
import Header from "../components/header";

const DetailPokemon = () => {

    return (
        
       <div>
        <Header />
         <div class="bg-[#a9d5d3] items-center mt-10 p-6 rounded-3xl max-w-md mx-auto sm:max-w-lg md:max-w-2xl grid lg:grid-cols-2 lg:max-w-5xl xl:max-w-[75rem]">
            <div class="hidden lg:block px-5">
                <img src={require("../img/Charmeleon.png")} alt="event" class="w-[400px] xl:w-[450px] rounded-xl shadow-xl " />
            </div>
            <div class="lg:py-12 pr-10 ">
                <h2 class="text-3xl font-bold text-slate-700 md:text-3xl lg:text-4xl">Charmeleon</h2>
                <img src={require("../img/Charmeleon.png")} alt="event"
                    class="pt-4 rounded-xl shadow-xl w-[250px] mx-auto sm:py-10 sm:w-[300px] lg:hidden" />
                <p class="pt-7 text-slate-600 text-justify sm:pt-5 lg:pt-7 text-sm sm:text-base md:text-base">
                    Charmeleon is a bipedal, reptilian Pokémon. It has dark red scales and a cream underside from the chest down.
                    It has blue eyes and a long snout with a slightly hooked tip. On the back of its head is a single horn-like protrusion.
                </p>
                <div className="text-center pt-8 font-bold" >
                    <button className="rounded-3xl bg-[#cbe0de] px-16 py-2 text-slate-800 uppercase hover:bg-[#82b5b1]" >
                        Add To My Pokemon
                    </button>
                </div>

            </div>
        </div>
       </div>

    )

}

export default DetailPokemon 