"use client";
import React, { useState } from "react";
import Reviews from "./review";
import Submitted from "./submitted";
import Terms from "./terms";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

type Props = {};

const RequestLoan = (props: Props) => {
  const [value, setValue] = useState<number>(100000.21);
  const [value2, setValue2] = useState<number>(30);
  const [weeks, setWeeks] = useState<boolean>(false);
  const [months, setMonths] = useState<boolean>(false);
  const [isReviews, setIsReviews] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isTerms, setIsTerms] = useState<boolean>(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USDC");

  const currencies = ["USDC", "DAI", "ETH"];

  return (
    <div>
      {isTerms && <Terms setIsTerms={setIsTerms} setIsReviews={setIsReviews} />}
      {isSubmitted && <Submitted setIsSubmitted={setIsSubmitted} />}
      {!isReviews && (
        <Reviews
          setIsReviews={setIsReviews}
          setIsSubmitted={setIsSubmitted}
          setIsTerms={setIsTerms}
        />
      )}
      <div className="w-full px-24 mt-8 flex justify-between gap-x-20 mb-20">
        <div className="w-full pr-10">
          <div className="w-full px-4">
            <div className="px-4 py-8 border rounded-2xl border-[#A3ABBD] w-full shadow-[4px_4px_4px_0px_rgba(163,_171,_189,_0.25)] flex items-center justify-between text-[#E4ECCE] gap-x-4">
              <p className="flex items-center gap-x-2">
                <div className="rounded-full bg-[#26323E] h-8 w-8 flex items-center justify-center">
                  <img src="/assests/coins.png" alt="" className="mx-auto" />
                </div>
                <span className="font-medium">How much you want to borrow?</span>
              </p>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-[#46536B] shadow-sm">
                    <div className="relative flex">
                      <img
                        src="/assests/token2.svg"
                        className="absolute -left-12 inset-y-3"
                      />
                      <img
                        src="/assests/token1.svg"
                        className="absolute -left-6 inset-y-3"
                      />
                    </div>
                    <div className="items-center  flex">
                    <span className="text-white">{selectedCurrency}</span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-10 w-10  text-[#46536B]"
                    />
                    </div>
                  </MenuButton>
                </div>
                <MenuItems
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md
                   bg-[#1A1F25]/[90%] py-2 shadow-lg ring-1 ring-black ring-opacity-5
                   focus:outline-none"
                >
                  {currencies.map((currency) => (
                    <MenuItem key={currency} as="div">
                      {({ active }) => (
                        <button
                          className={`${
                            active ? "bg-gray-100 text-gray-900" : "text-white"
                          } block w-full text-left px-4 py-2 text-sm`}
                          onClick={() => setSelectedCurrency(currency)}
                        >
                          {currency}
                        </button>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>

              <div className="flex items-center gap-x-4">
                <img
                  src="/assests/minus.png"
                  alt=""
                  className="mx-auto cursor-pointer"
                  onClick={() => setValue((prev) => Math.max(prev - 100, 0))}
                />
                <input
                  type="number"
                  value={value}
                  onChange={(e) => setValue(Number(e.target.value))}
                  className="font-medium bg-transparent border-none outline-none text-center w-24"
                />
                <img
                  src="/assests/plus.png"
                  alt=""
                  className="mx-auto cursor-pointer"
                  onClick={() => setValue((prev) => prev + 100)}
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-8 rounded-2xl border flex flex-col gap-y-8 border-[#A3ABBD] w-full mt-10 max max-w-[811px]">
            <div className="flex items-center w-full gap-x-10">
              <div className="flex flex-col gap-y-2 w-full">
                <div className="flex items-center gap-x-[6px]">
                  <div className="rounded-full bg-[#26323E] h-10 w-10 flex items-center justify-center">
                    <img src="/assests/money.svg" alt="" className="mx-auto" />
                  </div>
                  <p className="text-[#E4ECCE] text-xl">
                    Select Collateral assets
                  </p>
                </div>
                <p className="text-[#806DC5] text-bas">
                  Minimum Collateral value required 90% of loan value
                </p>
              </div>

              <div className="w-fit flex items-center justify-end gap-x-14 pr-8">
                <div className="flex items-center gap-x-2">
                  <div className="h-4 w-4 rounded-full bg-[#2AE168]"></div>
                  <p className="text-[#E4ECCE] text-base">0xC235...c395</p>
                </div>
                <img src="/assests/drop2.svg" alt="" className="m" />
              </div>
            </div>
            <div className="flex items-center gap-x-[52px]">
              <button className="w-full text-white bg-[#46536B] h-20 rounded-lg font-medium text-lg">
                Crypto
              </button>
              <button className="w-full text-white border border-[#E4ECCE] h-20 rounded-lg font-medium text-lg">
                NTF
              </button>
            </div>
            <div className="py-2 px-4 w-full">
              <p className="text-xl font-medium text-[#E4ECCE]">
                Set Collateral amount from your wallet assets
              </p>
              <div className="w-full flex flex-col gap-y-6 mt-[26px]">
                <div className="flex items-center justify-between">
                  <img src="/assests/token4.png" alt="" className="m" />
                  <div className="flex gap-x-8 items-center">
                    <button className="bg-white px-4 py-2 text-[#1A1F25] rounded-full">
                      Max
                    </button>
                    <img
                      src="/assests/minus.png"
                      alt=""
                      className="mx-auto cursor-pointer"
                      onClick={() => setValue((prev) => prev - 1)}
                    />
                    <div className="font-medium text-[#E4ECCE]">
                      {value.toLocaleString()}
                    </div>
                    <img
                      src="/assests/plus.png"
                      alt=""
                      className="mx-auto cursor-pointer"
                      onClick={() => setValue((prev) => prev + 1)}
                    />
                  </div>
                </div>
                <div className="text-[#806DC5] text-[18px] font-medium">
                  BTC - 0.503 in wallet . Value: ~40,000 USDC
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-6 mt-[24px]">
                <div className="flex items-center justify-between">
                  <img src="/assests/token3.png" alt="" className="m" />
                  <div className="flex gap-x-8 items-center">
                    <button className="bg-white px-4 py-2 text-[#1A1F25] rounded-full">
                      Max
                    </button>
                    <img
                      src="/assests/minus.png"
                      alt=""
                      className="mx-auto cursor-pointer"
                      onClick={() => setValue((prev) => prev - 1)}
                    />
                    <div className="font-medium text-[#E4ECCE]">
                      {value.toLocaleString()}
                    </div>
                    <img
                      src="/assests/plus.png"
                      alt=""
                      className="mx-auto cursor-pointer"
                      onClick={() => setValue((prev) => prev + 1)}
                    />
                  </div>
                </div>
                <div className="text-[#806DC5] text-[18px] font-medium">
                  BTC - 0.503 in wallet . Value: ~40,000 USDC
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-6 mt-[26px] text-[18px] text-[#E4ECCE] font-medium">
                <p className="s">Liquidation Point: 90% of Loan Value</p>
                <p className="s">Collateral to loan ratio (LTV): 100%</p>
                <p className="">Max allowed to Borrow: 70,00 USDC</p>
              </div>
            </div>
          </div>
          <p className="mt-10 text-[#E4ECCE] text-[24px] mb-[32px]">
            Governance LTV/APR Tiers
          </p>
          <div className="w-full shadow-[4px_4px_8px_0px_rgba(114,_197,_182,_0.20)] rounded-2xl mix-blend-lighten bg-[#1A1F25] text-white px-[32px] py-[24px]">
            <table className="table-auto w-full mx-auto">
              <thead className="text-start border-b border-b-[#A3ABBD] font-medium text-xl">
                <th className="text-start pb-4">RISK</th>
                <th className="text-start pb-4">LTV</th>
                <th className="text-start pb-4">APR</th>
              </thead>
              <tbody>
                <tr className="text-[#2AE168] font-medium text-xl">
                  <td className="pt-[22px]">LOW</td>
                  <td className="pt-[22px]">Tier-0: 1%-10%</td>
                  <td className="pt-[22px]">5% - 9%</td>
                </tr>
                <tr className="text-[#A3ABBD] font-medium text-xl">
                  <td className="pt-6">MID</td>
                  <td className="pt-6">Tier-1: 11%-60%</td>
                  <td className="pt-6">10% - 70%</td>
                </tr>
                <tr className="text-[#A3ABBD] font-medium text-xl">
                  <td className="pt-6">HIGH</td>
                  <td className="pt-6">Tier-2: 60%-90%</td>
                  <td className="pt-6">71% - 200%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full mt-10 p-8 border border-[#A3ABBD] rounded-2xl flex justify-between">
            <div className="flex items-start h-fit font-medium gap-x-2">
              <div className="rounded-full bg-[#26323E] h-10 w-10 flex items-center justify-center">
                <img src="/assests/coins.png" alt="" className="mx-auto" />
              </div>
              <p className="font-medium text-xl text-white">
                Intend to payback in (optional)
              </p>
            </div>
            <div className="flex flex-col gap-y-8">
              <div className="flex items-center gap-10">
                <img
                  src="/assests/minus.png"
                  alt=""
                  className="mx-auto cursor-pointer"
                  onClick={() => setValue2((prev) => prev - 1)}
                />
                <div className="font-medium text-[#E4ECCE]">
                  {value2.toLocaleString()}
                </div>
                <img
                  src="/assests/plus.png"
                  alt=""
                  className="mx-auto cursor-pointer"
                  onClick={() => setValue2((prev) => prev + 1)}
                />
              </div>
              <div className="flex gap-x-8">
                <div
                  onClick={() => setWeeks((prev) => !prev)}
                  className="flex items-center gap-x-2 cursor-pointer"
                >
                  {weeks ? (
                    <img
                      src="/assests/checked.png"
                      alt=""
                      className=" cursor-pointer"
                    />
                  ) : (
                    <img
                      src="/assests/uncheck.png"
                      alt=""
                      className=" cursor-pointer"
                    />
                  )}
                  <p className="text-[#E4ECCE]">weeks</p>
                </div>
                <div
                  onClick={() => setMonths((prev) => !prev)}
                  className="flex items-center gap-x-2 cursor-pointer"
                >
                  {months ? (
                    <img
                      src="/assests/checked.png"
                      alt=""
                      className=" cursor-pointer"
                    />
                  ) : (
                    <img
                      src="/assests/uncheck.png"
                      alt=""
                      className=" cursor-pointer"
                    />
                  )}
                  <p className="text-[#E4ECCE]">months</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center mt-10 justify-between">
            <p className="text-[#E4ECCE] max-w-[495px] text-base">
              Your Collateral stays in your wallet until you accept a loan
              offer. When your loan funds, your collateral will be stored on the
              loan’s smart contract on the blockchain.
            </p>
            <button
              onClick={() => setIsReviews((prev) => !prev)}
              className="flex rounded-lg items-center bg-[#72C5B6] py-4 px-6"
            >
              <div className="text-[#1A1F25] font-medium">Review</div>
              <img src="/assests/arrowright.svg" alt="" className="" />
            </button>
          </div>
        </div>
        <div className="border py-8 h-fit border-[#E4ECCE] w-[45%] px-4 rounded-2xl text-center pt-[99px] pb-[50.5px] gap-y-4 flex flex-col">
          <img src="/assests/image1.svg" alt="" className="mx-auto" />
          <p className="text-[#A3ABBD] text-xs leading-[21.6px] text-start w-fit mx-auto">
            Lorem Ipsum is simply dummy <br /> text of the printing and <br />
            typesetting industry. <b> Learn more</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RequestLoan;
