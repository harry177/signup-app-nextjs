import { cn } from "@/utils/utils";
import { CheckmarkBoxProps, FormLabelProps } from "@/types/types";

export const CheckmarkBox = ({
  errors,
  dirtyFieldsLabel,
  label,
}: CheckmarkBoxProps) => {
  return (
    <div
      className={cn("absolute z-20 bg-no-repeat bg-contain top-[9.230vw] xs:top-9", {
        "w-[6.153vw] xs:w-[24px] h-[6.153vw] xs:h-[24px] right-[4.102vw] xs:right-4 bg-[url('/tick-circle.svg')]":
          label !== "passwordLabel" &&
          !errors[label as keyof FormLabelProps] &&
          dirtyFieldsLabel,
        "w-[6.153vw] xs:w-[24px] h-[6.153vw] xs:h-[24px] right-[14.359vw] xs:right-14 bg-[url('/tick-circle.svg')]":
          label === "passwordLabel" &&
          !errors[label as keyof FormLabelProps] &&
          dirtyFieldsLabel,
      })}
    ></div>
  );
};
