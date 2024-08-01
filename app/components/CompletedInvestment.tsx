import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import icons from '@/app/assets/icons';

const CompletedInvestments = () => {
  const router = useRouter();
  const completedInvestments = [
    {
      id: 1,
      investedAmount: '85,000 USDC',
      investmentDuration: '13 Months',
      interestRate: '23%',
      earning: '1,500 USDC',
      payoffDate: 'October 24 2025',
      num: '#123',
    },
    {
      id: 2,
      investedAmount: '85,000 USDC',
      investmentDuration: '13 Months',
      interestRate: '23%',
      earning: '1,500 USDC',
      payoffDate: 'October 24 2025',
      num: '#124',
    },
    {
      id: 3,
      investedAmount: '85,000 USDC',
      investmentDuration: '13 Months',
      interestRate: '23%',
      earning: '1,500 USDC',
      payoffDate: 'October 24 2025',
      num: '#125',
    },
  ];

  return (
    <div className="flex flex-col gap-y-4 mt-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-[#E4ECCE] text-[22px]">Completed Investments</h1>
        <div className="flex space-x-4 items-center">
          <Image src={icons.funnel} alt="" />
          <Image src={icons.tabler} alt="" />
          <Image src={icons.hugeicons} alt="" />
        </div>
      </div>

      <div className="flex flex-col">
        {completedInvestments.map((investment) => (
          <div
            key={investment.id}
            className="bg-[#46536B] rounded-[10px] my-[8px] p-2"
            onClick={() => router.push(`/invest/completedsetails/${investment.id}`)}
          >
            <div className="grid grid-cols-6 items-center">
              <div className="col-span-4 ">
                <table className="w-full text-left text-[#E4ECCE]">
                  <thead>
                    <tr>
                      <th className="text-md tracking-wide">Invested Amount</th>
                      <th className="text-md tracking-wide">Investment Duration</th>
                      <th className="text-md tracking-wide">Interest Rate</th>
                      <th className="text-md tracking-wide">Earning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="flex items-center">
                        <img
                          src="/assests/cryptocurrency-color_usdc.svg"
                          className="w-7 h-7"
                          alt=""
                        />
                        <p className="text-[#72C5B6] text-md whitespace-nowrap ml-2">
                          {investment.investedAmount}
                        </p>
                      </td>
                      <td>
                        <p className="text-[#72C5B6] text-md whitespace-nowrap">
                          {investment.investmentDuration}
                        </p>
                      </td>
                      <td>
                        <p className="text-[#72C5B6] text-md whitespace-nowrap">
                          {investment.interestRate}
                        </p>
                      </td>
                      <td>
                        <p className="text-[#72C5B6] text-md whitespace-nowrap">
                          {investment.earning}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-[#1A1F25] rounded-[20px] m-1 grid-cols-5 ml-2 flex relative items-center col-span-2 py-[50px]">
                <div className="flex justify-between items-center absolute top-0 right-0">
                  <div className="bg-[#E9B6A6] text-[#1A1F25] rounded-[5px] px-3 py-1 text-xs mb-4 rounded-tr-[6px] overflow-hidden">
                    {investment.num}
                  </div>
                </div>
                <div className="flex justify-between w-full px-4 items-center">
                  <div className="flex flex-col justify-center">
                    <p className="text-[#E4ECCE] text-md ">
                      Loan Paid Off On{' '}
                      <span className="text-[#72C5B6]">{investment.payoffDate}</span>
                    </p>
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

export default CompletedInvestments;
