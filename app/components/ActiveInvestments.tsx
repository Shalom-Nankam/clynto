import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import icons from '@/app/assets/icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ActiveInvestments = () => {
  const router = useRouter();
  const activeInvestments = [
    {
      id: 1,
      totalInvestment: '16,231.02 USDC',
      earningsToDate: '1100.2112 USDC',
      upPercent: '+7% To Date',
      ltvRatio: '280%',
      num: '#123',
      collected: 75,
    },
    {
      id: 2,
      totalInvestment: '16,231.02 USDC',
      earningsToDate: '1100.2112 USDC',
      upPercent: '+7% To Date',
      ltvRatio: '280%',
      num: '#123',
      collected: 72,
    },
    {
      id: 3,
      totalInvestment: '16,231.02 USDC',
      earningsToDate: '1100.2112 USDC',
      upPercent: '+7% To Date',
      ltvRatio: '280%',
      num: '#123',
      collected: 55,
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 mt-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[#E4ECCE] text-[22px]">My Active Investments</h1>
        <div className="flex space-x-2 items-center">
          <Image src={icons.funnel} alt="" />
          <Image src={icons.tabler} alt="" />
          <Image src={icons.hugeicons} alt="" />
        </div>
      </div>

      <div className="flex flex-col">
        {activeInvestments.map((investment) => (
          <div
            key={investment.id}
            className="bg-[#46536B]  rounded-[10px] my-[8px] p-2"
            onClick={() => router.push(`/invest/investments/${investment.id}`)}
          >
            <div className="grid grid-cols-6 items-center">
              <div className="ml-2 flex flex-col w-[70px]">
                <div className="relative w-[70px] h-[70px]">
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
                        pathColor: '#72C5B6',
                        trailColor: 'none',
                      })}
                    />
                  </div>
                </div>
                <div className="flex mt-1">
                  <p className="text-[#72C5B6] text-sm whitespace-nowrap">
                    Up {investment.upPercent}
                  </p>
                </div>
              </div>
              <div className="col-span-2 -ml-9">
                <div className="flex justify-between w-full mr-2">
                  <div>
                    <h1 className="text-[#E4ECCE] text-md tracking-wide ">
                      Total Investment
                    </h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE] text-md tracking-wide -ml-2 ">
                      Earning to date
                    </h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-1">
                  <div className="flex items-center">
                    <img
                      src="/assests/cryptocurrency-color_usdc.svg"
                      className="w-7 h-7"
                      alt=""
                    />
                    <p className="text-[#72C5B6] text-md  whitespace-nowrap">
                      {investment.totalInvestment}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src="/assests/cryptocurrency-color_usdc.svg"
                      className="w-7 h-7"
                      alt=""
                    />
                    <p className="text-[#72C5B6] text-md  whitespace-nowrap">
                      {investment.earningsToDate}
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1F25] rounded-[20px] m-1 grid-cols-5 ml-2 flex relative items-center col-span-3 py-[50px]">
                <div className="flex justify-between items-center absolute top-0 right-0">
                  <div className="bg-[#E9B6A6] text-[#1A1F25] rounded-[5px] px-3 py-1 text-xs mb-4 rounded-tr-[6px] overflow-hidden">
                    {investment.num}
                  </div>
                </div>
                <div className="flex justify-between w-full px-4 items-center">
                  <div className="flex flex-col justify-center">
                    <div className="flex mt-2">
                      <Image src={icons.metamask} alt="" />
                      <Image src={icons.bitcoin} alt="" />
                      <Image src={icons.n} alt="" />
                      <p className="text-[#E4ECCE] text-md ">
                        LTV Ratio <span className="text-[#72C5B6]">{investment.ltvRatio}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-[#72C5B6] text-[#1A1F25] px-5 tracking-wider py-3 rounded-[10px] flex items-center text-sm">
                      Details
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

export default ActiveInvestments;
