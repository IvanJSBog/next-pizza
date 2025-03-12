"use client";
import React from "react";
import { Input } from "@/shared/components/ui";
import { ErrorText } from "@/shared/components/shared/error-text";
import { ClearButton } from "@/shared/components/shared/clear-button";
import { useFormContext } from "react-hook-form";

interface Props extends React.HTMLProps<HTMLInputElement> {
  name: string;
  label?: string;
  required?: boolean;
  className?: string;
}

export const FormInput: React.FC<Props> = ({
  className,
  required,
  name,
  label,
  ...props
}) => {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();

  const value = watch(name);
  const errorText = errors[name]?.message as string;

  const onClickClear = () => {
    setValue(name, "", { shouldValidate: true });
  };

  return (
    <div className={className}>
      {label && (
        <label htmlFor={name} className="font-medium mb-2">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <Input
          id={name}
          className="h-12 text-md"
          {...register(name)}
          {...props}
        />
        {value && <ClearButton onClick={onClickClear} />}
      </div>
      {errorText && <ErrorText text={errorText} className="mt-2" />}
    </div>
  );
};
