import React from "react";
import Image from 'next/image';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import icons from "@/app/assets/icons";

const RecommendedInvestments = () => {
  const investments = [
    {
      id: 1,
      startingIn: "38 hours",
      collected: 75,
      requestedAmount: "85,000 USDC",
      apr: "Tier-0",
      ltvRatio: "280%",
      num: "#123",
      shareAmount: "100,000.21 USDC",
    },
    {
      id: 3,
      startingIn: "38 hours",
      collected: 75,
      requestedAmount: "85,000 USDC",
      apr: "Tier-0",
      ltvRatio: "280%",
      num: "#123",
      shareAmount: "100,000.21 USDC",
    },
    {
      id: 3,
      startingIn: "38 hours",
      collected: 75,
      requestedAmount: "85,000 USDC",
      apr: "Tier-0",
      ltvRatio: "280%",
      num: "#123",
      shareAmount: "100,000.21 USDC",
    },
  ];

  return (
    <div className="flex flex-col gap-y-6 mt-7">
    <div className='w-full flex items-center justify-between'>
      <h1 className="text-[#E4ECCE] text-[22px]">Recommended Investments</h1>
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
            <div className="col-span-2">
              <div></div>
              <div className="flex justify-between w-full mt-12">
                <div>
                  <h1 className="text-[#E4ECCE]">Requested Amount</h1>
                </div>
                <div>
                  <h1 className="text-[#E4ECCE]">APR</h1>
                </div>
              </div>
              <div className="flex justify-between w-full mt-4">
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
            <div className="bg-[#1A1F25] rounded-[20px] m-1 col-span-3">
              <div className="flex justify-between">
                <div></div>
                <div className="bg-[#E9B6A6] text-[#1A1F25] rounded-[5px] p-2 mb-4 rounded-tr-[6px] overflow-hidden">
                  {investment.num}
                </div>
              </div>
              <div className="flex justify-between w-full px-4">
                <div>
                  <div>
                    <h1 className="text-[#E4ECCE] mb-4">Set Your Share & APR</h1>
                  </div>
                  <div className="flex justify-between">
                    <img src="/assests/Group 284.svg" alt="" />
                    <p className="text-[#E4ECCE]">{investment.shareAmount}</p>
                    <img src="/assests/Group 283.svg" alt="" />
                  </div>
                </div>
                <div className="flex items-center">
                  <button className="bg-[#72C5B6] text-[#1A1F25] p-2 rounded-[10px]">
                    Join Investment
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

export default RecommendedInvestments;
