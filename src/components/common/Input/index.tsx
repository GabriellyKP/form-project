import { ReactNode, useMemo } from "react";
import {
  Box,
  Divider,
  FormHelperText,
  FormLabel,
  MenuItem,
  TextField,
  TextFieldProps,
  Tooltip,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

import get from "lodash/get";

import InputMask from "react-input-mask";
import { Controller, useFormContext } from "react-hook-form";

import { pxToRem } from "../../../styles/muiTheme";

interface InputProps
  extends Omit<
    TextFieldProps,
    "InputLabelProps" | "error" | "onChange" | "value" | "select"
  > {
  inputId: string;
  textInfo?: string | ReactNode;
  options?: { label: string; value: string }[];
  mask?: string;
  onBlurCallback?: () => void;
}

export default function Input({
  inputId,
  textInfo,
  label,
  options,
  mask,
  sx,
  onBlurCallback,
  ...rest
}: InputProps) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const hasError = Boolean(get(errors, inputId));

  const optionsSelect = useMemo(() => {
    const defaultValue = { label: "Selecione", value: " " };

    if (options) {
      return [defaultValue, ...options];
    }

    return [defaultValue];
  }, [options?.length]);

  return (
    <Box display="flex" flex={1} alignItems="center">
      <Controller
        name={inputId}
        control={control}
        render={({
          field: { onChange, value = options ? " " : "", onBlur },
        }) => {
          if (mask) {
            return (
              <InputMask
                id={inputId}
                value={value}
                onChange={onChange}
                mask={mask}
                maskPlaceholder={null}
                onBlur={() => {
                  onBlur();
                  if (typeof onBlurCallback === "function") onBlurCallback();
                }}
              >
                <TextField
                  label={label}
                  fullWidth
                  error={hasError}
                  ref={register(inputId).ref}
                  {...(hasError && {
                    helperText: (
                      <FormHelperText sx={{ m: 0 }}>
                        {String(get(errors, `${[inputId]}.message`))}
                      </FormHelperText>
                    ),
                  })}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  {...rest}
                />
              </InputMask>
            );
          } else {
            return (
              <TextField
                id={inputId}
                value={value}
                onChange={onChange}
                fullWidth
                error={hasError}
                {...(hasError && {
                  helperText: (
                    <FormHelperText sx={{ m: 0 }}>
                      {String(get(errors, `${[inputId]}.message`))}
                    </FormHelperText>
                  ),
                })}
                label={label}
                ref={register(inputId).ref}
                onBlur={() => {
                  onBlur();
                  if (typeof onBlurCallback === "function") onBlurCallback();
                }}
                {...(options &&
                  options?.length > 0 && {
                    defaultValue: optionsSelect[0].value,
                  })}
                InputLabelProps={{
                  shrink: true,
                }}
                select={options && options?.length > 0}
                sx={{
                  ...sx,
                }}
                {...rest}
              >
                {optionsSelect?.map((item, index) => {
                  if (item.value === "divider") {
                    return (
                      <MenuItem key={item.value}>
                        <Divider sx={{ mx: pxToRem(16) }} />

                        <FormLabel sx={{ ml: pxToRem(16) }}>
                          {item.label}
                        </FormLabel>
                      </MenuItem>
                    );
                  } else {
                    return (
                      <MenuItem
                        key={item.value}
                        value={item.value}
                        disabled={!index}
                      >
                        {item.label}
                      </MenuItem>
                    );
                  }
                })}
              </TextField>
            );
          }
        }}
      />

      {!rest.disabled && textInfo && (
        <Tooltip title={textInfo} placement="top">
          <InfoOutlined color="info" sx={{ ml: pxToRem(8) }} />
        </Tooltip>
      )}
    </Box>
  );
}
