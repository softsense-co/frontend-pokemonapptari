import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../services/auth";
import { useNavigate } from "react-router-dom"

function Header() {
    const buttonStyle = 'border-[1px] rounded-[10px] border-[#deedec] px-[20px] py-[7px]'
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    function handleOnClick() {
        localStorage.removeItem("authToken");
        window.location.href = "/Login"
    }

    function handleCancel() {
        setModal(false);
    }

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
                    {isLoggedIn() && (
                        <>
                            <li className=" mr-12 text-slate-700 hover:text-white">
                                <Link to="/Pokemons">Pokemons</Link>
                            </li>
                            <li className=" mr-12 text-slate-700 hover:text-white">
                                <Link to="/MyPokemons">My Pokemons</Link>
                            </li>
                        </>
                    )}
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
                <label htmlFor="my-modal" className={buttonStyle + ` mr-2 hover:bg-[#deedec]`}>Log Out</label>
                <input type="checkbox" id="my-modal" className="modal-toggle" checked={modal} onChange={() => setModal(!modal)} />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box text-left bg-slate-800">
                        <h3 className="font-semibold text-white text-base ">Are you sure to Sign out?</h3>
                        <div className="modal-action">
                            <button className="btn btn-sm bg-slate-600" onClick={handleCancel}>Cancel</button>
                            <button className="btn btn-sm btn-accent" onClick={handleOnClick}>Yes !</button>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default Header