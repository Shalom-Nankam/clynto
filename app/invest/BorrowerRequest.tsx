import React from "react";
import Image from "next/image";
import images from "../assets/images";

function BorrowerRequest() {
  return (
    <div
      className="p-2 items-center flex justify-between rounded-2xl 
  bg-[#46536B] w-full relative "
    >
      <div className="absolute top-0 text-white  left-4 bg-black text-[10px] p-[2px] rounded-sm">
        starting in <span className="text-brandGreen">38 hours</span>
      </div>
      <div className="bg-transparent flex-1 py-1 pl-4 flex items-center space-x-5">
        <div className="flex flex-col space-y-2 items-center">
          <Image src={images.User} alt="user" className="w-[60px] h-[60px]" />
          <p className="text-[18px] whitespace-nowrap text-brandGreen">75% Collected</p>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4">
            <div className="flex flex-col">
              <p className="text-white text-bold text-[19px] font-light">Requested Amount</p>
              <p className=" text-bold text-[19px]  text-brandGreen">85,000</p>
            </div>
            <div className="flex flex-col mt-1 space-y-2">
              <p className="text-white text-bold text-md font-light">APR</p>
              <p className="text-brandGreen text-bold text-md">Tier-0</p>
            </div>
          </div>
          <p className="text-[12px] text-white whitespace-nowrap  mr-4 tracking-widest">

Borrower Intends To Payback in 23 Weeks 
          </p>
        </div>
      </div>
      <div
        className="flex-1 py-8 px-3 flex relative rounded-lg 
      items-center justify-center
      bg-primary"
      >
        <div
          className="absolute bg-[#E9B6A6] text-[10px] rounded-md top-0 py-1 px-2  flex
   items-center justify-center right-0 text-dark"
        >
          {" "}
          Num #123
        </div>
        <div className="flex space-x-4 items-center">
          <p className="font-light text-[15px] text-white">
            LTV Ratio <span className="text-brandGreen ml-1">9%</span>
          </p>
          <div className="flex flex-col text-white space-y-2">
            <p className="text-[13px] text-light">Collateral</p>
            <div className="flex-col space-y-1">
              <div className="flex space-x-1 items-center">
                <Image
                  src={images.Metamask}
                  alt="metamask"
                  className="h-3 w-3"
                />
                <p className="text-[12px] text-white">SHIBA</p>
              </div>
              <div className="flex space-x-1 items-center">
                <Image src={images.Bitcoin} alt="btc" className="h-3 w-3" />
                <p className="text-[12px] text-white">BTC</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white space-y-2">
            <p className="text-[13px]">Amount</p>
            <div className="flex-col space-y-1">
              <div className="flex space-x-1 items-center">
                <p className="text-[12px] text-brandGreen">632M</p>
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-[12px] text-brandGreen">632M</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-white space-y-2">
            <p className="text-[13px]">Value</p>
            <div className="flex-col space-y-1">
              <div className="flex space-x-1 items-center">
                <p className="text-[12px] text-brandGreen">120k</p>
              </div>
              <div className="flex space-x-1 items-center">
                <p className="text-[12px] text-brandGreen">100k</p>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default BorrowerRequest;
