import React, { useState } from "react";

function MyPoints() {
  const [pointsType , setPointsType] = useState('redeemPoints');
  return (
    <div
      className="flex flex-col gap-4 "
      style={{ fontFamily: "Sofia Sans" }}
    >
      <div className="flex flex-col">
        <div className="flex w-full justify-between">
          <div className="flex gap-2 items-center">
            <img src="/points.svg" />
            <p className="text-[#FDBD4D] flex items-end  gap-2 ">
              <span className="text-[1.3rem]">1200</span>
              <span className="text-sm">Points</span>
            </p>
          </div>
          <p className="text-xs md:text-sm underline p-1 font-semibold">Point history</p>
        </div>
        <p className="text-xs font-medium px-2">
          200 points expiring on 31/12/2025
        </p>
      </div>

      <div className="flex w-full items-center ">
        <span className={`w-1/2 ${pointsType == "redeemPoints" ? 'text-[#A71316] border-b-[#A71316]' : 'text-[#475467] border-b-[#475467] ' } border-b text-center p-3 `} onClick={()=>setPointsType('redeemPoints')}>
          Redeem Points
        </span>
        <span className={`w-1/2 ${pointsType == "earnPoints" ? 'text-[#A71316] border-b-[#A71316]' : 'text-[#475467] border-b-[#475467] ' } border-b text-center p-3 `} onClick={()=>setPointsType('earnPoints')}>
          Earn Points
        </span>
      </div>
      <div className="w-full  flex flex-wrap justify-evenly gap-y-4">
      {pointsType == "redeemPoints" && ( 
        Array.from({length:10}).map((_)=>(
            <div className="w-[8.6rem] flex flex-col gap-4">
                <div className="flex flex-col gap-1">
            <img 
            src="/pointsCard.png"
            className="h-28 w-full object-fill rounded-t-xl" />
            <p className=" text-sm font-medium text-[#1d2939]">10% discount voucher</p>
            </div>
            <div >
                <p className="text-[#FCB351] text-sm font-semibold ">1000 Points</p>
                <button className="max-w-[9.25rem] w-full p-2 rounded-xl border border-[#820f11]">Redeem</button>
                </div>
          </div>
        ))
      
      )}

      {/* //earn coins    */}

           { pointsType == 'earnPoints' && (
            Array.from({length: 6 }).map((_,index)=>(
                <div className="w-[9rem] h-[10.3rem] rounded-xl border-[#E1E1E1] bg-[#fff] py-1 px-4 flex flex-col justify-between "  key={index}>
                <div className="flex flex-col gap-2"><span className="text-[#FCB351] bg-[#f7debe] w-fit p-1 rounded-full text-[.6rem] font-bold tracking-wider ">Get +500 points</span>
                <span className="text-[#1D2939] font-medium text-sm tracking-wider">Review/ Rate to Earn</span>
                <span className="text-[#CF6264] text-[.6rem] font-[300]">Review and Rate your last order to earn more points</span>
                </div>
                <button className="w-full px-2 py-1 rounded-lg border border-[#820F11] text-[#820F11] ">Click to Earn</button>
            </div>
            ))
          )
        }     
        </div>
    </div>
  )
}

export default MyPoints;
