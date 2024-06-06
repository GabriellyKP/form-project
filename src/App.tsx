import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { pxToRem } from "./styles/muiTheme";
import Form from "./components/Form";
import FormularioPDF from "./components/pdf";
import { useState } from "react";
import { IFormDataFields } from "./types/formDataType";

function App() {
  const isSmall = useMediaQuery("(max-width:599px)");

  const useFormProvider = useForm();
  const { handleSubmit, reset } = useFormProvider;
  const [generatePdf, setGeneratePdf] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormDataFields>();
  // const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  //@ts-expect-error permitir tipagem any para esse campo
  const useGeneratePdf = (data) => {
    setGeneratePdf(true);
    setFormData(data);
  };

  // const handlePdfGenerated = (url: string) => {
  //   if (downloadLinkRef.current) {
  //     downloadLinkRef.current.href = url;
  //     downloadLinkRef.current.download = "Relatório_de_Visita_Técnica.pdf";
  //     downloadLinkRef.current.click();
  //     setGeneratePdf(false);
  //   }
  // };

  return (
    <FormProvider {...useFormProvider}>
      <Box
        display="flex"
        flexDirection="column"
        gap={pxToRem(24)}
        p={isSmall ? pxToRem(10) : pxToRem(32)}
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
            Formulário de vistoria técnica - ProPosto
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
          <Button variant="outlined" onClick={() => reset()}>
            Limpar formulário
          </Button>
          <Button
            variant="contained"
            sx={{ px: pxToRem(50) }}
            onClick={handleSubmit(useGeneratePdf)}
          >
            Enviar
          </Button>
        </Card>
        {generatePdf && formData && <FormularioPDF formData={formData} />}
      </Box>
    </FormProvider>
  );
}

export default App;
