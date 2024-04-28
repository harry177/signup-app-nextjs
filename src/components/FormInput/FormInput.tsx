import * as React from "react";
import { cn } from "@/utils/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva("border border-2 border-[#b1b1b1]", {
  variants: {
    variant: {
      default:
        "w-full h-[48px] rounded-[8px] indent-[14px] text-[16px] text-[#5b5b5b] caret-[#5b5b5b] placeholder:text-[16px] placeholder:text-[#b1b1b1] placeholder:hover:text-[#5b5b5b] hover:border-[#5b5b5b] focus:border-[#5b5b5b] focus:outline-none",
      defaultError:
        "w-full h-[48px] rounded-[8px] indent-[14px] text-[16px] text-[#cf4545] caret-[#cf4545] placeholder:text-[16px] placeholder:text-[#b1b1b1] placeholder:hover:text-[#5b5b5b] hover:border-[#5b5b5b] focus:border-[#5b5b5b] focus:outline-none",
      radio: "w-[24px] h-[24px]",
      checkbox: "w-[24px] h-[24px] absolute z-50 opacity-0",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface FormInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
FormInput.displayName = "Input";

export { FormInput };
