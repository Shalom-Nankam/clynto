import React, { useState } from "react";

type Props = {
  setIsReviews: React.Dispatch<React.SetStateAction<boolean>>;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  setIsTerms: React.Dispatch<React.SetStateAction<boolean>>;
};

const Reviews = (props: Props) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div>
      <div
        onClick={() => props.setIsReviews((prev) => !prev)}
        className="w-full bg-[#1A1F22]/[0.8] z-50 flex items-center justify-center fixed top-0 h-screen"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="w-full max-w-[873px] gap-x-10 bg-[#1A1F25] flex justify-between px-12 py-10"
        >
          <div className="flex flex-col gap-y-10 w-full text-[#E4ECCE]">
            <div className="border rounded-[10px] p-4 flex flex-col w-full">
              <div className="flex flex-col text-[#E4ECCE] gap-[14px] text-[14px]">
                <p className="s">Loan Type: Pool</p>
                <p className="s">Loan Amount: 100,000</p>
                <p className="s">Loan Payback Intention: N/A</p>
                <p className="mb-4">Interest: TBD Through offers</p>
              </div>
              <p className="text-[#806DC5] mt-[16px] text-xs">
                Investors will offer you various APR <br /> percentage and you
                can select your preferred <br /> offer to fund the loan
              </p>
            </div>
            <div
              onClick={() => {
                props.setIsReviews((prev) => !prev);
                props.setIsTerms((prev) => !prev);
              }}
              className="w-full flex items-center justify-between cursor-pointer"
            >
              <p className="text-base font-semibold">Terms Of Services</p>
              <img src="/assests/arrowleftright.svg" alt="" className="" />{" "}
            </div>
            <div className="flex items-center text-base gap-x-2">
              <input
                type="checkbox"
                className="w-4 h-4"
                checked={isChecked}
                onChange={() => setIsChecked((prev) => !prev)}
              />
              <p className="font-medium">I Agree</p>
            </div>
          </div>

          <div className="w-full">
            {" "}
            <img src="/assests/img.svg" alt="" />{" "}
            <button
              onClick={() => {
                props.setIsReviews((prev) => !prev);
                props.setIsSubmitted((prev) => !prev);
              }}
              className={`text-[#1A1F25] text-[24px] w-full px-12 py-4 rounded-[10px] ${
                isChecked ? "bg-[#72C5B6]" : "bg-gray-500 cursor-not-allowed"
              }`}
              disabled={!isChecked}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
