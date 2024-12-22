import React from 'react'
import { UserOctagon } from 'iconsax-react'
function StatisticsCard({ count, icon, text }) {
    return (
        <>  <div className="card bg-[#000] h-[195px]  rounded-3xl">
            <div className="card-body flex flex-col justify-between p-7 h-full">
                <div className='flex justify-between items-center'>
                    <h5 className="text-[48px] font-medium text-[#FAFAF9]">{count}</h5>
                    <div className="bg-[#B9BEBD] rounded-3xl w-14 py-2 flex justify-center items-center ms-auto">
                        {icon}
                    </div>


                </div>
                <div className='flex justify-between items-center'>
                    <h5 className="text-[14px] text-[#FAFAF9] font-medium">{text}</h5>
                </div>
            </div>
        </div></>
    )
}

export default StatisticsCard