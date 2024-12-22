"use client"

import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Eye, EyeSlash, ArrowRight, Sms } from "iconsax-react";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useRouter } from "next/navigation";

import authImage from "../../../../public/images/Rectangle1.png";
import logo from "../../../../public/images/authlogo.png";


export default function IndexPage() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className="bg-[#141460] bg-[url('https://www.mapis4u.com/img/login_page_left_bg.png')] bg-cover bg-center" >
      <div className="grid grid-cols-1  ">
        {/* <div className="grid.cols-1  px-8 py-2 sm:px-12"></div> */}
        <div className="lg:grid lg:grid-cols-5 min-h-screen">
          <main className="flex items-center justify-center px-8 py-3 sm:px-12 lg:col-span-2 lg:px-16 lg:py-3 xl:col-span-2">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="mb-24 mt-8">
                <Image
                  // width={300}
                  alt="NextUI hero Image"
                  className="  h-ful w-ful"
                  src={logo}
                />
              </div>
              <div className="  block lg:">
                <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Login
                </h1>
              </div>

              <form action="#" className="mt-8  gap-6">
                <div className="w-full mb-5">
                  <Input
                    isRequired
                    className="max-w-xs"
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                      >
                        <Sms
                          className="text-2xl text-default-400 pointer-events-none"
                          color="#000"
                          size="24"
                        />
                      </button>
                    }
                    label="Your Email"
                    placeholder="example@mail.com"
                    type="email"
                  />
                </div>
                <div className="col-span-1 mb-5">
                  <Input
                    endContent={
                      <button
                        aria-label="toggle password visibility"
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeSlash
                            className="text-2xl text-default-400 pointer-events-none"
                            color="#000"
                            size="24"
                          />
                        ) : (
                          <Eye
                            className="text-2xl text-default-400 pointer-events-none"
                            color="#000"
                            size="24"
                          />
                        )}
                      </button>
                    }
                    label="Your Password"
                    placeholder="Enter your password"
                    type={isVisible ? "text" : "password"}
                  />
                </div>

                <div className="col-span-1 w-full sm:flex sm:items-center sm:gap-4">
                  <Button
                    className="bg-[#175cff]  text-gray-900"
                    endContent={isLoading ? null : <ArrowRight />}
                    fullWidth={true}
                    isLoading={isLoading}
                    radius="full"
                    size="lg"
                    onClick={() => router.push("/procurement")}
                  >
                    {isLoading ? null : "Log me in"}
                  </Button>
                </div>
              </form>
            </div>
          </main>
          <section className="lg:flex justify-end  items-end lg:col-span-3 lg:h-full xl:col-span-3 hidden w-full p-0 m-0">
            <Image
              // width={300}
              alt="NextUI hero Image"
              className="h-[554px] "
              src={authImage}
            />
          </section>
        </div>
      </div>
    </section>
  );
}
