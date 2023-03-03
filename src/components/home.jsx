import React from 'react'
import DownloadAds from './downloadAds'

function Home() {
  return (
    <div className="wrapper lg:flex items-center justify-between px-40  w-[100%] h-[850px]  z-[3]">
                {/* left side */}
                <div className="heading flex flex-col items-start justify-center text-slate-700 h-[100%] text-[3rem]">
                    <span>Experience The</span>
                    <span>
                        <b>Best Quality Game</b>
                    </span>
                    <span className="text-[15px] text-slate-600 text-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br />
                        Lorem, ipsum dolor sit amet consectetur
                    </span>

                    {/* download ads */}
                    <div>
                        <span className="text-[13px]">Download now on IOS and Android</span>
                        <DownloadAds />
                    </div>
                </div>

                {/* right side */}
                <div className="images relative w-[60%] ">
                    <img
                        src={require("../img/pikachu.png")}
                        alt=""
                        className="absolute -top-60 left-[5rem] h-[30rem]"
                    />
                    <img
                        src={require("../img/Jigglypuff.png")}
                        alt=""
                        className="absolute -top-60   left-[40rem] h-60"
                    />
                    <img
                        src={require("../img/wartortle.png")}
                        alt=""
                        className="absolute -top-20 left-[30rem] h-[23rem]"
                    />

                </div>
            </div>
  )
}

export default Home