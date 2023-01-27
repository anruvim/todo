import { useController } from "react-hook-form";
import React from "react";
import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  FormHelperText,
} from "@mui/material";

interface Props {
  control: any;
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  inputAdornment?: JSX.Element;
  [x: string]: any;
}
const InputControl: React.FC<Props> = ({
  name,
  control,
  label,
  type,
  inputAdornment,
  ...rest
}: Props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });

  return (
    <FormControl error={invalid} variant={"standard"}>
      <InputLabel htmlFor="my-input">{label || name}</InputLabel>
      <Input
        onChange={(val: any) => onChange(val)}
        defaultValue={value}
        value={value}
        type={type}
        startAdornment={
          <InputAdornment position="start">{inputAdornment}</InputAdornment>
        }
        {...rest}
      />
      <FormHelperText id="my-helper-text">
        {error && error.message}
      </FormHelperText>
    </FormControl>
  );
};
export default InputControl;
