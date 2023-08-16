import React from 'react'

function Banner3() {
    return (


        //The Slider
        <>
            <div className="flex flex-row gap-1 items-end ml-20 mr-2">
                <div className="bg-[#d9d9d9] relative flex flex-col w-[364px] shrink-0 items-center mt-3 mr-24 pb-2 px-1">
                    <div className="whitespace-nowrap text-5xl font-['Inter'] font-semibold absolute top-16 left-20 h-32 w-1/2" id="RISINGSTARS">
                        RISING <br />STARS
                    </div>
                    <img
                        src="https://file.rendit.io/n/ppNpcb4LnSG3mgB6av6X.png"
                        className="relative"
                        id="IMG1"
                        alt='Nice'
                    />
                </div>
                {/* The slide */}
                <div className="self-start relative flex flex-col mr-24 w-[364px] shrink-0 items-center">
                    <div className="whitespace-nowrap text-5xl font-['Inter'] font-semibold absolute top-[109px] left-12 h-16 w-[267px]">
                        MAIN EXP
                    </div>
                    <img
                        src="https://file.rendit.io/n/ub43FsWbzxdlU2CDjBTt.svg"
                        className="relative"
                        alt='Nice'
                    />
                </div>
                <img
                    src="https://file.rendit.io/n/UA9EZq4Qme2pYitmGtAH.svg"
                    className=""
                    alt='Nice'
                />
                <img
                    src="https://file.rendit.io/n/MZzU7q5pMQbfZ2ggpTAB.svg"
                    className="mb-20 w-12 shrink-0"
                    id="Arrowrightsolid"
                    alt='Nice'
                />
            </div>
        </>
    )
}

export default Banner3