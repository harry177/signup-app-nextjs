"use client";

import localFont from "next/font/local";
import { useRouter } from 'next/navigation';
import { ChangeEvent, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormInput } from "@/components/FormInput/FormInput";

interface SignupFormProps {
  name: string;
  surname: string;
  phone: string;
  company: string;
  address: string;
  password: string;
  isConfirmed: boolean;
}

const myFont = localFont({ src: "../../../public/seravek.ttf" });

export const SignupForm = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const [formState, setFormState] = useState<SignupFormProps>({
    name: "",
    surname: "",
    phone: "",
    company: "",
    address: "",
    password: "",
    isConfirmed: false,
  });

  const router = useRouter();

  const handleNameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      name: ev.target.value,
    }));
    clearErrors("nameLabel");
  };

  const handleSurnameChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      surname: ev.target.value,
    }));
    clearErrors("surnameLabel");
  };

  const handlePhoneChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value;
    const cleanedValue = inputValue.replace(/\D/g, "");
    const template = "+_(___)__-___-___";
    let formattedValue = "";

    if (inputValue.length < formState.phone.length) {
      formattedValue = inputValue;
    } else {
      let digitIndex = 0;
      for (let i = 0; i < template.length; i++) {
        if (template[i] === "_") {
          if (digitIndex < cleanedValue.length) {
            formattedValue += cleanedValue[digitIndex];
            digitIndex++;
          } else {
            break;
          }
        } else {
          formattedValue += template[i];
        }
      }
    }

    setFormState((prevState) => ({
      ...prevState,
      phone: formattedValue,
    }));

    clearErrors("phoneLabel");
  };
  const handleOptionChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(ev.target.value);

    setFormState((prevState) => ({
      ...prevState,
      company: ev.target.value,
    }));
    clearErrors("radioLabel");
  };

  const handleAddressChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      address: ev.target.value,
    }));
    clearErrors("addressLabel");
  };

  const handlePasswordChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setFormState((prevState) => ({
      ...prevState,
      password: ev.target.value,
    }));
    clearErrors("passwordLabel");
  };

  const handleCheckbox = (ev: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(ev.target.checked);

    setFormState((prevState) => ({
      ...prevState,
      isConfirmed: ev.target.checked,
    }));
    clearErrors("confirmLabel");
  };

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleForm: SubmitHandler<FieldValues> = () => {
    router.push('/success');
    console.log(formState);
  };

  const {
    register,
    formState: { errors },
    clearErrors,
    handleSubmit,
  } = useForm();

  return (
    <form
      className="flex flex-col justify-between w-[458px] gap-[40px]"
      onSubmit={handleSubmit(handleForm)}
    >
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
          <div className="relative flex flex-col w-[219px] gap-[6px]">
            <label className="h-[18px]">Your name</label>
            <FormInput
              maxLength={15}
              placeholder="Your name"
              {...register("nameLabel", {
                required: true,
                minLength: 2,
              })}
              onChange={handleNameChange}
            />
            {errors?.nameLabel?.type === "required" && (
              <span className="text-[12px] text-[#cf4545]">
                Please enter the name
              </span>
            )}
            {errors?.nameLabel?.type === "minLength" && (
              <span className="text-[12px] text-[#cf4545]">
                Name is too short
              </span>
            )}
            <div
              className={`absolute top-3 right-3 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                formState.name.length >= 2
                  ? "bg-[url('/tick-circle.svg')]"
                  : ""
              }`}
            ></div>
          </div>
          <div className="relative flex flex-col w-[219px] gap-[6px]">
            <label className="h-[18px]">Your last name</label>
            <FormInput
              maxLength={15}
              placeholder="Your last name"
              {...register("surnameLabel", {
                required: true,
                minLength: 2,
              })}
              onChange={handleSurnameChange}
            />
            {errors?.surnameLabel?.type === "required" && (
              <span className="text-[12px] text-[#cf4545]">
                Please enter the last name
              </span>
            )}
            {errors?.surnameLabel?.type === "minLength" && (
              <span className="text-[12px] text-[#cf4545]">
                Last name is too short
              </span>
            )}
            <div
              className={`absolute top-3 right-3 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                formState.surname.length >= 2
                  ? "bg-[url('/tick-circle.svg')]"
                  : ""
              }`}
            ></div>
          </div>
        </div>
        <div className="relative flex flex-col justify-between w-full gap-[6px]">
          <label className="h-[18px]">Mobile Number</label>
          <FormInput
            value={formState.phone}
            placeholder="+7(999)99-999-999"
            {...register("phoneLabel", {
              required: true,
              minLength: 5,
              pattern: /^.{1}7/,
            })}
            onChange={handlePhoneChange}
          />
          {errors?.phoneLabel?.type === "required" && (
            <span className="text-[12px] text-[#cf4545]">
              Please enter the phone number
            </span>
          )}
          {errors?.phoneLabel?.type === "pattern" && (
            <span className="text-[12px] text-[#cf4545]">
              Please enter the number in the format +7
            </span>
          )}
          <div
            className={`absolute top-3 right-3 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
              formState.phone[1] === "7" ? "bg-[url('/tick-circle.svg')]" : ""
            }`}
          ></div>
        </div>
        <div className="flex flex-col justify-between w-full h-[54px] gap-[12px]">
          <label className="h-[18px]">Are you a company?</label>
          <div className="flex w-full h-[24px] gap-[40px]">
            <label className="relative flex gap-[3px] pl-[24px]">
              <FormInput
                type="radio"
                value="Yes"
                variant="radio"
                className="absolute opacity-0 pointer-events-none"
                checked={selectedOption === "Yes"}
                {...register("radioLabel", {
                  required: true,
                })}
                onChange={handleOptionChange}
              />
              <span
                className={`w-[30px] text-end ${
                  selectedOption === "Yes" &&
                  "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]"
                }  before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]`}
              >
                Yes
              </span>
            </label>
            <label className="relative flex gap-[3px] pl-[24px]">
              <FormInput
                type="radio"
                value="No"
                variant="radio"
                className="absolute opacity-0 pointer-events-none"
                checked={selectedOption === "No"}
                {...register("radioLabel", {
                  required: true,
                })}
                onChange={handleOptionChange}
              />
              <span
                className={`w-[30px] text-end ${
                  selectedOption === "No" &&
                  "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]"
                } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]`}
              >
                No
              </span>
            </label>
          </div>
          {errors?.radioLabel?.type === "required" && (
            <span className="text-[12px] text-[#cf4545]">
              Please make selection
            </span>
          )}
        </div>
        <div className="relative flex flex-col justify-between w-full gap-[6px]">
          <label className="h-[18px]">Address</label>
          <FormInput
            maxLength={30}
            placeholder="Enter your address company"
            {...register("addressLabel", {
              required: true,
              minLength: 5,
            })}
            onChange={handleAddressChange}
          />
          {errors?.addressLabel?.type === "required" && (
            <span className="text-[12px] text-[#cf4545]">
              Please enter the address
            </span>
          )}
          {errors?.addressLabel?.type === "minLength" && (
            <span className="text-[12px] text-[#cf4545]">
              Address is too short
            </span>
          )}
          <div
            className={`absolute top-3 right-3 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
              formState.address.length >= 5
                ? "bg-[url('/tick-circle.svg')]"
                : ""
            }`}
          ></div>
        </div>
        <div className="flex flex-col justify-between w-full gap-[6px]">
          <label className="h-[18px]">Password</label>
          <div className="relative">
            <FormInput
              type={visibility ? "text" : "password"}
              maxLength={30}
              placeholder="Create password"
              {...register("passwordLabel", {
                required: true,
                minLength: 5,
              })}
              onChange={handlePasswordChange}
            />
            {errors?.passwordLabel?.type === "required" && (
              <span className="text-[12px] text-[#cf4545]">
                Please enter the password
              </span>
            )}
            {errors?.passwordLabel?.type === "minLength" && (
              <span className="text-[12px] text-[#cf4545]">
                Password is too short
              </span>
            )}
            <div
              className={`absolute top-3 right-3 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                visibility
                  ? "bg-[url('/opened-eye.svg')]"
                  : "bg-[url('/closed-eye.svg')]"
              }`}
              onClick={handleVisibility}
            ></div>
          </div>
        </div>
        <div className="flex flex-col">
          <label className="relative flex w-full h-[24px] pl-[32px]">
            <FormInput
              type="checkbox"
              variant="checkbox"
              {...register("confirmLabel", {
                required: true,
              })}
              onChange={handleCheckbox}
            />
            <div
              className={`${
                isChecked &&
                "after:absolute after:content-[''] after:top-[7px] after:left-[5px] after:w-[14px] after:h-[10px] after:bg-[url('/checkmark.svg')] after:bg-no-repeat"
              } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:rounded-[4px] before:border before:border-[2px] before:border-[#b1b1b1] before:hover:border-[#000000]`}
            >
              <span className="mr-[5px]">I agree with all</span>
              <span className="text-[#62c991] cursor-pointer mr-[5px]">
                Terms and Conditions
              </span>
              <span className="mr-[5px]">and</span>
              <span className="text-[#62c991] cursor-pointer">
                Privacy Policies.
              </span>
            </div>
          </label>
          {errors?.confirmLabel?.type === "required" && (
            <span className="text-[12px] text-[#cf4545]">Please confirm</span>
          )}
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
