"use client"

import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { UserOctagon, FolderAdd, Image, ArrowRight } from 'iconsax-react'
import { Divider, Chip, User, Textarea, Input, Button, } from '@nextui-org/react'
import RightSheet from '@/app/components/RightSheet'
import PageHeader from '@/app/components/PageHeader'
// import image1 from "../../../../public/images/barbing.svg"
// import image2 from "../../../../public/images/manicure.svg"
// import image3 from "../../../../public/images/spa.svg"
// import ServicesCard from '@/app/components/ServicesCard'
import { Metadata } from 'next';

const metadata = {
    title: 'Overview',
};
function Page() {
    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
        if (selectedFile) {
            setFileName(`File name: ${selectedFile.name}`);

        }
    };
    useEffect(() => {

    })

    return (
        <>
            <PageHeader />
            <div className='mt-10 gap-4 space-y-10'>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="lg:col-span-2">
                        <div className="card bg-[#DFBC1A] h-[227px] rounded-3xl shadow-lg flex justify-center items-center">
                            <div className="card-body flex justify-between items-center p-5 w-full">
                                <div className="left text- space-y-2 px-4">
                                    <h5 className="card-title text-md font-semibold">Total appointments</h5>
                                    <p className="card-textb text-5xl font-medium">288</p>
                                    <span className="inline-block  py-1 rounded-lg text-sm">
                                        Something should will be here
                                    </span>
                                </div>
                                <div className="right text-center">
                                    <Link href="/appointments" className="bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-700">
                                        See more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="card bg-[#000] h-[135px] w-full absolute top-[-0px] left-1/2 transform -translate-x-1/2 rounded-3xl shadow-lg ">
                            <div className="card-body flex flex-col justify-between p-5 h-full">
                                <div className='flex justify-between items-center'>
                                    <h5 className="text-[24px] font-semibold text-white">Total Users</h5>
                                    <UserOctagon color="#828488" variant="Outline" />

                                </div>
                                <div className='flex justify-between items-center'>
                                    <h5 className="text-[14px] text-gray-400 font-medium">Barbers and workers</h5>
                                    <h5 className="text-[14px] text-gray-400 font-medium">102</h5>

                                </div>
                            </div>
                        </div>
                        <div className="card bg-[#EBEBE6] h-[135px] w-[100%] mx-auto rounded-3xl shadow-lg flex justify-center items-end mt-20">
                            <div className="card-body flex justify-between items-end p-5 w-full">
                                <h5 className="text-[14px] text-gray-800 font-medium">Customers</h5>
                                <h5 className="text-[14px] text-gray-800 font-medium">102</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <section className='services space-y-10'>
                    <div className="add">
                        <h2 className='text-[#FFFFFF] opacity-100'>Services</h2>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        <RightSheet header="Add Services" subtext="Add new services to the salon" content={
                            <div className=" space-y-10 w-full">
                                <div className="upload space-y-5">

                                    <div className="card rounded-[32px] bg-[#4f4827] opacity-100 cursor-pointer w-full border-2 border-dotted border-[#DA9D00]">
                                        <label htmlFor="fileInput" >
                                            <div className="flex flex-col items-center justify-center h-[154px] ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none">
                                                    <path d="m22.019 16.82-3.13-7.32c-.57-1.34-1.42-2.1-2.39-2.15-.96-.05-1.89.62-2.6 1.9l-1.9 3.41c-.4.72-.97 1.15-1.59 1.2-.63.06-1.26-.27-1.77-.92l-.22-.28c-.71-.89-1.59-1.32-2.49-1.23-.9.09-1.67.71-2.18 1.72l-1.73 3.45c-.62 1.25-.56 2.7.17 3.88.73 1.18 2 1.89 3.39 1.89h12.76c1.34 0 2.59-.67 3.33-1.79.76-1.12.88-2.53.35-3.76ZM6.97 8.381a3.38 3.38 0 1 0 0-6.76 3.38 3.38 0 0 0 0 6.76Z" fill="#da9d00"></path>
                                                </svg>
                                                <h2 className="text-[#DA9D00] text-[14px]"> Cover image</h2>
                                            </div>
                                        </label>
                                        <input id="fileInput"
                                            type="file"
                                            accept=".xls,.xlsx,.csv"
                                            className="sr-only"
                                            onChange={handleFileChange} />

                                    </div>
                                    <div className="flex item-center justify-between">
                                        <span className="text-[16px] text-[#fff]">{fileName}</span>
                                        {file && (
                                            <Button color="warning" variant="ghost" size="sm" radius="full">
                                                Upload File
                                            </Button>
                                        )}
                                    </div>
                                </div>

                                <div className="form">
                                    <form className="space-y-5 w-full">
                                        <div className="grid grid-cols-3 gap-4">
                                            <div className="col-span-2">
                                                <Input
                                                    isRequired
                                                    className="max-w-full"
                                                    size="sm"
                                                    label="Service name"
                                                    type="email"
                                                />

                                            </div>
                                            <Input
                                                isRequired
                                                className="max-w-full rounded-[32px]"
                                                size="sm"
                                                label="Service charge"
                                                type="email"
                                            />

                                        </div>
                                        <Textarea
                                            isRequired
                                            label="Service description"
                                            className="max-w-full"
                                        />

                                        <Button
                                            size="lg"
                                            fullWidth
                                            radius="full"
                                            variant="solid"
                                            className="bg-[#DFBC1A] text-gray-900 font-semibold"
                                            endContent={<ArrowRight color="#000" variant="Outline" size={16} />}
                                        >
                                            Add Service
                                        </Button>
                                    </form>

                                </div>
                            </div>

                        } btnText="Add Services" />
                        <div className="col-span-3">
                            <div className="flex gap-8 items-center justify-start overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
                                {/* <ServicesCard imageSrc={image1} text="Barbing Services" />
                                <ServicesCard imageSrc={image2} />
                                <ServicesCard imageSrc={image3} text="Spa Services" />
                                <ServicesCard imageSrc={image3} text="Spa Services" /> */}
                            </div>

                        </div>

                    </div>

                </section>

                <section className='recent_appointment space-y-10'>
                    <div className="">
                        <h2 className='text-[#FFFFFF] opacity-100'>Recent Appointment</h2>
                    </div>
                    <div className="overflow-x-auto  ">
                        <table className="min-w-full divide--gray-200  text-sm">
                            <thead className=" bg-transparent border-b border-gray-700">
                                <tr>
                                    <th className=" py-2 text-left font-medium text-white">Worker</th>
                                    <th className=" py-2 text-left font-medium text-white">Customer</th>
                                    <th className=" py-2 text-left font-medium text-white">Service</th>
                                    <th className=" py-2 text-left font-medium text-white">Date & Time</th>
                                    <th className=" py-2 text-left font-medium text-white">Status</th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        <User
                                            radius="md"
                                            name="Jane Doe"
                                            description="Product Designer"
                                            classNames={{
                                                name: "",
                                                description: "",
                                            }}
                                            avatarProps={{
                                                radius: "md",
                                                size: "md",
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        <User
                                            name="Jane Doe"
                                            description="Product Designer"
                                            classNames={{
                                                name: "",
                                                description: "",
                                            }}
                                            avatarProps={{
                                                radius: "md",
                                                size: "md",
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        Spa
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        August 3, 2024 | 2:00PM
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-yellow-600">
                                        pending
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        <User
                                            name="Jane Doe"
                                            description="Product Designer"
                                            classNames={{
                                                name: "",
                                                description: "",
                                            }}
                                            avatarProps={{
                                                radius: "md",
                                                size: "md",
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        <User
                                            name="Jane Doe"
                                            description="Product Designer"
                                            classNames={{
                                                name: "",
                                                description: "",
                                            }}
                                            avatarProps={{
                                                radius: "md",
                                                size: "md",
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        Spa
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        August 3, 2024 | 2:00PM
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-yellow-600">
                                        pending
                                    </td>
                                </tr>
                                <tr>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        <User
                                            name="Jane Doe"
                                            description="Product Designer"
                                            classNames={{
                                                name: "",
                                                description: "",
                                            }}
                                            avatarProps={{
                                                radius: "md",
                                                size: "md",
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        <User
                                            name="Jane Doe"
                                            description="Product Designer"
                                            classNames={{
                                                name: "",
                                                description: "",
                                            }}
                                            avatarProps={{
                                                radius: "md",
                                                size: "md",
                                                src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                            }}
                                        />
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        Spa
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-white">
                                        August 3, 2024 | 2:00PM
                                    </td>
                                    <td className="whitespace-nowrap  py-4 font-medium text-yellow-600">
                                        pending
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
                <section className='platform_tatistics space-y-10'>
                    <div className="">
                        <h2 className='text-[#FFFFFF] opacity-100'>Platform statistics</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <div className="card w-full h-full rounded-[32px] p-5 bg-[#EBEBE6]">
                            <div className="card-body space-y-5">
                                <div className="mb-10">
                                    <span className='text-[#292927] text-[18px] font-semibold opacity-100'>Top rated workers</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Chip size="md">4.7 rating</Chip>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Chip size="md">4.7 rating</Chip>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Chip size="md">4.7 rating</Chip>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full h-full rounded-[32px] p-5 bg-[#EBEBE6]">
                            <div className="card-body space-y-5">
                                <div className="mb-10">
                                    <span className='text-[#292927] text-[18px] font-semibold  opacity-100'>Top rated customers</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Chip size="md">4.7 rating</Chip>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Chip size="md">4.7 rating</Chip>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <Chip size="md">4.7 rating</Chip>
                                </div>
                            </div>
                        </div>
                        <div className="card w-full h-full rounded-[32px] p-5 bg-[#EBEBE6]">
                            <div className="card-body space-y-5">
                                <div className="mb-10">
                                    <span className='text-[#292927] text-[18px] font-semibold  opacity-100'>Top requested services</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <div className="bg-[#DADADA] rounded-3xl w-14 py-1 flex justify-center items-center ms-auto">
                                        1
                                    </div>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <div className="bg-[#DADADA] rounded-3xl w-14 py-1 flex justify-center items-center ms-auto">
                                        3
                                    </div>
                                </div>
                                <Divider className="my-4" />
                                <div className="flex items-center justify-between">
                                    <User
                                        name="Jane Doe"
                                        description="Product Designer"
                                        classNames={{
                                            name: "text-[16px] text-[#292927] font-semibold",
                                            description: "text-[14px]",
                                        }}
                                        avatarProps={{
                                            size: "lg",
                                            src: "https://i.pravatar.cc/150?u=a04258114e29026702d"
                                        }}
                                    />
                                    <div className="bg-[#DADADA] rounded-3xl w-14 py-1 flex justify-center items-center ms-auto">
                                        2
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </>
    )
}

export default Page