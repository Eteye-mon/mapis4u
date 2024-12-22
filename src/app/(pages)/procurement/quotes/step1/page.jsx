"use client"

import React, { useState } from 'react'
// import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Divider } from "@nextui-org/divider";
import { DatePicker } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import WizardLayout from '../page';

export default function Page() {
    const [value, setValue] = React.useState("");

    return (
        <WizardLayout currentStep={1}>
                <div className="max-w-full mx-auto p-6 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">Request for Quote</h2>
                    <form action="#" method="POST" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <Input
                                    label="RFQ No"
                                    labelPlacement="outside"
                                    placeholder="RFQ-10234"
                                    type="text"
                                    className="border border-[#D0D5DD] bg=[#F0F2F5] rounded-xl"
                                />
                            </div>
                            <div>
                                <Input
                                    label="Title"
                                    labelPlacement="outside"
                                    placeholder="Request for Equipments"
                                    type="text"
                                    className="border border-[#D0D5DD] bg=[#F0F2F5] rounded-xl"
                                />
                            </div>
                            <div>
                                <Input
                                    isClearable
                                    label="Department"
                                    labelPlacement="outside"
                                    placeholder="Maternity"
                                    type="text"
                                    className="border border-[#D0D5DD] bg=[#F0F2F5] rounded-xl"
                                />
                            </div>
                            <div>
                                <DatePicker
                                    className="max-w-full"
                                    label={"Expected Delivery Date"}
                                    labelPlacement="outside"
                                    description={"Calculated based on lead time and issue date"}
                                    selectorIcon="Date"
                                    variant="bordered"
                                // className="border border-[#D0D5DD] rounded-xl"
                                />
                            </div>
                        </div>
                        <Divider orientation="vertical" className='text-red-500' />

                        <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 rounded-lg">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Items</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Variant</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Quantity</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Price</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Expected Delivery Date</th>
                                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">Amount</th>
                                        <th className="px-4 py-2"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="px-4 py-2">Oxygen Concentrator</td>
                                        <td className="px-4 py-2">Blue</td>
                                        <td className="px-4 py-2">100</td>
                                        <td className="px-4 py-2">$12.00</td>
                                        <td className="px-4 py-2">2023-12-02</td>
                                        <td className="px-4 py-2">$1200.00</td>
                                        <td className="px-4 py-2 text-right">
                                            <button className="text-red-500 hover:text-red-700">Delete</button>
                                        </td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-4 py-2">Mechanical Ventilator</td>
                                        <td className="px-4 py-2">Blue</td>
                                        <td className="px-4 py-2">100</td>
                                        <td className="px-4 py-2">$12.00</td>
                                        <td className="px-4 py-2">2023-12-02</td>
                                        <td className="px-4 py-2">$1200.00</td>
                                        <td className="px-4 py-2 text-right">
                                            <button className="text-red-500 hover:text-red-700">Delete</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='w-1/3'>
                            <Textarea

                                className="mb-6 md:mb-0"
                                label="Note"
                                labelPlacement="outside"
                                placeholder="Enter note here"
                                variant="bordered"
                                onValueChange={setValue}
                                maxRows={3}
                            />
                            <p className="text-default-500 text-small text-end mt-3">{value.length}/200</p>
                        </div>
                    </form>
                </div>
        </WizardLayout>
    )

}