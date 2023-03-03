import React from "react";

const DetailPokemon = () => {

    return (
        <div className="bg-[#ceeeed] py-16">
            <div
                class="bg-[#9dc8c6] p-6 rounded-xl font-sans max-w-md mx-auto sm:max-w-xl md:max-w-xl lg:flex lg:max-w-5xl xl:max-w-[1300px]">
                <div class="hidden lg:block">
                    <img src={require("../img/Charmeleon.png")} alt="event" class="object-cover pt-5 w-[300px] h-[300px]" />
                </div>
                <div class="lg:p-12">
                    <h2 class="text-3xl font-bold text-slate-200 md:text-4xl lg:text-5xl">Ours Events</h2>
                    {/* <img src={require("../img/Chikorita.png")} alt="event"
                            class="mt-4 rounded-xl shadow-xl sm:mt-6 sm:h-full sm:w-full sm:object-cover sm:object-center lg:hidden" /> */}
                    <p class="mt-2 text-slate-200 text-justify sm:pt-4 lg:pt-7 text-sm sm:text-base md:text-base">
                        Pokémon GO Tour: Hoenn - Las Vegas arrives in Nevada in February 2023. Your favorite Pokémon from the Hoenn
                        area Pokémon Ruby and Pokémon Sapphire make their way to Sunset Park! Pokémon GO Tour returns in 2023 for
                        Pokémon GO Tour: Hoenn - Las Vegas and Pokémon GO Tour: Hoenn - Global!
                    </p>

                </div>
            </div>
        </div>
    )

}

export default DetailPokemon 