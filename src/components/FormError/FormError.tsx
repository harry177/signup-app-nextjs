import { FormErrorProps, FormLabelProps } from "@/types/types";

export const FormError = ({ errors, label, type, message }: FormErrorProps) => {
  return (
    errors[label as keyof FormLabelProps]?.type === type && (
      <span
        className={`text-[12px] text-[#cf4545] ${
          label === "confirmLabel" ? "mt-[15px]" : ""
        }`}
      >
        {message}
      </span>
    )
  );
};
