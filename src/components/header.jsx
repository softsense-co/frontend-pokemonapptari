import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const buttonStyle = 'border-[1px] rounded-[10px] border-[#deedec] px-[20px] py-[7px]'

    return (
        <div className="header flex items-center justify-between px-20 pt-5">
            {/* logo */}
            <Link to="/">
                <img src={require("../img/icon.png")} alt="" className="logo w-[100px] h-[80px] " />
            </Link>

            {/* side center menu */}
            <div className="menu flex">
                <ul className="flex w-[100%] justify-between text-slate-800 font-semibold">
                    <li className=" mr-12 hover:text-white/95">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" mr-12 hover:text-white/95">
                        <Link to="/Pokemon">Pokemons</Link>
                    </li>
                    <li className=" mr-12 hover:text-white/95">
                        <Link to="/MyPokemons">My Pokemons</Link>
                    </li>
                    <li className=" mr-12 hover:text-white/95">
                        <Link to="/DetailPokemon">Detail Example</Link>
                    </li>
                </ul>
            </div>

            {/* button */}
            <div className="buttons text-slate-700 font-medium ">
                <button className={buttonStyle + ` mr-2 hover:bg-[#deedec]`}>Sign In</button>
            </div>
        </div>
    )
}

export default Header