import React from 'react'
import logo from '../assets/Icons/logo.svg'
import error_icon from '../assets/Icons/Error-icon.svg'
import translate_icon from '../assets/Icons/Translate-icon.svg'
import setting_icon from '../assets/Icons/Settings-icon.svg'
import battery_icon from '../assets/Icons/Battery-icon.svg'

function Navbar() {
  return (
    <section className='bg-[#222626]'>
        <div className="xl:px-12 xl:py-4 flex">
            <div className='w-3/4 flex justify-between '>
                <img src={logo} className='w-40 h-9'/>
                <div className='flex gap-10 '>
                    <div className='flex gap-2 border-r border-[#4A4A4A] pr-4'>
                        <img src={error_icon} className='w-4 h-4 mt-1'/>
                        <p className='text-[#B1B1B1] text-base font-medium inter'>Errors</p>
                    </div>
                    <div className='flex gap-2 border-r border-[#4A4A4A] pr-4'>
                        <img src={translate_icon} className='w-4 h-4 mt-1'/>
                        <p className='text-[#B1B1B1] text-base font-medium inter'>Language</p>
                    </div>
                    <div className='flex gap-2 '>
                        <img src={setting_icon} className='w-4 h-4 mt-1'/>
                        <p className='text-[#B1B1B1] text-base font-medium inter'>Settings</p>
                    </div>
                </div>
            </div>
                {/* time and Battery */}
              <div className='flex gap-16 xl:pl-36 xl:w-1/4'>
                <div className='flex gap-2'>
                    <img src={battery_icon} className='h-6 w-6'/>
                    <p className='text-lg font-bold text-[#B1B1B1]  inter'>98%</p>
                </div>
                <p className='text-base font-medium text-[#B1B1B1] inter'>01:34:22</p>
              </div>  
        </div>
    </section>
  )
}

export default Navbar