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
        <WizardLayout currentStep={2}>
            <div className="max-w-full mx-auto p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Request for 22222</h2>
              
            </div>
        </WizardLayout>
    )

}