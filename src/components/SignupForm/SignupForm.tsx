"use client";

import localFont from "next/font/local";
import { ChangeEvent, useState } from "react";
import { FormInput } from "@/components/FormInput/FormInput";

const myFont = localFont({ src: "../../../public/seravek.ttf" });

export const SignupForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleOptionChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(ev.target.value);
  };

  const handleCheckbox = (ev: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(ev.target.checked);
    console.log("jopa");
  };

  return (
    <form className="flex flex-col justify-between w-[458px] gap-[40px]">
      <div className="flex flex-col justify-between items-center w-full h-fit">
        <h1
          className={`${myFont.className} font-extrabold text-[32px] text-[#000000]`}
        >
          Sign up
        </h1>
        <h2 className="text-[16px] text-[#5b5b5b]">
          Please provide your name and email
        </h2>
      </div>
      <div className="flex flex-col justify-between w-full gap-[20px] text-[14px] text-[#000000]">
        <div className="flex justify-between w-full">
          <div className="flex flex-col w-[219px] gap-[6px]">
            <label className="h-[18px]">Your name</label>
            <FormInput placeholder="Your name" />
          </div>
          <div className="flex flex-col w-[219px] gap-[6px]">
            <label className="h-[18px]">Your last name</label>
            <FormInput placeholder="Your last name" />
          </div>
        </div>
        <div className="flex flex-col justify-between w-full gap-[6px]">
          <label className="h-[18px]">Mobile Number</label>
          <FormInput placeholder="+7(999)99-999-999" />
        </div>
        <div className="flex flex-col justify-between w-full h-[54px] gap-[12px]">
          <label className="h-[18px]">Are you a company?</label>
          <div className="flex w-full h-[24px] gap-[40px]">
            <label className="relative flex gap-[3px] pl-[32px]">
              <FormInput
                type="radio"
                value="Yes"
                variant="radio"
                className="absolute opacity-0 pointer-events-none"
                checked={selectedOption === "Yes"}
                onChange={handleOptionChange}
              />
              <span
                className={`${
                  selectedOption === "Yes" &&
                  "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]"
                } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]`}
              >
                Yes
              </span>
            </label>
            <label className="relative flex gap-[3px] pl-[32px]">
              <FormInput
                type="radio"
                value="No"
                variant="radio"
                className="absolute opacity-0 pointer-events-none"
                checked={selectedOption === "No"}
                onChange={handleOptionChange}
              />
              <span
                className={`${
                  selectedOption === "No" &&
                  "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]"
                } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]`}
              >
                No
              </span>
            </label>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full gap-[6px]">
          <label className="h-[18px]">Address</label>
          <FormInput placeholder="Enter your address company" />
        </div>
        <div className="flex flex-col justify-between w-full gap-[6px]">
          <label className="h-[18px]">Password</label>
          <div className="relative">
            <FormInput placeholder="Create password" />
            <div className="absolute top-3 right-3 w-[24px] h-[24px] bg-[url('/closed-eye.svg')] bg-no-repeat bg-contain"></div>
          </div>
        </div>
        <div className="relative flex w-full h-[24px] gap-[5px]">
          <FormInput
            type="checkbox"
            variant="checkbox"
            onChange={handleCheckbox}
          />
          <span
            className={`${
              isChecked &&
              "after:absolute after:content-[''] after:top-[7px] after:left-[5px] after:w-[14px] after:h-[10px] after:bg-[url('/checkmark.svg')] after:bg-no-repeat"
            } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:rounded-[4px] before:border before:border-[2px] before:border-[#b1b1b1] before:hover:border-[#000000] ml-[32px]`}
          >
            I agree with all
          </span>
          <span className="text-[#62c991] cursor-pointer">
            Terms and Conditions
          </span>
          <span>and</span>
          <span className="text-[#62c991] cursor-pointer">
            Privacy Policies.
          </span>
        </div>
      </div>
      <button
        type="submit"
        className="w-full h-[56px] bg-[#62c991] hover:bg-[#39bf76] rounded-[8px] text-[16px] text-[#ffffff]"
      >
        Next
      </button>
    </form>
  );
};
