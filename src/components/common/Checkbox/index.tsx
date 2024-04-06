import {
  Box,
  FormControlLabel,
  Checkbox as MuiCheckbox,
  Tooltip,
} from "@mui/material";
import { InfoOutlined } from "@mui/icons-material";

import { Controller, useFormContext } from "react-hook-form";

interface CheckboxProps {
  inputId: string;
  label: string | JSX.Element;
  textInfo?: string;
  isHidden?: boolean;
}

export default function Checkbox({
  inputId,
  label,
  textInfo,
  isHidden = false,
}: CheckboxProps) {
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
                  disabled={isHidden}
                  inputRef={ref}
                />
              }
              label={label}
            />
          </Box>
        )}
      />

      {textInfo && !isHidden && (
        <Tooltip title={textInfo} placement="top">
          <InfoOutlined color="info" />
        </Tooltip>
      )}
    </Box>
  );
}
