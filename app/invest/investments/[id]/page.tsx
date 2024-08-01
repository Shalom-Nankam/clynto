"use client";

import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import icons from "@/app/assets/icons";
import LiquidationModal from "@/app/components/LiquidationModal";

interface Collateral {
  name: string;
  amount: string;
  value: string;
}

interface PaymentHistory {
  time:string,
  date: string;
  amount: string;
  status: string;
  transaction: string;
}

interface InvestmentDetails {
  originalInvestment: string;
  paidBack: string;
  interestAccrued: string;
  payoffAmount: string;
  ltvRatio: string;
  collaterals: Collateral[];
  paymentHistory: PaymentHistory[];
  liquidationNotice: boolean;
}

interface InvestmentDetailsPageProps {
  params: {
    id: string;
  };
}

const investmentDetails: Record<string, InvestmentDetails> = {
  1: {
    originalInvestment: "20,000 USDC",
    paidBack: "1,342.29 USDC",
    interestAccrued: "2,000.02 USDC",
    payoffAmount: "19,358.02 USDC",
    ltvRatio: "90%",
    collaterals: [
      { name: "SHIBA", amount: "632 M", value: "100K" },
      { name: "BTC", amount: "632 M", value: "100K" },
    ],
    paymentHistory: [
      {
        date: "Tuesday, 21 Sep ",
        time:"03:25 PM",
        amount: "5,3432.0000 USDC",
        status: "In Progress",
        transaction: "0xdfi23k3....",
      },
      {
        date: "Monday, 21 Feb 11:05 PM",
        time:"03:25 PM",
        amount: "5,3432.0000 USDC",
        status: "Completed",
        transaction: "0xdfi23k3....",
      },
    ],
    liquidationNotice: true,
  },
};



