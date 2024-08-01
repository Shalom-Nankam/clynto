"use client";
import React, { useState } from "react";

import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Balance = () => {
  const [grid, setGrid] = useState(1);
  const circumference = 2 * Math.PI * 45; // radius is 45
  const offset = circumference - (70 / 100) * circumference;
  const rotate = (degree: any) => ({
    transform: `rotate(${degree}deg)`,
  });

  return (
    <div>
      <div className="grid grid-cols-3">
        <div className="flex items-center">
          <h1 className="text-[#72C5B6] text-[22px]">Balance</h1>
        </div>
        <div className="flex items-center">
          <div className="mr-2">
            <img src="/assests/cryptocurrency-color_usdc.svg"></img>
          </div>
          <h1 className="text-[#E4ECCE]">56,271.68</h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#E4ECCE]">$0.00</h1>
        </div>
      </div>
      <div className="flex justify-between mt-12 mb-8">
        <div className="flex items-center">
          <h1 className="text-[#E4ECCE] text-[22px]">Loan Requests</h1>
        </div>
        <div className="grid grid-cols-3 gap-4 text-[#368489] ">
          <button>
            <img src="/assests/filter.svg"></img>
          </button>
          <button onClick={() => setGrid(1)}>
            <img src="/assests/layout-list.svg"></img>
          </button>
          <button onClick={() => setGrid(2)}>
            <img src="/assests/menu-square.svg"></img>
          </button>
        </div>
      </div>

      {grid === 1 ? (
        <div className="flex flex-col">
          <div className=" bg-[#46536B] rounded-[10px] my-[10px] ">
            <div className="grid grid-cols-6 gap-4">
              <div className="ml-4">
                <div className="bg-[#1A1F25] p-2 rounded-b-[5px]">
                  <p className="text-[#E4ECCE] text-[10px]">
                    Starting in <span className="text-[#72C5B6]">38 hours</span>
                  </p>
                </div>

                <div className="relative w-[60px] h-[60px] mt-5 ">
                  <img
                    className="absolute w-full rounded-full"
                    src="/assests/Ellipse 207.png"
                  />
                  <div className="absolute rounded-full ">
                    <CircularProgressbar
                      value={75}
                      counterClockwise={false}
                      styles={buildStyles({
                        pathColor: "#72C5B6",
                        trailColor: "none",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#72C5B6] mt-4">75% Collected</p>
                </div>
              </div>
              <div className="col-span-2">
                <div></div>
                <div className="flex justify-between w-full mt-12">
                  <div>
                    <h1 className="text-[#E4ECCE] ">Requested Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE]">APR</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center">
                    <img src="/assests/cryptocurrency-color_usdc.svg"></img>
                    <p className="text-[#72C5B6]">85,000 USDC</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#72C5B6]">Tier-0</p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-2 ">
                    <img src="assests/Component 18.svg"></img>
                    <img src="assests/Component 16.svg"></img>
                    <img src="assests/Component 17.svg"></img>
                    <p className="text-[#E4ECCE]">
                      LTV ratio <span className="text-[#72C5B6">280%</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1F25] rounded-[20px] m-1 col-span-3">
                <div className="flex justify-between">
                  <div></div>

                  <div className="bg-[#E9B6A6] text-[#1A1F25]  rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                    {" "}
                    Num #123
                  </div>
                </div>
                <div className="flex justify-between  w-full px-4">
                  <div>
                    <div>
                      <h1 className="text-[#E4ECCE] mb-4">
                        Set Your Share & APR
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <img src="/assests/Group 284.svg"></img>
                      <p className="text-[#E4ECCE]">USDC 100,000.21</p>
                      <img src="/assests/Group 283.svg"></img>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <button className="bg-[#72C5B6] text-[#1A1F25] p-2 rounded-[10px]">
                      Join Investment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#46536B] rounded-[10px] my-[10px] ">
            <div className="grid grid-cols-6 gap-4">
              <div className="ml-4">
                <div className="bg-[#1A1F25] p-2 rounded-b-[5px]">
                  <p className="text-[#E4ECCE] text-[10px]">
                    Starting in <span className="text-[#72C5B6]">38 hours</span>
                  </p>
                </div>

                <div className="relative w-[60px] h-[60px] mt-5 ">
                  <img
                    className="absolute w-full rounded-full"
                    src="/assests/Ellipse 207.png"
                  />
                  <div className="absolute rounded-full ">
                    <CircularProgressbar
                      value={75}
                      counterClockwise={false}
                      styles={buildStyles({
                        pathColor: "#72C5B6",
                        trailColor: "none",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#72C5B6] mt-4">75% Collected</p>
                </div>
              </div>
              <div className="col-span-2">
                <div></div>
                <div className="flex justify-between w-full mt-12">
                  <div>
                    <h1 className="text-[#E4ECCE] ">Requested Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE]">APR</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center">
                    <img src="/assests/cryptocurrency-color_usdc.svg"></img>
                    <p className="text-[#72C5B6]">85,000 USDC</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#72C5B6]">Tier-0</p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-2 ">
                    <img src="assests/Component 18.svg"></img>
                    <img src="assests/Component 16.svg"></img>
                    <img src="assests/Component 17.svg"></img>
                    <p className="text-[#E4ECCE]">
                      LTV ratio <span className="text-[#72C5B6">280%</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1F25] rounded-[20px] m-1 col-span-3">
                <div className="flex justify-between">
                  <div></div>

                  <div className="bg-[#E9B6A6] text-[#1A1F25]  rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                    {" "}
                    Num #123
                  </div>
                </div>
                <div className="flex justify-between  w-full px-4">
                  <div>
                    <div>
                      <h1 className="text-[#E4ECCE] mb-4">
                        Set Your Share & APR
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <img src="/assests/Group 284.svg"></img>
                      <p className="text-[#E4ECCE]">USDC 100,000.21</p>
                      <img src="/assests/Group 283.svg"></img>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <button className="bg-[#72C5B6] text-[#1A1F25] p-2 rounded-[10px]">
                      Join Investment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#46536B] rounded-[10px] my-[10px] ">
            <div className="grid grid-cols-6 gap-4">
              <div className="ml-4">
                <div className="bg-[#1A1F25] p-2 rounded-b-[5px]">
                  <p className="text-[#E4ECCE] text-[10px]">
                    Starting in <span className="text-[#72C5B6]">38 hours</span>
                  </p>
                </div>

                <div className="relative w-[60px] h-[60px] mt-5 ">
                  <img
                    className="absolute w-full rounded-full"
                    src="/assests/Ellipse 207.png"
                  />
                  <div className="absolute rounded-full ">
                    <CircularProgressbar
                      value={75}
                      counterClockwise={false}
                      styles={buildStyles({
                        pathColor: "#72C5B6",
                        trailColor: "none",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#72C5B6] mt-4">75% Collected</p>
                </div>
              </div>
              <div className="col-span-2">
                <div></div>
                <div className="flex justify-between w-full mt-12">
                  <div>
                    <h1 className="text-[#E4ECCE] ">Requested Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE]">APR</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center">
                    <img src="/assests/cryptocurrency-color_usdc.svg"></img>
                    <p className="text-[#72C5B6]">85,000 USDC</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#72C5B6]">Tier-0</p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-2 ">
                    <img src="assests/Component 18.svg"></img>
                    <img src="assests/Component 16.svg"></img>
                    <img src="assests/Component 17.svg"></img>
                    <p className="text-[#E4ECCE]">
                      LTV ratio <span className="text-[#72C5B6">280%</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1A1F25] rounded-[20px] m-1 col-span-3">
                <div className="flex justify-between">
                  <div></div>

                  <div className="bg-[#E9B6A6] text-[#1A1F25]  rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                    {" "}
                    Num #123
                  </div>
                </div>
                <div className="flex justify-between  w-full px-4">
                  <div>
                    <div>
                      <h1 className="text-[#E4ECCE] mb-4">
                        Set Your Share & APR
                      </h1>
                    </div>
                    <div className="flex justify-between">
                      <img src="/assests/Group 284.svg"></img>
                      <p className="text-[#E4ECCE]">USDC 100,000.21</p>
                      <img src="/assests/Group 283.svg"></img>
                    </div>
                  </div>
                  <div className=" flex items-center">
                    <button className="bg-[#72C5B6] text-[#1A1F25] p-2 rounded-[10px]">
                      Join Investment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 ">
          <div className=" bg-[#46536B] rounded-[10px] my-[10px] border-2 border-[#72C5B6] overflow-hidden">
            <div className="relative mb-8">
              <div className="bg-[#1A1F25] absolute p-2 rounded-b-[5px] left-[2%]">
                <p className="text-[#E4ECCE] text-[10px]">
                  Starting in <span className="text-[#72C5B6]">38 hours</span>
                </p>
              </div>
              <div className="bg-[#E9B6A6] text-[#1A1F25] absolute right-0 rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                {" "}
                Num #123
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 px-6 py-4">
              <div className="">
                {/* <div className="bg-[#1A1F25] p-2 rounded-b-[5px]">
                <p className="text-[#E4ECCE] text-[10px]">
                  Starting in <span className="text-[#72C5B6]">38 hours</span>
                </p>
              </div> */}

                <div className="relative w-[60px] h-[60px] ">
                  <img
                    className="absolute w-full rounded-full"
                    src="/assests/Ellipse 207.png"
                  />
                  <div className="absolute rounded-full ">
                    <CircularProgressbar
                      value={75}
                      counterClockwise={false}
                      styles={buildStyles({
                        pathColor: "#72C5B6",
                        trailColor: "none",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#72C5B6] mt-4 ">75% Collected</p>
                </div>
              </div>
              <div className="col-span-2 ">
                <div className="flex justify-between w-full ">
                  <div>
                    <h1 className="text-[#E4ECCE] ">Requested Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE]">APR</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center">
                    <img src="/assests/cryptocurrency-color_usdc.svg"></img>
                    <p className="text-[#72C5B6]">85,000 USDC</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#72C5B6]">Tier-0</p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-2 ">
                    <img src="assests/Component 18.svg"></img>
                    <img src="assests/Component 16.svg"></img>
                    <img src="assests/Component 17.svg"></img>
                    <p className="text-[#E4ECCE]">
                      LTV ratio <span className="text-[#72C5B6">280%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F25] rounded-[5px]   col-span-3 px-6 py-4">
              {/* <div className="flex justify-between">
                <div></div>

                <div className="bg-[#E9B6A6] text-[#1A1F25]  rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                  {" "}
                  Num #123
                </div>
              </div> */}
              <div className="flex justify-between  w-full px-4">
                <div className="">
                  <div>
                    <h1 className="text-[#E4ECCE] mb-4">
                      Set Your Share & APR
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <img src="/assests/Group 284.svg"></img>
                    <p className="text-[#E4ECCE]">USDC 100,000.21</p>
                    <img src="/assests/Group 283.svg"></img>
                  </div>
                </div>
                <div className=" flex items-center">
                  <button className="bg-[#72C5B6] text-[#1A1F25] p-2 rounded-[10px]">
                    Join Investment
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-[#46536B] rounded-[10px] my-[10px] border-2 border-[#72C5B6] overflow-hidden">
            <div className="relative mb-8">
              <div className="bg-[#1A1F25] absolute p-2 rounded-b-[5px] left-[2%]">
                <p className="text-[#E4ECCE] text-[10px]">
                  Starting in <span className="text-[#72C5B6]">38 hours</span>
                </p>
              </div>
              <div className="bg-[#E9B6A6] text-[#1A1F25] absolute right-0 rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                {" "}
                Num #123
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 px-6 py-4">
              <div className="">
                {/* <div className="bg-[#1A1F25] p-2 rounded-b-[5px]">
                <p className="text-[#E4ECCE] text-[10px]">
                  Starting in <span className="text-[#72C5B6]">38 hours</span>
                </p>
              </div> */}

                <div className="relative w-[60px] h-[60px] ">
                  <img
                    className="absolute w-full rounded-full"
                    src="/assests/Ellipse 207.png"
                  />
                  <div className="absolute rounded-full ">
                    <CircularProgressbar
                      value={75}
                      counterClockwise={false}
                      styles={buildStyles({
                        pathColor: "#72C5B6",
                        trailColor: "none",
                      })}
                    />
                  </div>
                </div>
                <div>
                  <p className="text-[#72C5B6] mt-4 ">75% Collected</p>
                </div>
              </div>
              <div className="col-span-2 ">
                <div className="flex justify-between w-full ">
                  <div>
                    <h1 className="text-[#E4ECCE] ">Requested Amount</h1>
                  </div>
                  <div>
                    <h1 className="text-[#E4ECCE]">APR</h1>
                  </div>
                </div>
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center">
                    <img src="/assests/cryptocurrency-color_usdc.svg"></img>
                    <p className="text-[#72C5B6]">85,000 USDC</p>
                  </div>
                  <div className="flex items-center">
                    <p className="text-[#72C5B6]">Tier-0</p>
                  </div>
                </div>
                <div>
                  <div className="flex mt-2 ">
                    <img src="assests/Component 18.svg"></img>
                    <img src="assests/Component 16.svg"></img>
                    <img src="assests/Component 17.svg"></img>
                    <p className="text-[#E4ECCE]">
                      LTV ratio <span className="text-[#72C5B6">280%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#1A1F25] rounded-[5px]   col-span-3 px-6 py-4">
              {/* <div className="flex justify-between">
                <div></div>

                <div className="bg-[#E9B6A6] text-[#1A1F25]  rounded-[5px] p-2  mb-4 rounded-tr-[6px] overflow-hidden">
                  {" "}
                  Num #123
                </div>
              </div> */}
              <div className="flex justify-between  w-full px-4">
                <div className="">
                  <div>
                    <h1 className="text-[#E4ECCE] mb-4">
                      Set Your Share & APR
                    </h1>
                  </div>
                  <div className="flex justify-between">
                    <img src="/assests/Group 284.svg"></img>
                    <p className="text-[#E4ECCE]">USDC 100,000.21</p>
                    <img src="/assests/Group 283.svg"></img>
                  </div>
                </div>
                <div className=" flex items-center">
                  <button className="bg-[#72C5B6] flex items-center w-full text-[#1A1F25] p-2 rounded-[10px]">
                    Join Investment
                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between m-4">
        <p className="text-[#FFFFFF]">
          You have Assets that canbe used as a collateral
        </p>
        <button className="bg-[#72C5B6] p-2 rounded-[10px] text-[#1A1F25] flex items-center">
          {" "}
          Request Loan
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="fe:arrow-left">
              <path
                id="Vector"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.49998 13.8333L5.16665 12.5L9.16665 8.49998L5.16665 4.49998L6.49998 3.16665L11.8333 8.49998L6.49998 13.8333Z"
                fill="#1A1F25"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Balance;
