import { cn } from "@/utils/utils";
import { CustomStyledInputProps } from "@/types/types";

export const CustomStyledInput = ({
  value,
  option,
}: CustomStyledInputProps) => {
  const finalRadioStyle = cn(
    "w-[30px] text-end",
    value === option &&
      "after:absolute after:content-[''] after:top-[8px] after:left-[8px] after:w-[8px] after:h-[8px] after:rounded-full after:bg-[#62c991]",
    "before:absolute before:content-[''] before:top-0 before:left-0 before:w-[24px] before:h-[24px] before:border before:border-[2px] before:border-[#b1b1b1] before:rounded-[50%] before:hover:border-[#000000]"
  );
  return <div className={finalRadioStyle}>{option}</div>;
};
