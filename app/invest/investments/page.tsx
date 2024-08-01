"use client"

import React, { useState } from "react";
import RecommendedInvestments from "../../components/RecommendedInvestements";
import PendingInvestments from "../../components/PendingInvestments";
import ActiveInvestments from "../../components/ActiveInvestments";
import CompletedInvestments from "../../components/CompletedInvestment";

const Investment = () => {
  const [activeTab, setActiveTab] = useState("recommended");

  return (
    <div className="w-full px-[50px]  mt-20">
      <div className="flex justify-between mx-20 mt-10 items-center">
        <div className="flex space-x-6">
          <button
            className={`px-4 py-4 tracking-wide rounded-md ${activeTab === "recommended" ? "bg-[#72C5B6] py-4 text-[#1A1F25]" :
               "border border-brandGreen bg-transparent text-white"}`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
          <button
            className={`px-4 py-4 rounded-md ${activeTab === "pending" ? "bg-[#72C5B6] text-[#1A1F25]"
               : "border border-brandGreen bg-transparent text-white"}`}
            onClick={() => setActiveTab("pending")}
          >
            Pending
          </button>
          <button
            className={`px-4 py-4 rounded-md ${activeTab === "active" ? "bg-[#72C5B6] text-[#1A1F25]" : "border border-brandGreen bg-transparent text-white"}`}
            onClick={() => setActiveTab("active")}
          >
            Active
          </button>
          <button
            className={`px-4 py-4 rounded-md ${activeTab === "completed" ? "bg-[#72C5B6] text-[#1A1F25]" : "border border-brandGreen bg-transparent text-white"}`}
            onClick={() => setActiveTab("completed")}
          >
            Completed
          </button>
        </div>
      </div>

      <div className="w-full mt-8 flex justify-between gap-x-[40px] mb-20">
        <div className="w-[70%]">
        {activeTab === "recommended" && <RecommendedInvestments />}
        {activeTab === "pending" && <PendingInvestments />}

        {activeTab === "active" && <ActiveInvestments />}
        {activeTab === "completed" && <CompletedInvestments />} 
      </div>
      <div className="border py-6 h-fit w-[25%] border-[#E4ECCE]  px-2 rounded-2xl text-center pt-[99px] pb-[50.5px] gap-y-4 flex flex-col">
          <img src="/assests/image1.svg" alt="" className="mx-auto" />
          <p className="text-[#A3ABBD] text-xs  leading-[21.6px] text-start w-fit mx-auto">
            Lorem Ipsum is simply dummy <br /> text of the printing and <br />
            typesetting industry. <b> Learn more</b>
          </p>
          </div>
        </div>
    </div>
  );
};

export default Investment;
