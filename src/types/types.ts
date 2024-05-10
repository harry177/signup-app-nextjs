import { Control, FieldErrors, UseFormGetValues } from "react-hook-form";

export interface FormLabelProps {
  nameLabel: string;
  surnameLabel: string;
  phoneLabel: string;
  companyLabel: string;
  addressLabel: string;
  passwordLabel: string;
  confirmLabel: boolean;
}
export interface FormErrorProps {
  errors: FieldErrors<FormLabelProps>;
  label?: string;
  type?: string;
  message?: string;
}
export interface CheckmarkBoxProps {
  errors: FieldErrors<FormLabelProps>;
  dirtyFieldsLabel: boolean | undefined;
  label: string;
}
export interface CommonInputProps {
  control: Control<FormLabelProps>;
  errors: FieldErrors<FormLabelProps>;
  getValues: UseFormGetValues<FormLabelProps>;
}

export interface TextInputBlockProps {
  control: Control<FormLabelProps>;
  rules: { required: boolean; minLength?: number; pattern?: RegExp };
  getValues?: UseFormGetValues<FormLabelProps>;
  labelName:
    | "nameLabel"
    | "surnameLabel"
    | "phoneLabel"
    | "companyLabel"
    | "addressLabel"
    | "passwordLabel"
    | "confirmLabel";
  errors: FieldErrors<FormLabelProps>;
  messages: string[];
  dirtyFieldsLabel: boolean | undefined;
  maxLength?: number;
  placeholder: string;
  labelDescription: string;
  isMobile?: boolean;
  isInputShort?: boolean;
}
export interface CustomStyledInputProps {
  value: string;
  option: string;
}
export interface FormButtonProps {
  isDisabled: boolean;
  dispatchClick: (click: boolean) => void;
}
