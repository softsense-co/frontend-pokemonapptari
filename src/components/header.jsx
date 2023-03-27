import React from "react";
import { Link } from "react-router-dom";

function Header() {
    const buttonStyle = 'border-[1px] rounded-[10px] border-[#deedec] px-[20px] py-[7px]'

    return (
        <div className="header flex items-center justify-between px-20 lg:px-64 pt-4">
            {/* logo */}
            <Link to="/">
                <img src="/img/icon.png" alt="" className="logo w-[100px] h-[78px] " />
            </Link>

            {/* side center menu */}
            <div className="menu flex">
                <ul className="flex w-[100%] justify-between text-slate-800 font-semibold">
                    <li className=" mr-12 text-slate-700 hover:text-white">
                        <Link to="/">Home</Link>
                    </li>
                    <li className=" mr-12 text-slate-700 hover:text-white">
                        <Link to="/Pokemons">Pokemons</Link>
                    </li>
                    <li className=" mr-12 text-slate-700 hover:text-white">
                        <Link to="/MyPokemons">My Pokemons</Link>
                    </li>
                    <li className=" mr-12 text-slate-700 hover:text-white">
                        <Link to="/Todos">Todo</Link>
                    </li>
                    <li className=" mr-12 text-slate-700 hover:text-white">
                        <Link to="/Users">User</Link>
                    </li>
                   
                </ul>
            </div>

            {/* button */}
            <div className="buttons text-slate-700 font-medium ">
                <Link to="/SignIn">
                    <button className={buttonStyle + ` mr-2 hover:bg-[#deedec]`}>
                        Logout
                    </button>
                </Link>

            </div>
            
        </div>
    )
}

export default Header