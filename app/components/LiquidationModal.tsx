import React from 'react';
import Image from 'next/image';
import icons from '../assets/icons';

interface LiquidationModalProps {
  show: boolean;
  onClose: () => void;
}

const LiquidationModal: React.FC<LiquidationModalProps> = ({ show, onClose }) => {
  if (!show) return null;

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50" onClick={handleOutsideClick}>
      <div className="bg-[#222830] px-[3rem] py-8 rounded-lg border flex justify-between items-center space-x-1 border-gray-500 max-w-2xl w-full">
        <div className="flex items-start mb-4 flex-col space-y-7 font-light  justify-start flex-1">
          
          <h2 className="text-brandYellow text-[18px]">
            Liquidation Notice
          </h2>
        
        <p className="text-brandRed">
          It's important to note that you will be solely responsible for all gas fees for this liquidation process and liquidation fees for Clynto.
        </p>
        <p className="text-brandText">
          You can provide the borrower with a <strong>30-Days</strong> liquidation notice for a full payback, or the smart contract will automatically invoke collateral liquidation for full payback and interest.
        </p>
      
      </div>
      <div className='flex-1 flex flex-col space-y-5 items-center justify-center h-full'>
      <Image src={icons.liquidation} alt="Warning Icon" className="mr-2" />
      <button onClick={onClose} className="text-[#222830] bg-brandGreen py-4  rounded-lg w-full">
          Initiate Liquidation
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default LiquidationModal;
