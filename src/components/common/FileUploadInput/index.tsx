import { Box, Button, Typography, styled } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { pxToRem } from "../../../styles/muiTheme";

interface FileUploadInputProps {
  inputId: string;
}

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileUploadInput({ inputId }: FileUploadInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={inputId}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Box display="flex" gap={pxToRem(16)} alignItems="center">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUploadIcon />}
          >
            Selecionar arquivo
            <VisuallyHiddenInput
              type="file"
              onChange={(e) => {
                onChange(e?.target?.files && e.target.files[0]);
              }}
            />
          </Button>
          <Typography>
            {value ? value.name : "Nenhum arquivo selecionado"}
          </Typography>
        </Box>
      )}
    />
  );
}
