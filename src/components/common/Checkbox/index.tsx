import { Box, FormControlLabel, Checkbox as MuiCheckbox } from "@mui/material";

import { Controller, useFormContext } from "react-hook-form";

interface CheckboxProps {
  inputId: string;
  label: string | JSX.Element;
}

export default function Checkbox({ inputId, label }: CheckboxProps) {
  const { control } = useFormContext();

  return (
    <Box display="flex" alignItems="center">
      <Controller
        name={inputId}
        control={control}
        render={({ field: { ref, onChange, value = false } }) => (
          <Box display="flex" alignItems="center">
            <FormControlLabel
              control={
                <MuiCheckbox
                  id={inputId}
                  checked={value}
                  onChange={onChange}
                  inputRef={ref}
                />
              }
              label={label}
            />
          </Box>
        )}
      />
    </Box>
  );
}
