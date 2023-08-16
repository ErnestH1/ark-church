import React from 'react'
import Navbar from '../../components/Safina/navbar'
import Footer from '../../components/Safina/footer'
import Banner1 from '../../components/Events/banner1'
import Banner2 from '../../components/Events/banner2'
import Banner3 from '../../components/Events/banner3'


function Events() {
    return (
        <>
            <Navbar />
            <div className="flex flex-col w-full" id="NewRootRoot">
                <div className="overflow-hidden bg-white flex flex-col" id="Desktop">
                    <div className="bg-[url(https://file.rendit.io/n/q1wX6sn8kCWVylrrcci1.png)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-col pt-6 pb-24" id="Image1" >
                        <div className="bg-[#d9d9d9] h-12 shrink-0 mb-6 ml-10 mr-8 rounded-lg" >
                            {/* Fix Text */}
                        </div>
                        {/* The First Component Banner*/}

                        <Banner1 />

                        {/* End Component Banner */}
                        {/* ------------------------------------------------------------------------------------------------ */}
                        {/* The second Component Banner*/}

                        <Banner2 />

                        {/* The End second Component Banner*/}
                        {/* ------------------------------------------------------------------------------------------------ */}
                        {/* The  Third Component Banner*/}

                        <Banner3 />

                        {/* The End Third Component Banner*/}
                        {/* ------------------------------------------------------------------------------------------------ */}
                    </div>
                </div>
                {/* The End Desktop */}
                <Footer />
                {/* The End Footer */}
            </div>
        </>
    )
}

export default Events