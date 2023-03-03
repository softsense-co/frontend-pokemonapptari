import React from 'react'

export const PokemonItem = () => {

    const traceButton = () => {
        console.log("Tombol Di Klik");
    }

    return (
        <div className="flex flex-col items-center justify-start px-[5rem] bg-[#9dc8c6] py-10 relative">
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:px-16 p-10 pb-20 gap-5 lg:gap-10">
                
                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/totodile.png")} alt="" className='w-full md:w-[15rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Totodile</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
                        <p className='text-slate-600'>
                            Price
                        </p>
                        <p className='text-slate-600 font-bold'>
                            US $45
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

                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/Charmeleon.png")} alt="" className='w-full md:w-[17rem] mx-auto py-7' />
                    <h5 className='text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase'>Charmeleon</h5>
                    <div className='text-sm md:text-base pb-2 text-left pl-3'>
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

                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/bulbasaur.png")} alt="" className='w-full md:w-[16rem] mx-auto py-7' />
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

                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/Chikorita.png")} alt="" className='w-full md:w-[16rem] mx-auto py-7' />
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

                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/Mewtwo.png")} alt="" className='w-full md:w-[13rem] mx-auto py-7' />
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

                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/squirtle.png")} alt="" className='w-full md:w-[17rem] mx-auto py-7' />
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

                <div className='bg-white/60 p-5 rounded-[35px]'>
                    <img src={require("../img/Meowth.png")} alt="" className='w-full md:w-[15rem] mx-auto py-7' />
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


            </div>
        </div>
    )
}

export default PokemonItem