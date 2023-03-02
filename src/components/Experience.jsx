import React from 'react'
import Feature from './Feature'

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#9dc8c6] h-[70rem] pt-72 mt-[-10rem] relative z-[2]">
      {/* titld icon */}
      <img src={require("../img/hero2.png")} alt="" className="h-36" />
      {/* heading */}
      <div className="headline  flex flex-col items-center text-2xl text-slate-700">
        <span><b>Experience Pokemon Game</b></span>
      </div>


      {/* features  */}
      <div className="feature flex flex-row items-center justify-around mt-24 w-[100%]">

        <div class="rounded-[45px] flex md:block bg-white/30 md:w-[300px]">
          <div class="w-full">
            <a href="#">
              <img class="w-full md:w-[16rem] mx-auto py-7" src={require("../img/totodile.png")} alt="" />
            </a>
          </div>
          <div class="mx-auto pb-5">
            <h5 class="text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase">Totodile</h5>
            <div class="text-sm md:text-base pb-2">
              <p class="text-slate-600">
                Price
              </p>
              <p class="text-slate-600 font-bold">
                US $72,5
              </p>
            </div>
            <button type="button"
              class=" px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]">
              Add
            </button>
          </div>
        </div>

        <div class="rounded-[45px] flex md:block bg-white/30 md:w-[300px]">
          <div class="w-full">
            <a href="#">
              <img class="w-full md:w-[12.5rem] mx-auto py-7" src={require("../img/Mudkip.png")} alt="" />
            </a>
          </div>
          <div class="mx-auto pb-5">
            <h5 class="text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase">Mudkip</h5>
            <div class="text-sm md:text-base pb-2">
              <p class="text-slate-600">
                Price
              </p>
              <p class="text-slate-600 font-bold">
                US $72,5
              </p>
            </div>
            <button type="button"
              class=" px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]">
              Add
            </button>
          </div>
        </div>

        <div class="rounded-[45px] flex md:block bg-white/30 md:w-[300px]">
          <div class="w-full">
            <a href="#">
              <img class="w-full md:w-[14rem] mx-auto py-7" src={require("../img/Mewtwo.png")} alt="" />
            </a>
          </div>
          <div class="mx-auto pb-5">
            <h5 class="text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase">Mewtwo</h5>
            <div class="text-sm md:text-base pb-2">
              <p class="text-slate-600">
                Price
              </p>
              <p class="text-slate-600 font-bold">
                US $72,5
              </p>
            </div>
            <button type="button"
              class=" px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]">
              Add
            </button>
          </div>
        </div>

        <div class="rounded-[45px] flex md:block bg-white/30 md:w-[300px]">
          <div class="w-full">
            <a href="#">
              <img class="w-full md:w-[17.5rem] mx-auto py-7" src={require("../img/squirtle.png")} alt="" />
            </a>
          </div>
          <div class="mx-auto pb-5">
            <h5 class="text-slate-700 text-lg md:text-xl  font-bold mb-2 uppercase">Squirtle</h5>
            <div class="text-sm md:text-base pb-2">
              <p class="text-slate-600">
                Price
              </p>
              <p class="text-slate-600 font-bold">
                US $72,5
              </p>
            </div>
            <button type="button"
              class=" px-5 py-2.5 bg-[#55a8a3] text-slate-900 font-semibold text-sm uppercase rounded-xl hover:bg-[#bfdfde]">
              Add
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Experience