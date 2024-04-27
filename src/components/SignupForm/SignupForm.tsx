"use client";

import localFont from "next/font/local";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FormInput } from "@/components/FormInput/FormInput";

const myFont = localFont({ src: "../../../public/seravek.ttf" });

export const SignupForm = () => {
  const [visibility, setVisibility] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 459.9px)");

  const {
    formState: { errors, isValid, dirtyFields },
    getValues,
    control,
    trigger,
    handleSubmit,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      nameLabel: "",
      surnameLabel: "",
      phoneLabel: "",
      companyLabel: "",
      addressLabel: "",
      passwordLabel: "",
      confirmLabel: false,
    },
  });

  const phoneConstructor = (ev: ChangeEvent<HTMLInputElement>) => {
    const inputValue = ev.target.value;
    const cleanedValue = inputValue.replace(/\D/g, "");
    const template = "+_(___)__-___-___";
    let formattedValue = "";

    if (inputValue.length < getValues("phoneLabel").length) {
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
    return formattedValue;
  };

  const handleVisibility = () => {
    setVisibility(!visibility);
  };

  const handleForm: SubmitHandler<FieldValues> = (data) => {
    router.push("/success");
    console.log(JSON.stringify(data));
  };

  const handleButtonclick = () => {
    if (!isValid) {
      trigger();
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    isValid && setIsDisabled(false);
  }, [isValid]);

  return (
    <div className="flex flex-col justify-between items-center w-full gap-[157px] mt-[73px] mr-[1px]">
      <form
        className="flex flex-col justify-between w-[350px] sm:w-[442px] md:w-[460px] gap-[40px]"
        onSubmit={handleSubmit(handleForm)}
      >
        <div className="flex flex-col justify-between items-center w-full h-fit">
          <h1
            className={`${myFont.className} font-extrabold text-[32px] text-[#000000]`}
          >
            Sign up
          </h1>
          <h2 className="h-[25px] text-[16px] text-[#5b5b5b] mr-1">
            Please provide your name and email
          </h2>
        </div>
        <div className="flex flex-col justify-between w-full gap-[20px] text-[14px] text-[#000000]">
          <div
            className={`flex justify-between w-full ${
              isMobile ? "flex-col gap-[20px]" : "flex-row"
            }`}
          >
            <div
              className={`relative flex flex-col ${
                isMobile ? "w-full" : "w-[211px]"
              } md:w-[219px] gap-[6px]`}
            >
              <label className="h-[18px]">Your name</label>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormInput
                    maxLength={15}
                    placeholder="Your name"
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="nameLabel"
              />
              {errors.nameLabel?.type === "required" && (
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
                className={`absolute top-9 right-4 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                  !errors.nameLabel && dirtyFields.nameLabel
                    ? "bg-[url('/tick-circle.svg')]"
                    : ""
                }`}
              ></div>
            </div>
            <div
              className={`relative flex flex-col ${
                isMobile ? "w-full" : "w-[211px]"
              } md:w-[219px] gap-[6px]`}
            >
              <label className="h-[18px]">Your last name</label>
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormInput
                    maxLength={15}
                    placeholder="Your last name"
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="surnameLabel"
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
                className={`absolute top-9 right-4 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                  !errors.surnameLabel && dirtyFields.surnameLabel
                    ? "bg-[url('/tick-circle.svg')]"
                    : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="relative flex flex-col justify-between w-full gap-[6px]">
            <label className="h-[18px]">Mobile Number</label>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^.{1}7/,
              }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  placeholder="+7(999)99-999-999"
                  onChange={(ev) => {
                    onChange(phoneConstructor(ev));
                  }}
                  value={value}
                />
              )}
              name="phoneLabel"
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
              className={`absolute top-9 right-4 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                !errors.phoneLabel && dirtyFields.phoneLabel
                  ? "bg-[url('/tick-circle.svg')]"
                  : ""
              }`}
            ></div>
          </div>
          <div className="flex flex-col justify-between w-full h-[54px] gap-[12px]">
            <label className="h-[18px]">Are you a company?</label>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, value } }) => (
                <div className="flex w-full h-[24px] gap-[40px]">
                  <label className="relative flex gap-[3px] pl-[24px]">
                    <FormInput
                      type="radio"
                      checked={value === "Yes"}
                      variant="radio"
                      className="absolute opacity-0 pointer-events-none"
                      onChange={(ev) => onChange(ev.target.value)}
                      value="Yes"
                    />
                    <span
                      className={`w-[30px] text-end ${
                        getValues("companyLabel") === "Yes" &&
                        "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]"
                      }  before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]`}
                    >
                      Yes
                    </span>
                  </label>
                  <label className="relative flex gap-[3px] pl-[24px]">
                    <FormInput
                      type="radio"
                      checked={value === "No"}
                      variant="radio"
                      className="absolute opacity-0 pointer-events-none"
                      onChange={(ev) => onChange(ev.target.value)}
                      value="No"
                    />
                    <span
                      className={`w-[30px] text-end ${
                        getValues("companyLabel") === "No" &&
                        "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]"
                      } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]`}
                    >
                      No
                    </span>
                  </label>
                </div>
              )}
              name="companyLabel"
            />
            {errors?.companyLabel?.type === "required" && (
              <span className="text-[12px] text-[#cf4545] mt-[-5px]">
                Please make selection
              </span>
            )}
          </div>
          <div className="relative flex flex-col justify-between w-full gap-[6px]">
            <label className="h-[18px]">Address</label>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 5,
              }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  maxLength={30}
                  placeholder="Enter your company address"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="addressLabel"
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
              className={`absolute top-9 right-4 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                !errors.addressLabel && dirtyFields.addressLabel
                  ? "bg-[url('/tick-circle.svg')]"
                  : ""
              }`}
            ></div>
          </div>
          <div className="flex flex-col justify-between w-full gap-[6px]">
            <label className="h-[18px]">Password</label>
            <div className="relative">
              <Controller
                control={control}
                rules={{
                  required: true,
                  minLength: 5,
                }}
                render={({ field: { onChange, value } }) => (
                  <FormInput
                    type={visibility ? "text" : "password"}
                    maxLength={30}
                    placeholder="Create password"
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="passwordLabel"
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
                className={`absolute top-3 right-5 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                  visibility
                    ? "bg-[url('/opened-eye.svg')]"
                    : "bg-[url('/closed-eye.svg')]"
                }`}
                onClick={handleVisibility}
              ></div>
              <div
                className={`absolute top-3 right-14 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                  !errors.passwordLabel && dirtyFields.passwordLabel
                    ? "bg-[url('/tick-circle.svg')]"
                    : ""
                }`}
              ></div>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="relative flex w-full h-[24px] pl-[32px]">
              <Controller
                control={control}
                rules={{
                  required: true,
                }}
                render={({ field: { onChange } }) => (
                  <FormInput
                    type="checkbox"
                    variant="checkbox"
                    maxLength={30}
                    placeholder="Create password"
                    onChange={onChange}
                  />
                )}
                name="confirmLabel"
              />
              <div
                className={`${
                  getValues("confirmLabel") &&
                  "after:absolute after:content-[''] after:top-[7px] after:left-[5px] after:w-[14px] after:h-[10px] after:bg-[url('/checkmark.svg')] after:bg-no-repeat"
                } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:rounded-[4px] before:border before:border-[2px] before:border-[#b1b1b1] before:hover:border-[#000000]`}
              >
                {isMobile ? (
                  <div>
                    <div>
                      <span className="mr-[5px]">I agree with all</span>
                      <span className="text-[#62c991] cursor-pointer mr-[5px]">
                        Terms and Conditions
                      </span>
                      <span className="mr-[5px]">and</span>
                    </div>
                    <div>
                      <span className="text-[#62c991] cursor-pointer">
                        Privacy Policies.
                      </span>
                    </div>
                  </div>
                ) : (
                  <>
                    <span className="mr-[5px]">I agree with all</span>
                    <span className="text-[#62c991] cursor-pointer mr-[5px]">
                      Terms and Conditions
                    </span>
                    <span className="mr-[5px]">and</span>
                    <span className="text-[#62c991] cursor-pointer">
                      Privacy Policies.
                    </span>
                  </>
                )}
              </div>
            </label>
            {errors?.confirmLabel?.type === "required" && (
              <span className="text-[12px] text-[#cf4545] mt-[15px]">
                Please confirm
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className={`w-full h-[56px] ${
            isDisabled
              ? "bg-[#b7b8b7] hover:bg-[#b7b8b7]"
              : "bg-[#62c991] hover:bg-[#39bf76]"
          }  rounded-[8px] text-[16px] text-[#ffffff]`}
          onClick={handleButtonclick}
        >
          Next
        </button>
      </form>
      <div className="flex w-full text-[16px] text-[#5b5b5b] p-[36px]">
        <span>Help@worktime.go</span>
      </div>
    </div>
  );
};
