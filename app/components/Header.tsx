"use client";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { usePathname, useRouter } from "next/navigation";
import { useWallet } from "../utils";
import Link from "next/link";

const Header = () => {
  const pathName = usePathname();

  const router = useRouter();
  const { address, connectWallet, changeWallet, disconnectWallet } = useWallet();

  return (
    <div className="bg-[#1A1F25] px-16 h-16 mt-10 flex justify-end items-center shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)] ">
      <div className="flex justify-between w-full   ">
        <div className="grid grid-cols-3 gap-4">
          <Link href="/" className="flex items-center gap-x-2">
            <img src="/assests/icon.png"></img>
            <p className="text-[#E4ECCE] font-medium text-base">Clynto</p>
          </Link>
          <div className="flex items-center gap-x-2 cursor-pointer" onClick={() => router.push("/invest")} >
            <img src="/assests/moneyhand.svg"></img>
            <p  className={`${
                pathName == "/invest" ?
                "border-b pb-2 border-b-[#72C5B6] text-[#72C5B6]":"text-[#368489]"
              }  font-medium text-base  `}>Investment</p>
          </div>
          <div
            onClick={() => router.push("/requestloan")}
            className="flex items-center gap-x-2 cursor-pointer"
          >
            <img src="/assests/solarhand.svg" alt="" />
            <p
              className={`${
                pathName == "/requestloan" ?
                "border-b pb-2 border-b-[#72C5B6] text-[#72C5B6]":"text-[#368489]"
              }  font-medium text-base  `}
            >
              Request Loan{" "}
            </p>
          </div>
        </div>
        <div className="flex">
          {" "}
          <div className="grid grid-cols-2 gap-[24px]">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton 
                className="inline-flex w-full justify-center gap-x-1.5
                 rounded-md  px-3 py-2 text-sm font-semibold text-[#46536B] shadow-sm ">
                  <div className="relatsive flex">
                    <img
                      src="/assests/token2.svg"
                      className="absolute -left-12 inset-y-3"
                    />
                    <img
                      src="/assests/token1.svg"
                      className="absolute -left-6 inset-y-3"
                    />
                  </div>{" "}
                  <span className="text-white">USDC</span>
                  <span> Arbitrum</span>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 h-5 w-5 text-[#46536B]"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute -right-32 z-10 mt-2 w-56 origin-top-right rounded-md bg-[#1A1F25]/[90%] py-2 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1 px-4">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      {address}
                    </a>
                  </MenuItem>
                  <MenuItem >
                    <a
                      href="#"
                      className="block px-4 py-2 mb-4 text-sm text-[#E4ECCE] bg-[#393939] rounded-[10px] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Disconnect Wallet
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 mb-4 text-sm text-[#E4ECCE] bg-[#393939] rounded-[10px] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                    >
                      Change Wallet
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 mb-4 text-left text-sm text-[#E4ECCE] bg-[#393939] rounded-[10px] data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
                      >
                        Receive Assets
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
            <button className="text-[#E4ECCE] border-[#368489] border rounded-[5px] py-3 px-4" onClick={connectWallet}>
              Connect Wallet
            </button>
          </div>
          <button className=" ml-20 justify-end flex items-center">
            <img src="/assests/menu.svg"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
