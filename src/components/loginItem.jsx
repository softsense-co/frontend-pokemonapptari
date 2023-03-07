import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const buttonStyle = 'bg-[#b1ced8] rounded-[8px]  py-1'

    return (
        // screen
        <div className='flex w-full  lg:w-full h-screen  items-center justify-center'>
            {/* screen dalam */}
            <div className=' flex bg-white/80 py-20 rounded-3xl '>
                {/* form login */}
                <div className='pl-20 md:pr-10'>
                    <h1 className='text-3xl font-extrabold text-center py-8 text-slate-600'>SIGN IN</h1>
                    <img src={require("../img/icon2.jpg")} alt="" className='md:hidden rounded-3xl py-5' />
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='email' className='text-sm font-medium text-slate-600'>Email</label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)}
                                type='email' id='email' name='email'
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1'
                                placeholder='emailaddres@gmail.com' />
                        </div>
                        <div className='pt-5'>
                            <label htmlFor='password' className='text-sm font-medium text-slate-600'>Password</label>
                            <input value={pass} onChange={(e) => setPass(e.target.value)}
                                type='password' id='password' name='password'
                                className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1'
                                placeholder='**********' />
                        </div>
                    </form>
                    <button className='pt-2 font-medium text-xs text-[#70928e] hover:text-[#5f6060]'>Forgot Password</button>

                    {/* BUTTON */}
                    <div className='flex flex-col gap-y-4 py-10'>
                        <button className={buttonStyle + ` mr-2 hover:bg-[#deedec] text-slate-600 font-semibold`}>Sign In</button>
                        <Link to="/SignUp">
                            <button
                                className='font-semibold text-xs text-[#83a9a5] hover:text-[#5f6060]'
                                onClick={() => props.onFormSwitch('register')}>Don't have an account? Sign Up</button>
                        </Link>

                    </div>
                </div>

                {/* img login */}
                <div className='px-10 flex items-center'>
                    <img src={require("../img/icon6.jpg")} alt="" className='hidden md:block rounded-2xl md:w-[43rem]' />
                </div>

            </div>
            {/* screen dalam */}
        </div>
    )
}

export default Login