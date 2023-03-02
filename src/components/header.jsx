import React from "react";
import CenterMenu from "./centerMenu";

function Header() {
    const buttonStyle = 'border-[2px] rounded-[10px] border-[#bad8d8] px-[20px] py-[7px]'

    return (
        <div className="header bg-[#ceeeed] flex items-center justify-between px-20 pt-5">
            {/* logo */}
            <img src={require("../img/icon.png")} alt="" className="logo w-[100px] h-[80px] "/>

            {/* side menu */}
             <CenterMenu />

            {/* button */}
            <div className="buttons flex text-slate-700 ">
                <button className={buttonStyle+` mr-2 hover:bg-[#9dc8c6]`}>Sign In</button>
                <button className={buttonStyle+` mr-[35px] bg-[#9dc8c6] hover:bg-[#d6f5f3]`}>Sign Up</button>
            </div>
        </div>
    )
}

export default Header