import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { AutoFormFieldProps } from "@autoform/react";
import React from "react";

export const SelectField: React.FC<AutoFormFieldProps> = ({
  field,
  inputProps,
  error,
  id,
}) => {
  const fieldName = id || field.key;

  return (
    <Select
      defaultValue={inputProps.value}
      onValueChange={(value) => {
        const event = {
          target: {
            value,
            name: fieldName,
          },
        } as React.ChangeEvent<HTMLInputElement>;
        inputProps.onChange(event);
      }}
    >
      <SelectTrigger id={id} className={error ? "border-destructive" : ""}>
        <SelectValue placeholder="select one option" />
      </SelectTrigger>
      <SelectContent>
        {(field.options || []).map(([value, label]) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
