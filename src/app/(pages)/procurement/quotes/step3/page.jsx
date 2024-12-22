"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { DatePicker } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

import { DateInput } from "@nextui-org/react";
import { CalendarDate, parseDate } from "@internationalized/date";
import PageHeader from '@/app/components/PageHeader';
import tblImage from "../../../../../../public/images/Leading media.png";
import WizardLayout from '../page';

export default function Page() {
    const [value, setValue] = React.useState("");

    return (
        <WizardLayout currentStep={3}>
            <div className=" rounded-lg p-6 max-w-full mx-auto border border-[#E4E7EC]  mb-5">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold">Request Information</h2>
                    <div className="text-right">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5961 2.91009C19.2495 1.5635 17.0662 1.5635 15.7196 2.91009L7.19416 11.4356C6.58217 12.0475 6.18518 12.8415 6.06279 13.6983L5.81573 15.4277C5.62717 16.7476 6.75854 17.879 8.07847 17.6904L9.80784 17.4434C10.6646 17.321 11.4586 16.924 12.0706 16.312L20.5961 7.78652C21.9426 6.43993 21.9426 4.25668 20.5961 2.91009ZM17.3433 4.15061C17.907 3.76634 18.6818 3.82424 19.1818 4.3243C19.6819 4.82436 19.7398 5.59915 19.3555 6.16283L17.3433 4.15061ZM15.9112 5.54693L17.9592 7.59493L10.6564 14.8978C10.3504 15.2038 9.95339 15.4023 9.525 15.4635L7.79563 15.7105L8.04269 13.9811C8.10388 13.5527 8.30238 13.1558 8.60837 12.8498L15.9112 5.54693Z" fill="#98A2B3" />
                            <path d="M6 2.0001C3.79086 2.0001 2 3.79096 2 6.0001V18.0001C2 20.2092 3.79086 22.0001 6 22.0001H18C20.2091 22.0001 22 20.2092 22 18.0001V12.0001C22 11.4478 21.5523 11.0001 21 11.0001C20.4477 11.0001 20 11.4478 20 12.0001V18.0001C20 19.1047 19.1046 20.0001 18 20.0001H6C4.89543 20.0001 4 19.1047 4 18.0001V6.0001C4 4.89553 4.89543 4.0001 6 4.0001H8.68421C9.2365 4.0001 9.68421 3.55239 9.68421 3.0001C9.68421 2.44782 9.2365 2.0001 8.68421 2.0001H6Z" fill="#98A2B3" />
                        </svg>

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
                </div>


            </div>

            <div className="p-6 bg-white shadow rounded-lg max-w-full mx-auto border mb-5">
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

            <div className="p-[24px] rounded-lg border border-[#D0D5DD] flex items-center justify-between max-w-full mx-auto mb-16">
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
        </WizardLayout>
    )

}