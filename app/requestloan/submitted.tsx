import React from "react";

type Props = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
};

const Submitted = (props: Props) => {
  return (
    <div
      onClick={() => props.setIsSubmitted((prev) => !prev)}
      className="w-full bg-[#1A1F22]/[0.8] z-50 flex items-center justify-center fixed top-0 h-screen"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="gap-y-4 max-w-[328px] bg-[#1A1F25] text-white text-center px-2 py-8  flex flex-col justify-center items-center"
      >
        <img src="/assests/check.svg" alt="" />
        <div className="w-full flex flex-col gap-[15px]">
          <p className="text-[#72C5B6] text-xl font-medium ">Loan submitted</p>
          <p className="text-lg font-medium">
            Check your Pending Loans section to approve Interest rates offered
            by Investors
          </p>
          <p className="text-[#E4ECCE]">Collateral Transfer Pending</p>
        </div>
      </div>
    </div>
  );
};

export default Submitted;
