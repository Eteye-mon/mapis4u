"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { Select, SelectItem } from "@nextui-org/react";

import WizardLayout from '../page';

export default function Page() {
    const [value, setValue] = React.useState("");

    return (
        <WizardLayout currentStep={2}>
            <div className="max-w-7xl mx-auto p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Terms and Attachments</h2>
                <p className="text-sm text-gray-600 mb-6">Provide detailed information on payment and delivery terms.</p>

                <form action="#" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Select
                                className="max-w-full"
                                label="Payment Terms"
                                labelPlacement="outside"
                                placeholder="Select Payment Terms"
                            >
                                <SelectItem >Net 30</SelectItem>
                                <SelectItem>Net 60</SelectItem>
                                <SelectItem>Net 90</SelectItem>
                            </Select>
                        </div>
                        <div>
                            <Select
                                className="max-w-full"
                                label="Delivery Schedule"
                                labelPlacement="outside"
                                placeholder="Select Delivery Schedule"
                            >  <SelectItem>Immediate delivery</SelectItem>
                                <SelectItem>Within 7 days</SelectItem>
                                <SelectItem>Within 14 days</SelectItem>

                            </Select>
                        </div>
                        <div>
                            <Select
                                className="max-w-full"
                                label="Shipping Method"
                                labelPlacement="outside"
                                placeholder="Select Shipping Method"
                            > 
                                <SelectItem>Courier Services</SelectItem>
                                <SelectItem>Freight</SelectItem>
                                <SelectItem>Air Cargo</SelectItem>
                            </Select>
                        </div>
                        <div>
                            <Select
                                className="max-w-full"
                                label="Lead Time"
                                labelPlacement="outside"
                                placeholder="Select Lead Time"
                            > 
                                <SelectItem>Days</SelectItem>
                                <SelectItem>Weeks</SelectItem>
                            </Select>
                        </div>
                        
                    </div>

                    <div className='w-1/3'>
                        <label className="block text-sm font-medium text-gray-700 mb-2" for="attachments">Attachments</label>
                        <div
                            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-6"
                        >
                            <svg width="57" height="56" viewBox="0 0 57 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="28.5" cy="28" r="28" fill="#F0F2F5" />
                                <path d="M21.5001 25.0834C21.5001 21.5395 24.3729 18.6667 27.9167 18.6667C31.0559 18.6667 33.6708 20.9221 34.2249 23.9012C34.3027 24.3189 34.6014 24.6614 35.0047 24.7951C37.3272 25.5654 39.0001 27.7556 39.0001 30.3334C39.0001 33.555 36.3884 36.1667 33.1667 36.1667C32.5224 36.1667 32.0001 36.689 32.0001 37.3334C32.0001 37.9777 32.5224 38.5 33.1667 38.5C37.6771 38.5 41.3334 34.8437 41.3334 30.3334C41.3334 26.9588 39.2874 24.0648 36.3708 22.8195C35.3727 19.0844 31.9671 16.3334 27.9167 16.3334C23.0843 16.3334 19.1667 20.2509 19.1667 25.0834C19.1667 25.2004 19.1691 25.3169 19.1736 25.4328C17.079 26.6413 15.6667 28.9047 15.6667 31.5C15.6667 35.366 18.8008 38.5 22.6667 38.5C23.3111 38.5 23.8334 37.9777 23.8334 37.3334C23.8334 36.689 23.3111 36.1667 22.6667 36.1667C20.0894 36.1667 18.0001 34.0774 18.0001 31.5C18.0001 29.5665 19.1763 27.9049 20.8568 27.197C21.3432 26.9921 21.6314 26.4864 21.5598 25.9635C21.5205 25.6763 21.5001 25.3826 21.5001 25.0834Z" fill="#475367" />
                                <path d="M27.725 30.6281C28.167 30.2351 28.8331 30.2351 29.2752 30.6281L31.0252 32.1836C31.5068 32.6117 31.5501 33.3491 31.1221 33.8307C30.7476 34.252 30.1363 34.3379 29.6667 34.0662V39.6667C29.6667 40.311 29.1444 40.8334 28.5001 40.8334C27.8557 40.8334 27.3334 40.311 27.3334 39.6667V34.0662C26.8638 34.3379 26.2526 34.252 25.8781 33.8307C25.45 33.3491 25.4934 32.6117 25.975 32.1836L27.725 30.6281Z" fill="#475367" />
                            </svg>

                            <p className="mt-2 text-[14px] text-gray-600"><span className='text-[#175CFF]'> Click to upload </span> or drag and drop</p>
                            <p className="text-[12px] text-gray-500">SVG, PNG, JPG, or GIF (max. 800x400px)</p>
                            <button
                                type="button"
                                className="mt-4 px-4 py-2 border border-[#175CFF] bg-white text-[#175CFF] text-sm rounded-md hover:bg-blue-700"
                            >
                                Browse Files
                            </button>
                        </div>
                    </div>

                </form>
            </div>

        </WizardLayout>
    )

}