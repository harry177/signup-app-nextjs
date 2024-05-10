import { Controller } from "react-hook-form";
import { FormInput } from "@/components/FormInput/FormInput";
import { FormError } from "@/components/FormError/FormError";
import { CommonInputProps } from "@/types/types";

export const ConfirmInputBox = ({
  control,
  errors,
  getValues,
}: CommonInputProps) => {
  return (
    <div className="flex flex-col">
      <label className="relative flex items-center w-full h-[6.153vw] xs:h-[24px] pl-[8.718vw] xs:pl-[34px]">
        <Controller
          control={control}
          rules={{ required: true }}
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
          className={`flex flex-wrap gap-[1.538vw] xs:gap-[6px]   ${
            getValues("confirmLabel") &&
            "after:absolute after:content-[''] after:w-[3.590vw] xs:after:w-[14px] after:h-[2.564vw] xs:after:h-[10px] after:top-[1.795vw] xs:after:top-[7px] after:left-[1.282vw] xs:after:left-[5px] after:bg-[url('/checkmark.svg')] after:bg-no-repeat"
          } before:absolute before:content-[''] before:top-0 before:left-0 before:w-[6.153vw] xs:before:w-[24px] before:h-[6.153vw] xs:before:h-[24px] leading-[4.102vw] xs:leading-4 before:rounded-[1.025vw] xs:before:rounded-[4px] before:border before:border-[0.512vw] xs:before:border-[2px] before:border-[#b1b1b1] before:hover:border-[#000000]`}
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
      <FormError
        errors={errors}
        label={"confirmLabel"}
        type={"required"}
        message={"Please confirm"}
      />
    </div>
  );
};
