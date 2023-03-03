import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#bad8d8] px-[20px] py-[7px]'

    return (
        <div className="header bg-[#ceeeed] flex items-center justify-between px-20 pt-5">
            {/* logo */}
            <Link to="/">
                <img src={require("../img/icon.png")} alt="" className="logo w-[100px] h-[80px] " />
            </Link>

            {/* side center menu */}
            <div className="menu flex">
                <ul className="flex w-[100%] justify-between text-slate-800 font-semibold">
                    <li className=" mr-12">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" mr-12">
                        <Link to="/Pokemon">Pokemons</Link>
                    </li>
                    <li className=" mr-12">
                        <Link to="/MyPokemons">My Pokemons</Link>
                    </li>
                </ul>
            </div>

            {/* button */}
            <div className="buttons flex text-slate-700 ">
                <button className={buttonStyle + ` mr-2 hover:bg-[#9dc8c6]`}>Sign In</button>
            </div>
        </div>
    )
}

export default Header