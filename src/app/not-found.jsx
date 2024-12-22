"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from '@nextui-org/react'
import { UserOctagon, Diamonds, ArrowDown2, ArrowLeft, ArrowRight, UserCirlceAdd } from "iconsax-react";
import {useRouter} from 'next/navigation';


export default function NotFound() {
  const router = useRouter();
  return (
    <section className="bg-white dark:bg-gray-900 ">
    <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            
            <h1 className="text-9xl font-black text-gray-200">404</h1>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">The page you are looking for doesn&apos;t exist.</p>

            <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
                               
                <Button onClick={() => router.back()} size="md" fullWidth className="bg-[#fffff] text-gray-900 font-medium hover:bg-gray-100 w-1/2 text-sm shrink-0 sm:w-auto border dark:border-gray-700" startContent={<ArrowLeft color="#000" variant="Outline" size={16} />}>Go Backs</Button>
            </div>
        </div>
    </div>
</section>
  )
}
