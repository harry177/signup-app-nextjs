"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FormHeader } from "@/components/FormHeader/FormHeader";
import { FormInput } from "@/components/FormInput/FormInput";
import { FormError } from "@/components/FormError/FormError";
import { CheckmarkBox } from "@/components/CheckmarkBox/CheckmarkBox";
import { CustomStyledInput } from "@/components/CustomStyledInput/CustomStyledInput";
import { formatPhoneLabel } from "@/utils/formatters";
import { defaultValues } from "@/constants/constants";

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
    setValue,
    handleSubmit,
    watch
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const isNoAddress = watch("companyLabel") === "No";

  const handleVisibility = () => {
    setVisibility((prev) => !prev);
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

  useEffect(() => {
    setValue("addressLabel", "");
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNoAddress])

  return (
    <div className="flex flex-col justify-between items-center w-full gap-[157px] mt-[73px] mr-[1px]">
      <form
        className="flex flex-col justify-between w-[350px] sm:w-[442px] md:w-[460px] gap-[40px]"
        onSubmit={handleSubmit(handleForm)}
      >
        <FormHeader />
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
                rules={{ required: true, minLength: 2 }}
                render={({ field: { onChange, value } }) => (
                  <FormInput
                    variant={errors.nameLabel ? "defaultError" : "default"}
                    maxLength={15}
                    placeholder="Your name"
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="nameLabel"
              />
              <FormError errors={errors} label={"nameLabel"} type={"required"} message={"Please enter the name"} />
              <FormError errors={errors} label={"nameLabel"} type={"minLength"} message={"Name is too short"} />
              <CheckmarkBox errors={errors} dirtyFieldsLabel={dirtyFields.nameLabel} label={"nameLabel"} />
            </div>
            <div
              className={`relative flex flex-col ${
                isMobile ? "w-full" : "w-[211px]"
              } md:w-[219px] gap-[6px]`}
            >
              <label className="h-[18px]">Your last name</label>
              <Controller
                control={control}
                rules={{ required: true, minLength: 2 }}
                render={({ field: { onChange, value } }) => (
                  <FormInput
                    variant={errors.surnameLabel ? "defaultError" : "default"}
                    maxLength={15}
                    placeholder="Your last name"
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="surnameLabel"
              />
              <FormError errors={errors} label={"surnameLabel"} type={"required"} message={"Please enter the last name"} />
              <FormError errors={errors} label={"surnameLabel"} type={"minLength"} message={"Last name is too short"} />
              <CheckmarkBox errors={errors} dirtyFieldsLabel={dirtyFields.surnameLabel} label={"surnameLabel"} />
            </div>
          </div>
          <div className="relative flex flex-col justify-between w-full gap-[6px]">
            <label className="h-[18px]">Mobile Number</label>
            <Controller
              control={control}
              rules={{ required: true, pattern: /^.{1}7/ }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  variant={errors.phoneLabel ? "defaultError" : "default"}
                  placeholder="+7(999)99-999-999"
                  onChange={(ev) => {
                    onChange(formatPhoneLabel(ev, getValues));
                  }}
                  value={value}
                />
              )}
              name="phoneLabel"
            />
            <FormError errors={errors} label={"phoneLabel"} type={"required"} message={"Please enter the phone number"} />
            <FormError errors={errors} label={"phoneLabel"} type={"pattern"} message={"Please enter the number in the format +7"} />
            <CheckmarkBox errors={errors} dirtyFieldsLabel={dirtyFields.phoneLabel} label={"phoneLabel"} />
          </div>
          <div
            className={`flex flex-col justify-between w-full h-[54px] gap-[12px] ${
              errors.companyLabel ? "mb-7" : ""
            }`}
          >
            <label className="h-[18px]">Are you a company?</label>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => (
                <div className="flex w-full h-[24px] gap-[42px]">
                  <label className="relative flex gap-[3px] pl-[24px]">
                    <FormInput
                      type="radio"
                      checked={value === "Yes"}
                      variant="radio"
                      className="absolute opacity-0 pointer-events-none"
                      onChange={(ev) => onChange(ev.target.value)}
                      value="Yes"
                    />
                    <CustomStyledInput value={getValues("companyLabel")} option={"Yes"} />
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
                    <CustomStyledInput value={getValues("companyLabel")} option={"No"} />
                  </label>
                </div>
              )}
              name="companyLabel"
            />
            <FormError errors={errors} label={"companyLabel"} type={"required"} message={"Please make selection"} />
          </div>
          {watch("companyLabel") === "Yes" ? 
          <div className="relative flex flex-col justify-between w-full gap-[6px]">
            <label className="h-[18px]">Address</label>
            <Controller
              control={control}
              rules={{ required: true, minLength: 5 }}
              render={({ field: { onChange, value } }) => (
                <FormInput
                  variant={errors.addressLabel ? "defaultError" : "default"}
                  maxLength={30}
                  placeholder="Enter your company address"
                  onChange={onChange}
                  value={value}
                />
              )}
              name="addressLabel"
            />
            <FormError errors={errors} label={"addressLabel"} type={"required"} message={"Please enter the address"} />
            <FormError errors={errors} label={"addressLabel"} type={"minLength"} message={"Address is too short"} />
            <CheckmarkBox errors={errors} dirtyFieldsLabel={dirtyFields.addressLabel} label={"addressLabel"} />
          </div> : null}
          <div className="flex flex-col justify-between w-full gap-[6px]">
            <label className="h-[18px]">Password</label>
            <div className="relative">
              <Controller
                control={control}
                rules={{ required: true, minLength: 5 }}
                render={({ field: { onChange, value } }) => (
                  <FormInput
                    variant={errors.passwordLabel ? "defaultError" : "default"}
                    type={visibility ? "text" : "password"}
                    maxLength={30}
                    placeholder="Create password"
                    onChange={onChange}
                    value={value}
                  />
                )}
                name="passwordLabel"
              />
              <FormError errors={errors} label={"passwordLabel"} type={"required"} message={"Please enter the password"} />
              <FormError errors={errors} label={"passwordLabel"} type={"minLength"} message={"Password is too short"} />
              <div
                className={`absolute top-3 right-5 w-[24px] h-[24px] z-20 bg-no-repeat bg-contain ${
                  visibility
                    ? "bg-[url('/opened-eye.svg')]"
                    : "bg-[url('/closed-eye.svg')]"
                }`}
                onClick={handleVisibility}
              ></div>
              <CheckmarkBox errors={errors} dirtyFieldsLabel={dirtyFields.passwordLabel} label={"passwordLabel"} />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="relative flex items-center w-full h-[24px] pl-[34px]">
              <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange } }) => (
                  <FormInput type="checkbox" variant="checkbox" maxLength={30} placeholder="Create password" onChange={onChange} />
                )}
                name="confirmLabel"
              />
              <div
                className={`flex flex-wrap gap-[6px]   ${
                  getValues("confirmLabel") &&
                  "after:absolute after:content-[''] after:w-[14px] after:h-[10px] after:top-[7px] after:left-[5px] after:bg-[url('/checkmark.svg')] after:bg-no-repeat"
                } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] leading-4 before:rounded-[4px] before:border before:border-[2px] before:border-[#b1b1b1] before:hover:border-[#000000]`}
              >
                <span>I agree with all</span>
                <span className="text-[#62c991] cursor-pointer">
                  Terms and Conditions
                </span>
                <span>and</span>
                <span className="text-[#62c991] cursor-pointer">
                  Privacy Policies.
                </span>
              </div>
            </label>
            <FormError errors={errors} label={"confirmLabel"} type={"required"} message={"Please confirm"} />
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
