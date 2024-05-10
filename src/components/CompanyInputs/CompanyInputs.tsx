import { Controller } from "react-hook-form";
import { FormInput } from "@/components/FormInput/FormInput";
import { FormError } from "@/components/FormError/FormError";
import { CustomStyledInput } from "@/components/CustomStyledInput/CustomStyledInput";
import { CommonInputProps } from "@/types/types";

export const CompanyInputs = ({
  control,
  errors,
  getValues,
}: CommonInputProps) => {
  return (
    <div
      className={`flex flex-col justify-between w-full h-[13.846vw] xs:h-[54px] gap-[3.077vw] xs:gap-[12px] ${
        errors.companyLabel ? "mb-[7.179vw] xs:mb-7" : ""
      }`}
    >
      <label className="h-[4.615vw] xs:h-[18px]">Are you a company?</label>
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <div className="flex w-full h-[6.153vw] xs:h-[24px] gap-[10.769vw] xs:gap-[42px]">
            <label className="relative flex gap-[0.750vw] xs:gap-[3px] pl-[6.153vw] xs:pl-[24px]">
              <FormInput
                type="radio"
                checked={value === "Yes"}
                variant="radio"
                className="absolute opacity-0 pointer-events-none"
                onChange={(ev) => onChange(ev.target.value)}
                value="Yes"
              />
              <CustomStyledInput
                value={getValues("companyLabel")}
                option={"Yes"}
              />
            </label>
            <label className="relative flex gap-[0.750vw] xs:gap-[3px] pl-[6.153vw] xs:pl-[24px]">
              <FormInput
                type="radio"
                checked={value === "No"}
                variant="radio"
                className="absolute opacity-0 pointer-events-none"
                onChange={(ev) => onChange(ev.target.value)}
                value="No"
              />
              <CustomStyledInput
                value={getValues("companyLabel")}
                option={"No"}
              />
            </label>
          </div>
        )}
        name="companyLabel"
      />
      <FormError
        errors={errors}
        label={"companyLabel"}
        type={"required"}
        message={"Please make selection"}
      />
    </div>
  );
};
