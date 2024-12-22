import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'iconsax-react'
import { useRouter } from "next/navigation";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  User,
} from "@nextui-org/react";
import profileImage from "../../../public/images/profileimage.jpeg";


function PageHeader() {
  const router = useRouter();

  return (
    <div className='flex justify-between items-center w-full'>
      <div className="flex items-center justify-between px-4 py-4 bg-white shadow-sm w-full">
        <div className="flex items-center space-x-2">
          <button className="flex items-center text-gray-500 hover:text-gray-700" onClick={() => router.back()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="ml-1 text-sm font-medium">Back</span>
          </button>
        </div>

        <div className="flex items-center justify-end flex-1 mx-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full px-4 pl-10 py-2 text-sm text-gray-500 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 left-3 flex items-center text-gray-400 pe-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M14.5767 3.3125C14.5767 2.71803 14.0947 2.23611 13.5003 2.23611C12.9058 2.23611 12.4239 2.71803 12.4239 3.3125V3.92698C8.77264 4.44909 5.96555 7.58817 5.96555 11.3842L5.96555 15.6902C5.96555 15.6902 5.96556 15.6901 5.96555 15.6902C5.96544 15.6923 5.96471 15.7067 5.96004 15.735C5.95444 15.7689 5.94449 15.815 5.92807 15.8743C5.89478 15.9945 5.8418 16.1442 5.76778 16.3212C5.61939 16.676 5.41018 17.0845 5.1788 17.4967C4.74379 18.2716 4.52451 19.1951 4.68913 20.0732C4.86273 20.9993 5.45883 21.8069 6.4769 22.1945C7.38635 22.5408 8.59692 22.8575 10.1956 23.046C10.2336 23.0789 10.2786 23.1167 10.3303 23.158C10.4921 23.2874 10.7232 23.4552 11.0153 23.6221C11.595 23.9533 12.4521 24.3021 13.5003 24.3021C14.5484 24.3021 15.4056 23.9533 15.9853 23.6221C16.2774 23.4552 16.5085 23.2874 16.6702 23.158C16.7219 23.1167 16.7669 23.0789 16.8049 23.046C18.4036 22.8575 19.6142 22.5408 20.5236 22.1945C21.5417 21.8069 22.1378 20.9993 22.3114 20.0732C22.476 19.1951 22.2568 18.2716 21.8217 17.4967C21.5904 17.0845 21.3811 16.676 21.2328 16.3212C21.1587 16.1442 21.1058 15.9945 21.0725 15.8743C21.056 15.815 21.0461 15.7689 21.0405 15.735C21.0358 15.7067 21.0351 15.6925 21.035 15.6905C21.035 15.6903 21.035 15.6905 21.035 15.6905L21.035 15.6814V11.3848C21.035 7.58878 18.228 4.44918 14.5767 3.92699V3.3125ZM8.11832 11.3842C8.11832 8.41213 10.5276 6.00348 13.5003 6.00348C16.4728 6.00348 18.8822 8.41253 18.8822 11.3848V15.691C18.8822 16.1893 19.0689 16.7267 19.2467 17.1518C19.4398 17.6135 19.6928 18.1021 19.9445 18.5505C20.1893 18.9865 20.2476 19.3985 20.1955 19.6766C20.1523 19.9067 20.0373 20.0762 19.7576 20.1827C18.6006 20.6232 16.6476 21.0729 13.5003 21.0729C10.353 21.0729 8.39991 20.6232 7.24295 20.1827C6.96324 20.0762 6.8482 19.9067 6.80505 19.6766C6.75292 19.3985 6.81128 18.9865 7.05603 18.5505C7.30773 18.1021 7.56079 17.6135 7.75388 17.1518C7.93162 16.7267 8.11832 16.1893 8.11832 15.691V11.3842Z" fill="#667185" />
            </svg>

          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.04164 19.2292C8.44717 19.2292 7.96525 18.7473 7.96525 18.1528C7.96525 17.5583 8.44717 17.0764 9.04164 17.0764C9.63611 17.0764 10.118 17.5583 10.118 18.1528C10.118 18.7473 9.63611 19.2292 9.04164 19.2292Z" fill="#667185" />
              <path d="M12.2708 18.1528C12.2708 18.7473 12.7527 19.2292 13.3472 19.2292C13.9417 19.2292 14.4236 18.7473 14.4236 18.1528C14.4236 17.5583 13.9417 17.0764 13.3472 17.0764C12.7527 17.0764 12.2708 17.5583 12.2708 18.1528Z" fill="#667185" />
              <path d="M17.6528 19.2292C17.0583 19.2292 16.5764 18.7473 16.5764 18.1528C16.5764 17.5583 17.0583 17.0764 17.6528 17.0764C18.2472 17.0764 18.7291 17.5583 18.7291 18.1528C18.7291 18.7473 18.2472 19.2292 17.6528 19.2292Z" fill="#667185" />
              <path fillRule="evenodd" clipRule="evenodd" d="M24.6256 17.5586L21.9544 17.8925C21.957 17.979 21.9583 18.0657 21.9583 18.1528C21.9583 22.9086 18.103 26.7639 13.3472 26.7639C12.6358 26.7639 11.9431 26.6774 11.2797 26.5138L6.65245 25.9354C5.51438 25.7932 4.72346 24.7323 4.91202 23.601L5.19585 21.898L4.98614 20.2202C4.82259 19.5569 4.73608 18.8642 4.73608 18.1528C4.73608 13.397 8.59141 9.54167 13.3472 9.54167C13.4695 9.54167 13.5912 9.54422 13.7123 9.54927C14.5968 7.03739 16.9896 5.23611 19.8055 5.23611C23.3724 5.23611 26.2639 8.12761 26.2639 11.6944C26.2639 12.2213 26.2006 12.7347 26.0807 13.2271L25.9386 14.3632L26.134 15.5355C26.2974 16.5159 25.612 17.4354 24.6256 17.5586ZM19.8055 7.38889C22.1834 7.38889 24.1111 9.31656 24.1111 11.6944C24.1111 12.0648 24.0646 12.4227 23.9776 12.7633L23.9609 12.8289L23.7952 14.1546C23.7742 14.3224 23.7777 14.4923 23.8055 14.6591L23.9414 15.4746L21.6228 15.7645C20.8199 12.9775 18.6474 10.7709 15.8809 9.92047C16.557 8.42715 18.061 7.38889 19.8055 7.38889ZM13.3472 11.6944C9.78036 11.6944 6.88886 14.5859 6.88886 18.1528C6.88886 18.7074 6.95854 19.2443 7.08906 19.7557L7.10579 19.8212L7.33444 21.6504C7.35864 21.844 7.35464 22.0401 7.32257 22.2325L7.05854 23.8167L11.6788 24.3942L11.7443 24.4109C12.2557 24.5414 12.7925 24.6111 13.3472 24.6111C16.914 24.6111 19.8055 21.7196 19.8055 18.1528C19.8055 14.5859 16.914 11.6944 13.3472 11.6944Z" fill="#667185" />
            </svg>


          </button>

          <div className="flex items-center space-x-2">
            <Image
              alt="NextUI hero Image"
              className="w-8 h-8 rounded-full object-cover"
              src={profileImage}
            />
            <Dropdown placement="bottom-start">
                
                  <DropdownTrigger>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </DropdownTrigger>
              <DropdownMenu aria-label="User Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-bold">Signed in as</p>
                  <p className="font-bold">@markbenson</p>
                </DropdownItem>
                <DropdownItem key="settings">My Profile</DropdownItem>
                <DropdownItem key="team_settings">My Settings</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  <Link href="/login">
                  Log Out

                  </Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PageHeader