"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useMediaQuery from "@/hooks/useMediaQuery";
import { FormHeader } from "@/components/FormHeader/FormHeader";
import { TextInputBlock } from "@/components/TextInputBlock/TextInputBlock";
import { CompanyInputs } from "@/components/CompanyInputs/CompanyInputs";
import { ConfirmInputBox } from "@/components/ConfirmInputBox/ConfirmInputBox";
import { FormButton } from "@/components/FormButton/FormButton";
import { defaultValues } from "@/constants/constants";

export const SignupForm = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const router = useRouter();
  const isMobile = useMediaQuery("(max-width: 509.9px)");

  const {
    formState: { errors, isValid, dirtyFields },
    getValues,
    control,
    trigger,
    setValue,
    handleSubmit,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues,
  });

  const isNoAddress = watch("companyLabel") === "No";

  const handleForm: SubmitHandler<FieldValues> = (data) => {
    router.push("/success");
    console.log(JSON.stringify(data));
  };

  useEffect(() => {
    if (!isValid && isClicked) {
      trigger();
      setIsDisabled(true);
      setIsClicked(false);
    }
  }, [isClicked]);

  useEffect(() => {
    isValid && setIsDisabled(false);
  }, [isValid]);

  useEffect(() => {
    setValue("addressLabel", "");
  }, [isNoAddress]);

  return (
    <div className="flex flex-col justify-between items-center w-full gap-[1.025vw] xs:gap-[4px] sm:gap-[140px] md:gap-[85px] px-[5.128vw] xs:px-[20px] sm:px-0 mt-[5.128vw] xs:mt-[20px] sm:mt-[131px] md:mt-[77px] mr-[1px]">
      <form
        className="flex flex-col justify-between w-[89.743vw] xs:w-[350px] sm:w-[442px] md:w-[460px] gap-[10.256vw] xs:gap-[40px]"
        onSubmit={handleSubmit(handleForm)}
      >
        <FormHeader />
        <div className="flex flex-col justify-between w-full gap-[5.128vw] xs:gap-[20px] text-[3.590vw] xs:text-[14px] text-[#000000]">
          <div
            className={`flex justify-between w-full ${
              isMobile ? "flex-col gap-[5.128vw] xs:gap-[20px]" : "flex-row"
            }`}
          >
            <TextInputBlock
              control={control}
              rules={{ required: true, minLength: 2 }}
              labelName="nameLabel"
              errors={errors}
              messages={["Please enter the name", "Name is too short"]}
              dirtyFieldsLabel={dirtyFields.nameLabel}
              maxLength={15}
              placeholder="Your name"
              isMobile={isMobile}
              labelDescription="Your name"
              isInputShort
            />
            <TextInputBlock
              control={control}
              rules={{ required: true, minLength: 2 }}
              labelName="surnameLabel"
              errors={errors}
              messages={[
                "Please enter the last name",
                "Last name is too short",
              ]}
              dirtyFieldsLabel={dirtyFields.surnameLabel}
              maxLength={15}
              placeholder="Your last name"
              isMobile={isMobile}
              labelDescription="Your last name"
              isInputShort
            />
          </div>
          <TextInputBlock
            control={control}
            rules={{ required: true, pattern: /^.{1}7/ }}
            getValues={getValues}
            labelName="phoneLabel"
            errors={errors}
            messages={[
              "Please enter the phone number",
              "Please enter the number in the format +7",
            ]}
            dirtyFieldsLabel={dirtyFields.phoneLabel}
            placeholder="+7(999)999-99-99"
            isMobile={isMobile}
            labelDescription="Mobile Number"
          />
          <CompanyInputs
            errors={errors}
            control={control}
            getValues={getValues}
          />
          {watch("companyLabel") === "Yes" ? (
            <TextInputBlock
              control={control}
              rules={{ required: true, minLength: 5 }}
              labelName="addressLabel"
              errors={errors}
              messages={["Please enter the address", "Address is too short"]}
              dirtyFieldsLabel={dirtyFields.addressLabel}
              maxLength={30}
              placeholder="Enter your company address"
              isMobile={isMobile}
              labelDescription="Address"
            />
          ) : null}
          <TextInputBlock
            control={control}
            rules={{ required: true, minLength: 5 }}
            labelName="passwordLabel"
            errors={errors}
            messages={["Please enter the password", "Password is too short"]}
            dirtyFieldsLabel={dirtyFields.passwordLabel}
            maxLength={30}
            placeholder="Create password"
            isMobile={isMobile}
            labelDescription="Password"
          />
          <ConfirmInputBox
            control={control}
            errors={errors}
            getValues={getValues}
          />
        </div>
        <FormButton
          isDisabled={isDisabled}
          dispatchClick={(click) => setIsClicked(click)}
        />
      </form>
      <div className="flex w-[89.743vw] xs:w-[350px] sm:w-full text-[4.102vw] xs:text-[16px] text-[#5b5b5b] px-0 sm:px-[36px] py-[10.256vw] xs:py-[40px] sm:py-[36px]">
        <span>Help@worktime.go</span>
      </div>
    </div>
  );
};
