import React, { ChangeEvent } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
} from "@chakra-ui/react";

interface CustomInputProps {
  label?: string;
  value: string | number;
  setValue: (value: string) => void;
  placeholder: string;
  type?: "input" | "textarea" | "select";
  options?: { id: number | string; name: string }[];
  minHeight?: [string, string, string];
  isRequired?: boolean;
  useNameAsValue?: boolean;
}

export default function CustomInput({
  label,
  value,
  setValue,
  placeholder,
  type = "input",
  options = [],
  minHeight = ["30px", "70px", "160px"],
  isRequired = true,
  useNameAsValue = false,
}: CustomInputProps) {
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValue(e.target.value);
  };

  const InputComponent =
    type === "textarea" ? Textarea : type === "select" ? Select : Input;

  return (
    <FormControl display="flex" alignItems="baseline" isRequired={isRequired}>
      <FormLabel width="20%">{label}</FormLabel>
      {type !== "select" ? (
        <InputComponent
          focusBorderColor="gray.400"
          value={value}
          width="38%"
          onChange={handleChange}
          placeholder={placeholder}
          rounded={10}
          minHeight={type === "textarea" ? minHeight : ""}
        />
      ) : (
        <InputComponent
          focusBorderColor="gray.400"
          value={value}
          width="38%"
          onChange={handleChange}
          placeholder={placeholder}
          rounded={10}
        >
          {options.map((option) => (
            <option
              key={option.id}
              label={option.name}
              value={useNameAsValue ? option.name : option.id}
            >
              {option.name}
            </option>
          ))}
        </InputComponent>
      )}
    </FormControl>
  );
}
