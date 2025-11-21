import React, { ChangeEvent } from "react";
import { Textarea, TextareaProps } from "../ui/textarea";
import { AdditionalFormikProps } from "@/interfaces/common.interface";
import { Label } from "../ui/label";
import { twMerge } from "tailwind-merge";
import { get, isString } from "lodash";

interface TextareaFieldProps extends TextareaProps {
  label?: string | React.ReactNode;
  required?: boolean;
  classNameLabel?: string;
  classNameContainer?: string;
  helperText?: string | React.ReactNode;
  afterOnChange?: (e: ChangeEvent) => void;
}

const TextareaField = (props: TextareaFieldProps & AdditionalFormikProps) => {
  const {
    label,
    classNameLabel,
    classNameContainer,
    form,
    field,
    className,
    required,
    helperText,
    ...restPropsTextarea
  } = props;
  const { name, onBlur, onChange, value } = field;
  const { errors, touched } = form;

  const msgError = get(touched, name) && (get(errors, name) as string);

  const onHandleChange = (e: ChangeEvent) => {
    onChange(e);
    props?.afterOnChange && props?.afterOnChange(e);
  };

  return (
    <div
      className={twMerge(
        "grid w-full items-center gap-1.5",
        classNameContainer
      )}
    >
      {label && (
        <div className="label">
          <Label
            htmlFor={name}
            className={twMerge("mb-1", required && "required", classNameLabel)}
          >
            {label}
          </Label>
        </div>
      )}
      <Textarea
        name={name}
        onBlur={onBlur}
        onChange={onHandleChange}
        value={value}
        id={name}
        className={twMerge(className, msgError && "border-red-500")}
        {...restPropsTextarea}
      />
      {helperText && (
        <span className="text-[13px] text-muted-foreground">{helperText}</span>
      )}
      {isString(msgError) && <span className="text-red-500 text-sm">{msgError}</span>}
    </div>
  );
};

export default TextareaField;

