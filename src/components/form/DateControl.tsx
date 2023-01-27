import { useController } from "react-hook-form";
import React from "react";
import {
  FormHelperText,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Moment } from "moment";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
interface Props {
  control: any;
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  inputAdornment?: JSX.Element;
  minDate?: Moment;
  maxDate?: Moment;
  [x: string]: any;
}
const DateControl: React.FC<Props> = ({
  name,
  control,
  label,
  type,
  inputAdornment,
  minDate,
  maxDate,
  ...rest
}: Props) => {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  const handleChange = (newValue: Moment | null) => {
    onChange(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DesktopDatePicker
        label={label || name}
        inputFormat="DD.MM.YYYY"
        value={value}
        onChange={handleChange}
        minDate={minDate}
        maxDate={maxDate}
        renderInput={(params) => (
          <TextField {...params} variant={"standard"} error={invalid} />
        )}
      />
      <FormHelperText>{error && error.message}</FormHelperText>
    </LocalizationProvider>
  );
};
export default DateControl;
