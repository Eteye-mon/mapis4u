"use client"
import React, { useState } from 'react';
import { Button } from '@nextui-org/react';
import { ArrowRight, FolderAdd } from 'iconsax-react';

const RightSheet = ({ header, subtext, content, btnText, type }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSheet = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {type == "worker" ? (
        <Button
          onClick={toggleSheet}
          size="md"
          radius="full"
          variant="solid"
          className="bg-[#DFBC1A] text-gray-900 font-semibold"
          endContent={<ArrowRight color="#000" variant="Outline" size={16} />}
        >
          {btnText}
        </Button>

      ) : (
        <div className="card  bg-[#4f4827] opacity-100 cursor-pointer w-full md:w-[276px] rounded-[20px]" onClick={toggleSheet}>
          <div className="flex flex-col items-center justify-center h-[154px] ">
            <FolderAdd size="32" color="#da9d00" variant="Bulk" />
            <h2 className='text-[#DA9D00]'> {btnText}</h2>
          </div>
        </div>

      )}
      <div
        className={`fixed top-0 right-0 z-50 md:w-[484px] h-[760px] overflow-auto scrollable-y bg-[#292927] shadow-xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="p-4 flex items-center justify-between">
          <div className="heading">
            <h2 className="font-bold text-[24px] text-white">{header}</h2>
            <span className="font-medium text-[14px] text-white opacity-75">{subtext}</span>

          </div>
          <button onClick={toggleSheet}

          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#FAFAF9" />
              <path d="M20 10C14.49 10 10 14.49 10 20C10 25.51 14.49 30 20 30C25.51 30 30 25.51 30 20C30 14.49 25.51 10 20 10ZM23.36 22.3C23.65 22.59 23.65 23.07 23.36 23.36C23.21 23.51 23.02 23.58 22.83 23.58C22.64 23.58 22.45 23.51 22.3 23.36L20 21.06L17.7 23.36C17.55 23.51 17.36 23.58 17.17 23.58C16.98 23.58 16.79 23.51 16.64 23.36C16.35 23.07 16.35 22.59 16.64 22.3L18.94 20L16.64 17.7C16.35 17.41 16.35 16.93 16.64 16.64C16.93 16.35 17.41 16.35 17.7 16.64L20 18.94L22.3 16.64C22.59 16.35 23.07 16.35 23.36 16.64C23.65 16.93 23.65 17.41 23.36 17.7L21.06 20L23.36 22.3Z" fill="#2A2D32" />
            </svg>

          </button>
        </div>
        <div className="p-4 text-white">
          <>
          {content}
          </>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-25 z-10"
          onClick={toggleSheet}
        ></div>
      )}
    </div>
  );
};

export default RightSheet;
