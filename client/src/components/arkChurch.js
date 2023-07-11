import React from 'react';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdOutlineTravelExplore } from 'react-icons/md';


function ArkChurch() {
  return (
    <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16'>
      <div className='lg:col-span-2 flex flex-col justify-evenly'>
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className='py-4'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 gap-8 py-4'>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row items-center text-center'>
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className='py-2'>LEADING SERVICE</h3>
              <p className='py-1'>ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='border text-center'>
          <p className='pt-2 bg-gray-800 text-gray-200 py-2'>ARK YOUTH CHURCH</p>
          {/* <p className='py-4'>OUR MISSION</p>
          <p className='py-2'>BOOK NOW AND SAVE</p> */}
        </div>
        <form className='w-full'>
          <div className='flex flex-col my-2'>
            <label>Departments</label>
            <select className='border rounded-md p-2'>
              <option>Creative Art</option>
              <option>Protocol</option>
              <option>Sound</option>
              <option>Sanitary</option>
            </select>
          </div>
          <div className='flex flex-col my-4'>
            <label>Name</label>
            <input className='border rounded-md p-2' type="text" />
          </div>
          <div className='flex flex-col my-2'>
            <label>Phone number</label>
            <input className='border rounded-md p-2' type="tel" />
          </div>
          <div className='flex flex-col my-2'>
            <label>Location</label>
            <input className='border rounded-md p-2' type="tel" />
          </div>
          <button className='w-full my-4 border-2 border-black rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200'>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default ArkChurch