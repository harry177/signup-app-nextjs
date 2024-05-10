import { Controller } from "react-hook-form";
import { FormInput } from "@/components/FormInput/FormInput";
import { FormError } from "@/components/FormError/FormError";
import { CheckmarkBox } from "@/components/CheckmarkBox/CheckmarkBox";
import { EyeBox } from "@/components/EyeBox/EyeBox";
import { formatPhoneLabel } from "@/utils/formatters";
import { TextInputBlockProps } from "@/types/types";

export const TextInputBlock = ({
  control,
  rules,
  getValues,
  labelName,
  errors,
  messages,
  dirtyFieldsLabel,
  maxLength,
  placeholder,
  labelDescription,
  isMobile,
  isInputShort,
}: TextInputBlockProps) => {
  const hasError = errors.hasOwnProperty(labelName);
  return (
    <div
      className={`relative flex flex-col gap-[1.621vw] xs:gap-[6px] ${
        !isMobile && isInputShort ? "w-[211px] md:w-[219px]" : "w-full"
      }`}
    >
      <label className="h-[4.615vw] xs:h-[18px]">{labelDescription}</label>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <FormInput
            variant={hasError ? "defaultError" : "default"}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(ev) =>
              getValues
                ? onChange(formatPhoneLabel(ev, getValues))
                : onChange(ev)
            }
            value={value ? value.toString() : ""}
          />
        )}
        name={labelName}
      />
      <FormError
        errors={errors}
        label={labelName}
        type={Object.keys(rules)[0]}
        message={messages[0]}
      />
      <FormError
        errors={errors}
        label={labelName}
        type={Object.keys(rules)[1]}
        message={messages[1]}
      />
      {labelName === "passwordLabel" && <EyeBox />}
      <CheckmarkBox
        errors={errors}
        label={labelName}
        dirtyFieldsLabel={dirtyFieldsLabel}
      />
    </div>
  );
};
