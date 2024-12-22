"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";


import PageHeader from '@/app/components/PageHeader'
import tblImage from "../../../../public/images/Leading media.png";
import { Metadata } from 'next';
const metadata = {
    title: 'Procurement',
};

export default function Page() {
    const router = useRouter();

    return (
        <>
            <PageHeader />
            <div className="mt-10 gap-4 space-y-10 p-6">
                <div className=" rounded-lg max-w-full mx-auto flex justify-between items-center">
                    <div className="mt-6">
                        <h2 className="text-lg font-semibold">Quote details</h2>
                        <p className="text-sm text-gray-500 mt-1">Created on Wed, 12th June 2022, 08:00am</p>
                    </div>

                    <div className="flex justify-end mt-4 space-x-3">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md" onClick={() => router.push("/procurement/quotes/step1")}>Respond</button>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-md flex items-center justify-between  gap-2"><svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.87571 1.19679C1.55028 0.871358 1.02264 0.871357 0.697203 1.19679C0.371766 1.52223 0.371766 2.04987 0.697203 2.37531L4.82199 6.5001L0.697203 10.6249C0.371766 10.9503 0.371766 11.478 0.697203 11.8034C1.02264 12.1288 1.55028 12.1288 1.87571 11.8034L6.0005 7.67861L10.1253 11.8034C10.4507 12.1288 10.9784 12.1288 11.3038 11.8034C11.6292 11.478 11.6292 10.9503 11.3038 10.6249L7.17902 6.5001L11.3038 2.37531C11.6292 2.04987 11.6292 1.52223 11.3038 1.19679C10.9784 0.871358 10.4507 0.871358 10.1253 1.19679L6.0005 5.32158L1.87571 1.19679Z" fill="white" />
                        </svg>
                            Reject</button>
                    </div>
                </div>
                <div className=" rounded-lg p-6 max-w-full mx-auto border border-[#E4E7EC]">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold">Quote Information</h2>
                        <div className="text-right">
                            <span className="text-sm text-gray-500">Expected delivery date :</span>
                            <span className="text-black font-medium">2024-12-02</span>
                        </div>

                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                            <div className="mt-4 space-y-7">
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-28">Title</span>
                                    <span className="text-black ms-20">Request for Equipments</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-28">RFQ No</span>
                                    <span className="text-black ms-20">RQ #01234</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-28">Requestor</span>
                                    <div className="flex items-center space-x-2 ms-20">
                                        <div className="w-8 h-8 bg-[#FFECE5] text-[#101928] rounded-full flex items-center justify-center font-semibold text-[14px]">JD</div>
                                        <span className="text-black">Jane Doe</span>
                                        <span className="text-[16px] text-[#98A2B3]">&bull; Head Nurse, Paediatrics</span>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-28">Status</span>
                                    <span className="text-[#F56630] bg-[#FFECE5] px-3 py-1 rounded-full text-[12px] ms-20">Awaiting</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="text-gray-500 w-28">Department</span>
                                    <span className="text-black ms-20">Maternity</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 border rounded-lg order border-[#E4E7EC] w-[352px]">
                            <div className="flex gap-2">
                                <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.91665 3.83333C7.91665 4.29357 7.54355 4.66667 7.08331 4.66667H6.24998C5.78974 4.66667 5.41665 4.29357 5.41665 3.83333C5.41665 3.3731 5.78974 3 6.24998 3H7.08331C7.54355 3 7.91665 3.3731 7.91665 3.83333Z" fill="#98A2B3" />
                                    <path d="M10.4166 7.16667C10.8769 7.16667 11.25 6.79357 11.25 6.33333C11.25 5.8731 10.8769 5.5 10.4166 5.5H9.58331C9.12308 5.5 8.74998 5.8731 8.74998 6.33333C8.74998 6.79357 9.12308 7.16667 9.58331 7.16667H10.4166Z" fill="#98A2B3" />
                                    <path d="M7.91665 8.83333C7.91665 9.29357 7.54355 9.66667 7.08331 9.66667H6.24998C5.78974 9.66667 5.41665 9.29357 5.41665 8.83333C5.41665 8.3731 5.78974 8 6.24998 8H7.08331C7.54355 8 7.91665 8.3731 7.91665 8.83333Z" fill="#98A2B3" />
                                    <path d="M10.4166 4.66667C10.8769 4.66667 11.25 4.29357 11.25 3.83333C11.25 3.3731 10.8769 3 10.4166 3H9.58331C9.12308 3 8.74998 3.3731 8.74998 3.83333C8.74998 4.29357 9.12308 4.66667 9.58331 4.66667H10.4166Z" fill="#98A2B3" />
                                    <path d="M7.91665 6.33333C7.91665 6.79357 7.54355 7.16667 7.08331 7.16667H6.24998C5.78974 7.16667 5.41665 6.79357 5.41665 6.33333C5.41665 5.8731 5.78974 5.5 6.24998 5.5H7.08331C7.54355 5.5 7.91665 5.8731 7.91665 6.33333Z" fill="#98A2B3" />
                                    <path d="M10.4166 9.66667C10.8769 9.66667 11.25 9.29357 11.25 8.83333C11.25 8.3731 10.8769 8 10.4166 8H9.58331C9.12308 8 8.74998 8.3731 8.74998 8.83333C8.74998 9.29357 9.12308 9.66667 9.58331 9.66667H10.4166Z" fill="#98A2B3" />
                                    <path d="M7.91665 11.3333C7.91665 11.7936 7.54355 12.1667 7.08331 12.1667H6.24998C5.78974 12.1667 5.41665 11.7936 5.41665 11.3333C5.41665 10.8731 5.78974 10.5 6.24998 10.5H7.08331C7.54355 10.5 7.91665 10.8731 7.91665 11.3333Z" fill="#98A2B3" />
                                    <path d="M10.4166 12.1667C10.8769 12.1667 11.25 11.7936 11.25 11.3333C11.25 10.8731 10.8769 10.5 10.4166 10.5H9.58331C9.12308 10.5 8.74998 10.8731 8.74998 11.3333C8.74998 11.7936 9.12308 12.1667 9.58331 12.1667H10.4166Z" fill="#98A2B3" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.33331 2.16667C3.33331 1.24619 4.0795 0.5 4.99998 0.5H11.6666C12.5871 0.5 13.3333 1.24619 13.3333 2.16667V5.5H15.8333C16.7538 5.5 17.5 6.24619 17.5 7.16667V13.8333H18.3333C18.7935 13.8333 19.1666 14.2064 19.1666 14.6667C19.1666 15.1269 18.7935 15.5 18.3333 15.5H1.66665C1.20641 15.5 0.833313 15.1269 0.833313 14.6667C0.833313 14.2064 1.20641 13.8333 1.66665 13.8333H3.33331V2.16667ZM4.99998 13.8333H11.6666V2.16667H4.99998V13.8333ZM15.8333 10.5V9.66667H15.4166C14.9564 9.66667 14.5833 9.29357 14.5833 8.83333C14.5833 8.3731 14.9564 8 15.4166 8H15.8333V7.16667H13.3333V13.8333H15.8333V12.1667H15.4166C14.9564 12.1667 14.5833 11.7936 14.5833 11.3333C14.5833 10.8731 14.9564 10.5 15.4166 10.5H15.8333Z" fill="#98A2B3" />
                                </svg>
                                <span className="text-sm font-medium text-gray-500">Client</span>

                            </div>
                            <div className="flex items-center mt-2">
                                <div className="w-8 h-8 bg-[#FFECE5] text-[#101928] rounded-full flex items-center justify-center font-semibold text-[10px]">W</div>
                                <div className="ml-3">
                                    <p className="text-black font-medium">Westend Hospital</p>
                                    <p className="text-sm text-gray-400">Clear street</p>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>

                <div className="p-6 bg-white shadow rounded-lg max-w-full mx-auto border">
                    <h2 className="text-lg font-semibold mb-4">Item(s)</h2>
                    <div className="overflow-x-auto rounded-[10px]  border  border-[#E4E7EC]">
                        <table className="w-full text-left ">
                            <thead>
                                <tr className="bg-gray-100 text-gray-600 text-sm font-medium">
                                    <th className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                                    </th>
                                    <th className="p-4">Items</th>
                                    <th className="p-4">Variants</th>
                                    <th className="p-4">Quantity</th>
                                    <th className="p-4">Price</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4">Expected Delivery Date</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-800 text-sm divide-y divide-gray-200">
                                <tr>
                                    <td className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4 flex items-center">
                                        <Image
                                            alt="Oxygen Concentrator"
                                            className="w-10 h-10 rounded-md mr-3"
                                            src={tblImage}
                                        />
                                        <div>
                                            <p className="font-medium">Oxygen concentrator</p>
                                            <p className="text-xs text-gray-500">#28373</p>
                                        </div>
                                    </td>
                                    <td className="p-4">Blue</td>
                                    <td className="p-4">100 pieces</td>
                                    <td className="p-4">$200.00</td>
                                    <td className="p-4">$2,000.00</td>
                                    <td className="p-4">2024-08-07</td>
                                </tr>
                                <tr>
                                    <td className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4 flex items-center">
                                        <Image
                                            alt="Oxygen Concentrator"
                                            className="w-10 h-10 rounded-md mr-3"
                                            src={tblImage}
                                        />
                                        <div>
                                            <p className="font-medium">Mechanical ventilator</p>
                                            <p className="text-xs text-gray-500">#28373</p>
                                        </div>
                                    </td>
                                    <td className="p-4">NIL</td>
                                    <td className="p-4">45 Kg</td>
                                    <td className="p-4">$350.00</td>
                                    <td className="p-4">$2,500.00</td>
                                    <td className="p-4">2024-08-07</td>
                                </tr>
                                <tr>
                                    <td className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4 flex items-center">
                                        <Image
                                            alt="Patient Monitor"
                                            className="w-10 h-10 rounded-md mr-3"
                                            src={tblImage}
                                        />
                                        <div>
                                            <p className="font-medium">Patient Monitor</p>
                                            <p className="text-xs text-gray-500">#28373</p>
                                        </div>
                                    </td>
                                    <td className="p-4">Blue</td>
                                    <td className="p-4">30 Units</td>
                                    <td className="p-4">$300.00</td>
                                    <td className="p-4">$1,500.00</td>
                                    <td className="p-4">2024-08-07</td>
                                </tr>
                                <tr>
                                    <td className="p-4">
                                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
                                    </td>
                                    <td className="p-4 flex items-center">
                                        <Image
                                            alt="Mechanical Ventilator"
                                            className="w-10 h-10 rounded-md mr-3"
                                            src={tblImage}
                                        />
                                        <div>
                                            <p className="font-medium">Mechanical ventilator</p>
                                            <p className="text-xs text-gray-500">#28373</p>
                                        </div>
                                    </td>
                                    <td className="p-4">Blue</td>
                                    <td className="p-4">35 Units</td>
                                    <td className="p-4">$200.00</td>
                                    <td className="p-4">$1,500.00</td>
                                    <td className="p-4">2024-08-07</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="flex flex-col flex-1 gap-x-10">
                        <div className="mt-6 flex justify-end gap-10 text-gray-800">
                            <p>Sub Total</p>
                            <p className="font-medium">$8,000.00</p>
                        </div>
                        <div className="flex justify-end gap-10 text-gray-800 mt-1">
                            <p>Total</p>
                            <p className="font-bold text-lg">$8,750.00</p>
                        </div>

                    </div>
                </div>

                <div className="p-[24px] rounded-lg border border-[#D0D5DD] flex items-center justify-between max-w-full mx-auto">
                    <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.33333 1.33331C6.38782 1.33331 4 3.72113 4 6.66665V25.3333C4 28.2788 6.38781 30.6666 9.33333 30.6666H22.6667C25.6122 30.6666 28 28.2788 28 25.3333V12.1148C28 10.8672 27.5626 9.65901 26.7638 8.70053L22.2237 3.25233C21.2104 2.03637 19.7093 1.33331 18.1265 1.33331H9.33333ZM6.66667 6.66665C6.66667 5.19389 7.86057 3.99998 9.33333 3.99998H17.3333V7.99998C17.3333 10.9455 19.7211 13.3333 22.6667 13.3333H25.3333V25.3333C25.3333 26.8061 24.1394 28 22.6667 28H9.33333C7.86057 28 6.66667 26.8061 6.66667 25.3333V6.66665ZM24.9058 10.6666C24.8478 10.577 24.7842 10.4905 24.7153 10.4077L20.1751 4.95949C20.1196 4.89286 20.0611 4.82931 20 4.76897V7.99998C20 9.47274 21.1939 10.6666 22.6667 10.6666H24.9058Z" fill="#344054" />
                                <path d="M22.3329 25.04C22.0929 25.04 21.8662 24.96 21.6662 24.7867C20.8796 24.0934 20.4396 23.8 20.2129 23.6667C20.0929 23.76 19.9329 23.88 19.7862 24C18.9062 24.68 18.4129 25.04 17.8796 25.04C17.1462 25.04 16.0262 24.7867 15.3062 23.44L15.0129 23.88C14.5462 24.5734 13.9729 24.9334 13.3329 24.9467C12.3462 24.9334 11.6396 24.2534 10.9729 23.4267C10.5862 23.8534 10.1596 24.2934 9.69291 24.76C9.29291 25.1467 8.66624 25.1467 8.27958 24.76C7.89291 24.3734 7.89291 23.7334 8.27958 23.3467C8.89291 22.7334 9.39958 22.1867 9.82624 21.7067C9.27958 20.6934 8.74624 19.4 8.71958 18.2667C8.70624 17.2534 9.01291 16.3734 9.59958 15.7734C10.0396 15.32 10.6129 15.0667 11.1996 15.0667C12.4262 15.0667 13.6796 15.44 13.6796 18.2534C13.6796 19.3067 13.2129 20.4934 12.2529 21.8534C12.2929 21.9067 12.3329 21.96 12.3729 22.0134C12.8262 22.6134 13.0929 22.84 13.2262 22.9334C13.2529 22.8934 13.2929 22.8534 13.3329 22.7867L14.8129 20.6C15.0529 20.2534 15.4662 20.0934 15.8796 20.1867C16.2796 20.28 16.5862 20.6267 16.6396 21.0267C16.8529 22.7334 17.3862 23.0134 17.7062 23.0534C17.9196 22.92 18.3062 22.6267 18.5462 22.44C19.2796 21.8667 19.6262 21.6134 20.0796 21.6134C20.6529 21.6134 21.3596 21.9067 22.9596 23.32C23.3729 23.68 23.4129 24.32 23.0529 24.7334C22.8529 24.96 22.5729 25.0667 22.3062 25.0667L22.3329 25.04ZM11.5329 17.0134C11.5329 17.0134 11.3462 17.04 11.2262 17.04C11.1996 17.04 11.1329 17.0667 11.0529 17.1467C10.9596 17.24 10.7329 17.5467 10.7462 18.2134C10.7462 18.6667 10.9329 19.2534 11.1729 19.84C11.6129 19.0667 11.7062 18.5467 11.7062 18.2267C11.7062 17.2534 11.5329 17.0267 11.5329 17.0267V17.0134Z" fill="#344054" />
                                <path d="M14.8802 10H9.54687C9.00021 10 8.54688 9.54667 8.54688 9C8.54688 8.45333 9.00021 8 9.54687 8H14.8802C15.4269 8 15.8802 8.45333 15.8802 9C15.8802 9.54667 15.4269 10 14.8802 10Z" fill="#344054" />
                            </svg>

                        </div>
                        <div>
                            <h3 className="text-[20px] font-semibold text-gray-800">Terms and Attachments</h3>
                            <p className="text-[14px] text-gray-500">Review payment and delivery terms</p>
                        </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>



            </div>

        </>
    )

}