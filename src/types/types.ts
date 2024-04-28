import { FieldErrors, UseFormGetValues } from "react-hook-form";

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
  label: string;
  type: string;
  message: string;
}

export interface CheckmarkBoxProps {
  errors: FieldErrors<FormLabelProps>;
  dirtyFieldsLabel: boolean | undefined;
  label: string;
}

export interface CustomStyledInputProps {
  value: string;
  option: string;
}
