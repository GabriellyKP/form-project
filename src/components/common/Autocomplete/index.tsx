import { ReactNode } from "react";
import {
  FormHelperText,
  Autocomplete as MuiAutocomplete,
  TextField,
  TextFieldProps,
} from "@mui/material";

import get from "lodash/get";

import { Controller, useFormContext } from "react-hook-form";

interface AutocompleteProps
  extends Omit<
    TextFieldProps,
    "InputLabelProps" | "error" | "value" | "select"
  > {
  inputId: string;
  options: string[];
  label?: string;
  required?: boolean;
  popupIcon?: ReactNode;
}

export default function Autocomplete({
  inputId,
  options,
  label,
  required,
  popupIcon,
  ...rest
}: AutocompleteProps) {
  const {
    control,
    clearErrors,
    formState: { errors },
    register,
  } = useFormContext();

  const hasError = Boolean(get(errors, `${inputId}.value`));

  return (
    <Controller
      name={inputId}
      control={control}
      render={({ field: { onBlur, onChange, value = "" } }) => (
        <MuiAutocomplete
          id={inputId}
          value={value}
          onChange={(_, data) => {
            onChange(data);
            clearErrors(inputId);
          }}
          options={options}
          onBlur={onBlur}
          ref={register(inputId)?.ref}
          popupIcon={popupIcon}
          fullWidth
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              InputLabelProps={{ shrink: true }}
              required={required}
              error={hasError}
              {...(hasError && {
                helperText: (
                  <FormHelperText sx={{ m: 0 }}>
                    {String(get(errors, `${[inputId]}.value.message`))}
                  </FormHelperText>
                ),
              })}
              {...rest}
            />
          )}
          sx={{ "& .MuiAutocomplete-clearIndicator": { display: "none" } }}
        />
      )}
    />
  );
}
