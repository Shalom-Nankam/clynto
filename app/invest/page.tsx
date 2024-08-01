"use client";
import React, { useState } from "react";
import BorrowerRequest from "./BorrowerRequest";
import InvestmentDetails from "./InvestmentDetails";
import Image from 'next/image'
import icons from '../assets/icons'
import lenders from "./dummyData";
import images from "../assets/images";
import Link from "next/link";

type Props = {};

const Invest = (props: Props) => {
  return (
    <div className="w-full px-[40px] mt-8 flex justify-between gap-x-[20px] ">
      <div className="w-full pr-10">
        <h2 className="text-2xl font-l text-[#E4ECCE] my-10">
          Borrower Loan request details
        </h2>
        <div className="w-full">
          <BorrowerRequest />
          <h2 className="text-2xl font-l text-[#E4ECCE] my-10">
            Investment/Offer Details
          </h2>

          <InvestmentDetails />
          <div className="flex  items-center py-5 px-2 justify-between">
            <div className="w-3/5">
            <p className="text-white text-[17px] w-full leading-relaxed">
              Based on the collateral to loan ratio (LTV), Governance has
              defined the interest offer range Tier-0 in a voting that defined
              the max upper bound for the system to be 23%
            </p>
            </div>
            <Link className="w-2/5 flex justify-end" href='/invest/investments'>
              <button className="mt-6 flex bg-[#72C5B6] py-5 px-6 rounded-lg font-medium text-lg text-[#1A1F25]">
              Offer To Invest
                <span><Image src={icons.Arrowright} alt=""/></span>
               
              </button>
            </Link>
          </div>
          <div className="py-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-light text-white w-3/5">Existing Lenders</h2>
        <div className="mt-2 bg-gray-700 flex rounded w-2/5  h-4">
        <div className="bg-brandGreen h-4 w-1/5 flex items-center px-1 text-[9px] rounded"  >
          USDC 15,000
        </div>
        <div className="bg-secondary w-4/5 h-4 text-[9px] flex items-center justify-center"  >
          USDC 15,000
        </div>
      </div>
      </div>
      <div className="my-6">
        <div className="flex items-center  space-x-6">
          {lenders.map((lender) => (
            <div key={lender.id} className="flex space-x-3  items-center">
              <Image
                src={images.User2}
                alt={lender.name}
                className="w-[55px] h-[55px] rounded-full"
              />
              <div className="flex flex-col space-y-1">
              <p className="text-white mt-2 whitespace-nowrap text-md font-light">Share amount</p>
              <p className="text-brandGreen font-light">{lender.amount} USDC</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>


        </div>
      </div>
      <div className="border py-8 h-fit border-[#E4ECCE] w-[45%] px-4 rounded-2xl  my-20 text-center pt-[99px] pb-[50.5px] gap-y-4 flex flex-col">
        <img src="/assests/image1.svg" alt="" className="mx-auto" />
        <p className="text-[#A3ABBD] text-xs leading-[21.6px] text-start w-fit mx-auto">
          Lorem Ipsum is simply dummy <br /> text of the printing and <br />
          typesetting industry. <b> Learn more</b>
        </p>
      </div>
    </div>
  );
};

export default Invest;
