import { Box, Button, Card, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { pxToRem } from "./styles/muiTheme";
import Form from "./components/Form";

function App() {
  const useFormProvider = useForm();

  return (
    <FormProvider {...useFormProvider}>
      <Box
        display="flex"
        flexDirection="column"
        gap={pxToRem(24)}
        p={pxToRem(32)}
      >
        <Box
          display="flex"
          width="100%"
          justifyContent="center"
          sx={{
            borderBottom: "1px solid",
            borderColor: "divider",
            mr: pxToRem(24),
            pb: pxToRem(10),
          }}
        >
          <Typography variant="h4" color="primary">
            Formulário
          </Typography>
        </Box>

        <Form />

        <Card
          sx={{
            p: pxToRem(16),
            display: "flex",
            justifyContent: "flex-end",
            gap: pxToRem(16),
          }}
        >
          <Button variant="outlined">Limpar formulário</Button>
          <Button variant="contained" sx={{ px: pxToRem(50) }}>
            Enviar
          </Button>
        </Card>
      </Box>
    </FormProvider>
  );
}

export default App;
