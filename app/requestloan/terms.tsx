import React from "react";

type Props = {
  setIsTerms: React.Dispatch<React.SetStateAction<boolean>>;
  setIsReviews: React.Dispatch<React.SetStateAction<boolean>>;
};

const Terms = (props: Props) => {
  return (
    <div>
      <div
        onClick={() => props.setIsTerms((prev) => !prev)}
        className="w-full bg-[#1A1F22]/[0.8] z-50 flex items-center justify-center fixed top-0 h-screen"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="px-8 py-14 gap-[24px] flex flex-col  shadow-[4px_4px_8px_0px _rgba(0,_0,_0,_0.25)] max-w-[438px] bg-[#1A1F25] text-white text-center  flex flex-col justify-center items-center"
        >
          <div
            onClick={() => {
              props.setIsReviews((prev) => !prev);
              props.setIsTerms((prev) => !prev);
            }}
            className="flex justify-start w-full items-center gap-[8px]  cursor-pointer"
          >
            <img
              src="/assests/arrowleftright.svg"
              alt=""
              className="rotate-180"
            />{" "}
            <p className="text-[18px] text-[#E4ECCE] font-medium">Terms</p>
          </div>
          <p className="text-justify text-xs text-[#A3ABBD] leading-[21.6px]">
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
