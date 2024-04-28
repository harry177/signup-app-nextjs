import { ChangeEvent } from "react";
import { UseFormGetValues } from "react-hook-form";
import { FormLabelProps } from "@/types/types";

export const formatPhoneLabel = (event: ChangeEvent<HTMLInputElement>, getValues: UseFormGetValues<FormLabelProps>) => {
    const inputValue = event.target.value;
    const cleanedValue = inputValue.replace(/\D/g, "");
    const template = "+_(___)__-___-___";
    let formattedValue = "";

    if (inputValue.length < getValues("phoneLabel").length) {
      formattedValue = inputValue;
    } else {
      let digitIndex = 0;
      for (let i = 0; i < template.length; i++) {
        if (template[i] === "_") {
          if (digitIndex < cleanedValue.length) {
            formattedValue += cleanedValue[digitIndex];
            digitIndex++;
          } else {
            break;
          }
        } else {
          formattedValue += template[i];
        }
      }
    }
    return formattedValue;
}