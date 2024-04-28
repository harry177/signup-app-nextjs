import { cn } from "@/utils/utils";
import { CheckmarkBoxProps, FormLabelProps } from "@/types/types";

export const CheckmarkBox = ({
  errors,
  dirtyFieldsLabel,
  label,
}: CheckmarkBoxProps) => {
  return (
    <div
      className={cn("absolute  h-[24px] z-20 bg-no-repeat bg-contain", {
        "top-9 right-4 w-[24px] bg-[url('/tick-circle.svg')]":
          label !== "passwordLabel" &&
          !errors[label as keyof FormLabelProps] &&
          dirtyFieldsLabel,
        "top-3 right-14 w-[24px] bg-[url('/tick-circle.svg')]":
          label === "passwordLabel" &&
          !errors[label as keyof FormLabelProps] &&
          dirtyFieldsLabel,
      })}
    ></div>
  );
};
