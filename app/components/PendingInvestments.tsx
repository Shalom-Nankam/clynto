import React from "react";
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import icons from "@/app/assets/icons";

const PendingInvestments = () => {
  const investments = [
    {
      id: 1,
      startingIn: "38 hours",
      collected: 75,
      requestedAmount: "85,000 USDC",
      apr: "Tier-0",
      ltvRatio: "280%",
      num: "#123",
      shareAmount: "52,238.1234 USDC",
      aprValue: "23.34%",
      offerStatus: "accepted",
    },
    {
      id: 2,
      startingIn: "38 hours",
      collected: 75,
      requestedAmount: "85,000 USDC",
      apr: "Tier-0",
      ltvRatio: "280%",
      num: "#124",
      shareAmount: "52,238.1234 USDC",
      aprValue: "23.34%",
      offerStatus: "pending",
    },
    {
      id: 3,
      startingIn: "38 hours",
      collected: 75,
      requestedAmount: "85,000 USDC",
      apr: "Tier-0",
      ltvRatio: "280%",
      num: "#125",
      shareAmount: "52,238.1234 USDC",
      aprValue: "23.34%",
      offerStatus: "pending",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 mt-7">
      <div className='w-full flex items-center justify-between'>
        <h1 className="text-[#E4ECCE] text-[22px]">Pending Investments</h1>
        <div className='flex space-x-2 items-center'>
          <Image src={icons.funnel} alt="" />
          <Image src={icons.tabler} alt="" />
          <Image src={icons.hugeicons} alt="" />
        </div>
      </div>

      <div className="flex flex-col">
        {investments.map((investment) => (
          <div key={investment.id} className="bg-[#46536B] rounded-[10px] my-[10px]">
            <div className="grid grid-cols-6 gap-4">
              <div className="ml-4">
                <div className="bg-[#1A1F25] p-2 rounded-b-[5px]">
                  <p className="text-[#E4ECCE] text-[10px]">
                    Starting in <span className="text-[#72C5B6]">{investment.startingIn}</span>
                  </p>
                </div>
                <div className="relative w-[60px] h-[60px] mt-5">
                  <img
                    className="absolute w-full rounded-full"
                    src="/assests/Ellipse 207.png"
                    alt=""
                  />
                  <div className="absolute rounded-full">
                    <CircularProgressbar
                      value={investment.collected}
                      counterClockwise={false}
                      styles={buildStyles({
                        pathColor: "#72C5B6",
                        trailColor: "none",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#72C5B6] mt-4">{investment.collected}% Collected</p>
                </div>
              </div>
              <div className="col-span-2 items-center justify-center p-4 ">
                <div className="flex justify-between w-full mt-4">
                  <div>
                    <h1 className="text-[#E4ECCE]">Requested Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE]">APR</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-2">
                  <div className="flex items-center">
                    <img src="/assests/cryptocurrency-color_usdc.svg" alt="" />
                    <p className="text-[#72C5B6]">{investment.requestedAmount}</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#72C5B6]">{investment.apr}</p>
                  </div>
                </div>
                <div className="flex mt-2">
                  <Image src={icons.metamask} alt="" />
                  <Image src={icons.bitcoin} alt="" />
                  <Image src={icons.n} alt="" />
                  <p className="text-[#E4ECCE]">
                    LTV ratio <span className="text-[#72C5B6]">{investment.ltvRatio}</span>
                  </p>
                </div>
              </div>
              <div className={`rounded-[20px] m-1 col-span-3 ${investment.offerStatus === 'accepted' ? 'bg-transparent' : 'bg-[#1A1F25]'}`}>
                <div className="flex justify-between">
                  <div></div>
                  <div className="bg-[#E9B6A6] text-[#1A1F25] rounded-[5px]  px-4 rounded-tr-[6px] overflow-hidden">
                    {investment.num}
                  </div>
                </div>
                <div className="flex justify-between w-full px-4 items-start ">
                  <div className="flex flex-col justify-center">
                    <h1 className={`mb-1 text-lg font-serif font-semibold tracking-wide ${investment.offerStatus === 'accepted' ? 'text-black' : 'text-[#E4ECCE]'}`}>
                      {investment.offerStatus === 'accepted' ? 'Offer Accepted' : 'Offer Pending'}
                    </h1>
                    <p className={`font-light tracking-wide ${investment.offerStatus === 'accepted' ? 'text-black' : 'text-[#E4ECCE]'}`}>
                      <span className={`${investment.offerStatus === 'accepted' ? 'text-[#2AE168]' : 'text-brandGreen'}`}>
                        {investment.shareAmount}
                      </span>
                      <br />
                    <span className={` font-medium ${investment.offerStatus === 'accepted' ? 'text-[#2AE168]' :
                       'text-brandText'}`}>   For {investment.aprValue}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-center mt-6">
                    <button className={`p-2 rounded-[10px] flex items-center ${investment.offerStatus === 'accepted' ? 'bg-[#2AE168] text-black' : 'bg-[#72C5B6] text-[#1A1F25]'}`}>
                      {investment.offerStatus === 'accepted' ? 'Fund Now' : 'Edit Offer'}
                      <Image src={icons.Arrowright} alt="" width={15} height={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PendingInvestments;
