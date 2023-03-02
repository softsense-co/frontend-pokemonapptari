import React from "react";

function CenterMenu() {
    const liStyle = "mr-[3rem] hover:cursor-pointer"

    return (
       <div className="menu flex">
        <ul className="flex w-[100%] justify-between text-slate-800 font-semibold"> 
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Market Place</li>
            <li className={liStyle}>How To Buy</li>
        </ul>
       </div>
    )
}

export default CenterMenu 