const CircularChart = () => {
  return (
    <div className="relative w-64 h-64 mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[230px] h-[230px]">
          <CircularProgressbar
            value={100}
            styles={buildStyles({
              pathColor: "#2563EB",
              textColor: "#2563EB",
              trailColor: "#E4ECCE",
            })}
          />
          <div className="absolute inset-4 flex items-center justify-center">
            <div className="relative w-[180px] h-[180px]">
              <CircularProgressbar
                value={50}
                styles={buildStyles({
                  pathColor: "#F59E0B",
                  textColor: "#F59E0B",
                  trailColor: "#E4ECCE",
                })}
              />
              <div className="absolute inset-4 flex items-center justify-center">
                <div className="relative w-[140px] h-[140px]">
                  <CircularProgressbar
                    value={30}
                    styles={buildStyles({
                      pathColor: "#10B981",
                      textColor: "#10B981",
                      trailColor: "#E4ECCE",
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InvestmentDetailsPage: React.FC<InvestmentDetailsPageProps> = ({
  params,
}) => {
  const router = useRouter();
  const { id } = params;
  const investment = investmentDetails[id];

  if (!investment) {
    return <div>Loading...</div>;
  }
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full px-[50px] mt-20">
      <div className="w-full mt-8 flex justify-between gap-x-[40px] mb-20">
        <div className="flex flex-col ml-5 gap-y-4 mt-5 lg:w-2/3">
          <div className="flex items-center justify-between">
            <h1 className="text-[#E4ECCE] text-[23px]">
              Details Active Investments #{id}
            </h1>
            <div className="flex space-x-3 items-center">
              <Image src={icons.funnel} alt="" />
              <Image src={icons.tabler} alt="" />
              <Image src={icons.hugeicons} alt="" />
            </div>
          </div>

          <div className="flex md:flex-row md:justify-between gap-y-8 md:gap-x-8">
            <div className="ml-5 w-2/6">
              <CircularChart />
            </div>

            <div className="mt-8 space-y-7 flex flex-col w-4/6">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="flex h-3 w-8 rounded-md bg-[#2563EB]"></div>
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    Original Investment Amount
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/assests/cryptocurrency-color_usdc.svg"
                    className="w-7 h-7"
                    alt=""
                  />
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    {investment.originalInvestment}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="flex h-3 w-8 rounded-md bg-[#F59E0B]"></div>
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    Total Paid Back To Date
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/assests/cryptocurrency-color_usdc.svg"
                    className="w-7 h-7"
                    alt=""
                  />
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    {investment.paidBack}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="flex h-3 w-8 rounded-md bg-[#10B981]"></div>
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    Total Interest Accrued
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/assests/cryptocurrency-color_usdc.svg"
                    className="w-7 h-7"
                    alt=""
                  />
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    {investment.interestAccrued}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="flex h-3 w-8 rounded-md bg-[#F87171]"></div>
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    Total Payoff Amount Today
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <img
                    src="/assests/cryptocurrency-color_usdc.svg"
                    className="w-7 h-7"
                    alt=""
                  />
                  <span className="text-brandText font-serif tracking-wide text-lg">
                    {investment.payoffAmount}
                  </span>
                </div>
              </div>

              <div className="!mt-[4rem] bg-[#1A1F25] py-3 px-6 rounded-2xl border space-x-10 flex items-center border-gray-500">
                <div className="flex justify-between items-center">
                  <h2 className="text-[#E4ECCE] text-[17px] font-bold whitespace-nowrap">
                    LTV ratio{" "}
                    <span className="text-brandGreen ">
                      {investment.ltvRatio}
                    </span>
                  </h2>
                </div>
                <table className="w-full text-left text-brandText">
                  <thead>
                    <tr>
                      <th className="text-[15px] font-light tracking-wide">
                        Collateral
                      </th>
                      <th className="text-[15px] font-light tracking-wide">
                        Amount
                      </th>
                      <th className="text-[15px] font-light tracking-wide">
                        Value
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {investment.collaterals.map((collateral, index) => (
                      <tr key={index} className="border-none">
                        <td className="py-1 flex items-center text-[13px] space-x-2">
                          <Image
                            src={
                              collateral.name === "SHIBA"
                                ? icons.metamask
                                : icons.bitcoin
                            }
                            alt={collateral.name}
                            className="w-6 h-6"
                          />
                          <span className="text-[13px] text-brandText">
                            {collateral.name}
                          </span>
                        </td>
                        <td className="py-1 text-brandGreen text-sm">
                          {collateral.amount}
                        </td>
                        <td className="py-1 text-brandGreen text-sm">
                          {collateral.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
       
          <div className="flex justify-center flex-col items-center min-h-screen text-white">
          <div className="w-full h-2 border-b border-gray-500 mb-5">
</div>
      <div className="w-full max-w-4xl p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl  mb-6">Payment History</h2>
        <table className="min-w-full rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="px-6 py-3  border-gray-600 text-left text-[19px] font-mediumtext-[19px] text-brandPurple font-light  tracking-wider">Date</th>
              <th className="px-6 py-3  border-gray-600 text-left text-[19px] font-mediumtext-[19px] text-brandPurple font-light  tracking-wider">Amount</th>
              <th className="px-6 py-3  border-gray-600 text-left text-[19px] font-mediumtext-[19px] text-brandPurple font-light  tracking-wider">Status</th>
              <th className="px-6 py-3  border-gray-600 text-left text-[19px] font-mediumtext-[19px] text-brandPurple font-light  tracking-wider">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {investment.paymentHistory.map((payment, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-[17px] font-light text-brandText">{
                payment.date}<br/><span className="text-[#AEB6C8] tracking-wider text-[17px]">{payment.time}</span></td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-1  font-light  text-brandText">
                  <span className="!w-[30px] !h-[30px] flex items-center"><Image src={icons.money} alt="" className="!w-[150px] !h-[150px]" /></span>
                  <span>
                  {payment.amount} </span></td>
                <td className="px-6 py-4 whitespace-nowrap text-[17px] text-brandText">
                  <div className={`px-2 flex  items-center space-x-1  leading-5 text-[17px] 
                  font-light rounded-full

                     ${payment.status === 'Completed' ? '' : ''}`}>
                      <span className="!w-[30px] !h-[30px] flex items-center" >
                      <Image src={payment.status === 'Completed' ? icons.completed : icons.inprogress} alt="Payment Status Icon" />

                      </span>
                      <span></span>
                    {payment.status}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-light text-[17px] text-brandText">{payment.transaction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='w-full flex justify-end '>
      <button
            onClick={() => router.back()}
            className="bg-[#72C5B6] text-[#1A1F25] mt-10 px-5 py-4 text-2xl tracking-wider rounded-lg  flex items-center"
          >
           
            <Image src={icons.Arrowright} alt="" className="rotate-180 mr-2" width={24} height={24} />
            Back
          </button>
      </div>
    </div>
        </div>

        <div className="lg:w-1/3 flex flex-col space-y-8 items-center mt-5">
          <div className="border py-6 h-fit w-[100%] border-[#E4ECCE] rounded-2xl text-center pt-[99px] pb-[50.5px] gap-y-4 flex flex-col">
            <img src="/assests/image1.svg" alt="" className="mx-auto" />
            <p className="text-[#A3ABBD] text-xs leading-[21.6px] text-start w-fit mx-auto">
              Lorem Ipsum is simply dummy <br /> text of the printing and{" "}
              <br />
              typesetting industry. <b>Learn more</b>
            </p>
          </div>
          {investment.liquidationNotice && (
  <div className="bg-[#1A1F25] p-5   rounded-lg border !mt-[4rem] border-brandText">
    <div className="flex items-center mb-4 justify-between" >
     
      <h2 className="text-brandYellow text-[20px] tracking-wider">
        Liquidation Notice
      </h2>
      <Image src={icons.warning} alt="Warning Icon font-light " className="mr-2" />
    </div>
    <p className="text-brandText text-[19px] font-light tracking-wider">
      You can provide the borrower with a <strong>30-Days</strong>{" "}
      liquidation notice for a full payback, or the smart contract
      will automatically invoke collateral liquidation for full
      payback and interest.
    </p>
    <div className="w-full items-center flex justify-center">
    <button  onClick={() => setShowModal(true)} className="text-brandRed tracking-wider  px-4 py-2 mt-4 rounded-lg">
      Initiate Liquidation
    </button>
    <LiquidationModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  </div>
)}

          
        </div>
      </div>
    </div>
  );
};

export default InvestmentDetailsPage;


