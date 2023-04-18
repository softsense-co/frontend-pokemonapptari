import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { isLoggedIn } from "../services/auth";


function Header() {
    const buttonStyle = 'border-[1px] rounded-[10px] border-[#deedec] px-[20px] py-[7px]'
    const [modal, setModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        const authToken = localStorage.getItem('authToken');
        if (authToken) {
            setIsLogin(true);
        }
    }, []);

    function handleLogin() {
        window.location.href = "/Login"
    }

    function handleLogout() {
        localStorage.removeItem("authToken");
        setIsLogin(false);
        window.location.href = "/"
    }

    function handleModal() {
        setModal(true);
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

            {/* button Login : Logout */}
            <div className="buttons text-slate-700 font-medium ">
                <button
                    onClick={isLogin ? handleModal : handleLogin}
                    className={buttonStyle + ` mr-2 hover:bg-[#deedec]`}>
                    {isLogin ? 'Logout' : 'Sign In'}
                </button>

                {modal && (
                    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center">
                        <input type="checkbox" id="my-modal" className="modal-toggle" checked={modal}/>
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box text-left bg-slate-800">
                                <p className="text-sm text-red-500 py-2">Logout Confirmation</p>
                                <h3 className="font-semibold text-white text-base ">Are you sure to Logout ?</h3>
                                <div className="modal-action">
                                    <button className="btn btn-sm bg-slate-500" onClick={() => setModal(false)}>Cancel</button>
                                    <button className="btn btn-sm bg-red-600" onClick={handleLogout}>Logout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Header