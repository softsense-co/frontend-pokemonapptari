import React from 'react'

function Home() {

    const downloadImgStyle = 'border-[1px] border-[#232A4E] md:rounded-[9px] lg:rounded-[13px] lg:h-[3rem] h-[1.5rem] w-[5rem] md:h-[2rem] md:w-[7rem] lg:w-[10rem]'

    return (
        <div className="wrapper lg:flex items-center justify-between px-10 sm:px-10 md:px-24 lg:px-32 xl:px-36 2xl:px-52  w-[100%] h-[350px] sm:h-[290px] md:h-[400px] lg:h-[700px] z-[3]">
            {/* left side */}
            <div className="heading flex flex-col items-start justify-center text-slate-700 h-[100%] text-[14px] sm:text-[17px] md:text-[19px] lg:text-[2rem] xl:text-[3rem]">
                <span className='px-4'>Experience The</span>
                <span className='px-4 xl:text-[2.3rem] text-[16px] md:text-[24px] 2xl:text-[3rem]'>
                    <b>Best Quality Game</b>
                </span>

                {/* Center side Mobile screen */}
                <div className="block sm:hidden  w-[28%]">
                    <img
                        src="/img/pikachu.png"
                        alt=""
                        className="absolute left-[40px] top-[160px] h-[140px] "
                    />
                    <img
                        src="/img/Jigglypuff.png"
                        alt=""
                        className="absolute left-[240px] h-[80px]  "
                    />
                    <img
                        src="/img/wartortle.png"
                        alt=""
                        className="absolute top-[180px] left-[160px] h-[110px] "
                    />

                </div>

                <span className="text-[11px] sm:text-[12px] md:text-[13px] pt-[180px] sm:py-4 text-slate-600 text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>

                {/* download ads */}
                <div>
                    <span className="text-[10px] md:text-[12px] pt-2">Download now on IOS and Android</span>
                    <div className="download">
                        <div className="download_images flex">
                            <img
                                src={require("../img/App Store.png")}
                                alt=""
                                className={downloadImgStyle + ` mr-5`}
                            />
                            <img
                                src={require("../img/Google Play.png")}
                                alt=""
                                className={downloadImgStyle}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* right side */}
            <div className="hidden sm:block images relative md:w-[28%] lg:w-[90%] xl:w-[75%] 2xl:w-[60%]">
                <img
                    src="/img/pikachu.png"
                    alt=""
                    className="absolute lg:-top-56 md:-top-[300px] -top-[200px] md:left-[370px] left-[325px] h-[150px] md:h-[195px] lg:left-[5rem] lg:h-[350px] xl:h-[30rem]"
                />
                <img
                    src="/img/Jigglypuff.png"
                    alt=""
                    className="absolute md:h-[115px] h-[80px] left-[515px] -top-[220px] md:left-[570px] md:-top-[350px] lg:-top-[250px] lg:left-[450px] xl:left-[40rem] lg:h-[190px] xl:h-60"
                />
                <img
                    src="/img/wartortle.png"
                    alt=""
                    className="absolute h-[125px] left-[450px] -top-[150px]  md:h-[150px] md:left-[530px] md:-top-[270px] lg:-top-[130px] lg:left-[380px] xl:left-[30rem] lg:h-[270px] xl:h-[23rem]"
                />

            </div>

        </div>
    )
}

export default Home