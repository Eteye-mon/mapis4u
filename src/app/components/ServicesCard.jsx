"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter, Button } from "@nextui-org/react";

export default function ServicesCard({ imageSrc, text }) {
    return (
        <div className=" ">
            <div className="card h-[154px] w-full md:w-[276px] rounded-[70px] bg-transparent relative">
                <div className="card-heade absolute z-10 bottom-8 left-7 flex-col !items-start">
                    <h4 className="text-white font-semibold text-large">{text} </h4>
                </div>
                <Image
                    width={348}
                    height={195}
                    radius="full"
                    alt="Card background"
                    className="w-[348px] h-[154px] object-cover rounded-xl z-0,"
                    src={imageSrc}
                />
            </div>
        </div>
    );
}

