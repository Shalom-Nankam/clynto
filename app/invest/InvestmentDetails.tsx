"use client";
import React, { useState } from "react";
import icons from '../assets/icons'
import Image from 'next/image'





function InvestmentDetails() {
    const [shareAmount, setShareAmount] = useState<number>(20000.21);
const [preferredAPR, setPreferredAPR] = useState<number>(8.4324);


  return (
    <div className="px-4 py-8 rounded-2xl border flex flex-col
    gap-y-4 border-[#A3ABBD] w-full mt-10 max max-w-[811px]">
    <div className="flex items-center justify-between ">
      <div className="flex space-x-2">
     <Image src={icons.Coin} alt="coin" className="w-8 h-8" />
          <p className="text-md text-white text-[18px]">Set Your Share Amount</p>
        </div>
      <div className="flex space-x-1">
      
      <Image
            src={icons.Minus}
            alt=""
           
            className="mx-auto cursor-pointer"
            onClick={() =>
              setShareAmount((prev) => Math.max(prev - 100, 0))
            }
          />
          
          <input
            type="number"
            value={shareAmount}
            onChange={(e) => setShareAmount(Number(e.target.value))}
            className="font-medium bg-transparent text-white  border-none outline-none text-center w-24"
          />
          <Image
            src={icons.Plus}
            alt=""
           
            className="mx-auto cursor-pointer"
            onClick={() => setShareAmount((prev) => prev + 100)}
          />
      </div>
    </div>
    <div className="flex items-center justify-between ">
      <div className="flex space-x-2">
     <Image src={icons.Coin} alt="coin" className="w-8 h-8" />
          <p className="text-[18px] text-white">Set Prefered APR</p>
        </div>
      <div className="flex space-x-1">

      <Image
            src={icons.Minus}
            alt=""
            className="mx-auto cursor-pointer "
            onClick={() =>
              setPreferredAPR((prev) => Math.max(prev - 0.1, 0))
            }
          />
          <input
            type="number"
            value={preferredAPR}
            step="0.01"
            onChange={(e) => setPreferredAPR(Number(e.target.value))}
            className="font-medium bg-transparent text-white border-none outline-none text-center w-24"
          />
          <Image
            src={icons.Plus}
            alt=""
            className="mx-auto cursor-pointer"
            onClick={() => setPreferredAPR((prev) => prev + 0.1)}
          />
      </div>
    </div>
    
    <div className="flex items-center justify-start  text-[#E4ECCE] gap-x-4">
      <span className="font-lg text-brandGreen">Expected Earnings</span>
      <span className="tracking-widest  text-base text-gray-400 ">Daily Expected Interest Amount 17.93 USDC</span>
    </div>
  </div>
  )
}

export default InvestmentDetails