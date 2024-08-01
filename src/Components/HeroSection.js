import React, { useState } from 'react'
import cross_icon from '../assets/Icons/Cross_icon.svg'
import machine_img from '../assets/Images/Machine-img.png'

function HeroSection() {
    const [passcode, setPasscode] = useState(Array(6).fill(''));

  const handleClick = (value) => {
    const newPasscode = [...passcode];
    const index = newPasscode.findIndex((digit) => digit === '');
    if (index !== -1) {
      newPasscode[index] = value;
      setPasscode(newPasscode);
    }
  };

  const handleDelete = () => {
    const newPasscode = [...passcode];
    const index = newPasscode.findLastIndex((digit) => digit !== '');
    if (index !== -1) {
      newPasscode[index] = '';
      setPasscode(newPasscode);
    }
  };

  return (
   <section className='bg-[#222626] h-screen'>
       <div className='xl:px-12 py-20 xl:flex'>
                {/* Left Part */}
               <div className='xl:w-1/2 flex justify-center items-center'>
                       <div className='flex flex-col  gap-1'>
                       <div className='flex  gap-1'>
                            <div className='w-28 h-14 flex justify-center bg-[#314B4C] items-center rounded-l-lg'>
                                <p className='text-[#A4FCFD] text-sm font-bold inter'>Admin</p>
                            </div>
                            <div className='w-28 h-14 flex justify-center bg-[#303A3A] items-center rounded-r-lg'>
                                <p className='text-[#40B2B2] text-sm font-normal inter'>Operator</p>
                            </div>
                       </div>
                            {/* Keypad */}
                
                            <h2 className="text-base font-medium text-[#DEFFFF] text-center py-2 inter">Enter Passcode</h2>
                            <div className="flex justify-center mb-8">
                                {passcode.map((digit, idx) => (
                                <div
                                    key={idx}
                                    className={`w-4 h-4 mx-1 border-2 border-[#345455]  rounded-full ${
                                    digit ? 'bg-[#BBEBEC]' : 'bg-[#222626]'
                                    }`}
                                ></div>
                                ))}
                            </div>
                        <div className="grid grid-cols-3 gap-4 w-64">
                            {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                            <button
                                key={num}
                                onClick={() => handleClick(num)}
                                className="w-[60px] h-[60px] bg-[#303A3A] inter text-[#DEFFFF] rounded-full font-semibold text-[27.5px] flex items-center justify-center"
                            >
                                {num}
                            </button>
                            ))}
                            <div className="w-[60px] h-[60px]"></div>
                            <button
                            onClick={() => handleClick(0)}
                            className="w-[60px] h-[60px] bg-[#303A3A] rounded-full text-[#DEFFFF] font-semibold text-[27.5px] flex items-center justify-center"
                            >
                            0
                            </button>
                            <button
                            onClick={handleDelete}
                            className="w-[60px] h-[60px] bg-[#303A3A] rounded-full text-xl flex items-center justify-center"
                            >
                            <img src={cross_icon}/>
                            </button>
                        </div>
                    </div>
                    
               </div> 
               {/* Right Part */}
               <div>
                <img src={machine_img} className=''/>
               </div>
       </div>
   </section>
  )
}

export default HeroSection