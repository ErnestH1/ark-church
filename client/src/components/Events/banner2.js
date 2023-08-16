import React from 'react';

function Events() {
  return (
    <>
      <div className="text-2xl md:text-4xl lg:text-5xl font-['Inter'] font-bold self-end w-full md:w-auto mb-5 md:mb-10 mr-0 md:mr-4 lg:mr-[599px]">
        <p>EVENTS</p>
      </div>

      <div className="bg-[url(https://file.rendit.io/n/QzteZ71X4L0K9yHOzuEL.png)] bg-cover bg-center bg-blend-normal bg-no-repeat flex flex-col md:flex-row gap-1 h-auto md:h-[457px] lg:h-auto items-center mb-4 md:mb-24 lg:mb-0 ml-4 md:ml-20 mr-4 md:mr-16 pl-4 md:pl-16 pr-4 md:pr-12" id="OCWJW">
        <div className="relative flex flex-col pt-px w-full md:w-1/2">
          <img src="https://file.rendit.io/n/0w3Yhx9ACanaF5vGgCiy.svg" alt='a' className="w-full md:w-auto h-auto md:h-[307px] absolute top-0 left-0" />
          <div className="bg-black/56.00000000000001 relative mr-2 h-[305px] shrink-0" />
        </div>
        <div className="flex flex-col gap-1 w-full md:w-1/2">
          <div className="whitespace-nowrap text-2xl md:text-4xl lg:text-5xl font-['Inter'] font-black text-white ml-2 md:ml-8 mr-2 md:mr-10">
            UPCOMING EVENTS
          </div>
          <div className="text-center text-xl md:text-4xl lg:text-5xl font-['Istok_Web'] tracking-[-2] text-white">
            "Enriching faith through inspiring events"
          </div>
        </div>
      </div>


    </>
  );
}

export default Events;
