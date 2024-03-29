import { FormHelperText, TextField, TextFieldProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import get from "lodash/get";
import { NumericFormat, NumericFormatProps } from "react-number-format";

interface NumericInputProps extends NumericFormatProps<TextFieldProps> {
  inputId: string;
}

export default function NumericInput({ inputId, ...rest }: NumericInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const hasError = Boolean(get(errors, inputId));

  return (
    <Controller
      name={inputId}
      control={control}
      render={({ field: { ref, onChange, value = "", onBlur } }) => {
        return (
          <NumericFormat
            id={inputId}
            value={value}
            onChange={onChange}
            decimalScale={0}
            allowNegative={false}
            customInput={TextField}
            InputLabelProps={{ shrink: true }}
            fullWidth
            onBlur={onBlur}
            {...(hasError && {
              helperText: (
                <FormHelperText sx={{ m: 0 }}>
                  {String(get(errors, `${[inputId]}.message`))}
                </FormHelperText>
              ),
              error: true,
            })}
            inputRef={ref}
            {...rest}
          />
        );
      }}
    />
  );
}
