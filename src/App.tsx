import { Box, Button, Card, Typography, useMediaQuery } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { pxToRem } from "./styles/muiTheme";
import Form from "./components/Form";
import FormularioPDF from "./components/pdf";
import { useState } from "react";
import { IFormDataFields } from "./types/formDataType";
import { PDFDownloadLink } from "@react-pdf/renderer"; // Import the pdf method from React PDF

function App() {
  const isSmall = useMediaQuery("(max-width:599px)");

  const useFormProvider = useForm();
  const { handleSubmit, reset } = useFormProvider;
  const [generatePdf, setGeneratePdf] = useState<boolean>(false);
  const [formData, setFormData] = useState<IFormDataFields | undefined>(
    undefined
  );
  // const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  // const useGeneratePdf = (data) => {
  //   setGeneratePdf(true);
  //   setFormData(data);
  // };

  const handleGeneratePdf = (data: IFormDataFields) => {
    setGeneratePdf(true);
    setFormData(data);
  };

  const handleSaveAndDownload = () => {
    handleSubmit(handleGeneratePdf as any)();
  };

  const handleDownloadClick = () => {
    // Reseta o estado após o clique para voltar para "Salvar dados"
    setGeneratePdf(false);
    setFormData(undefined);
  };

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

          {generatePdf && formData ? (
            <PDFDownloadLink
              style={{ textDecoration: "none" }}
              document={<FormularioPDF formData={formData} />}
              fileName={`Relatorio_de_Visita_Tecnica_${formData.establishment_company_name}.pdf`}
            >
              {({ loading }) => (
                <Button
                  variant="contained"
                  sx={{ px: pxToRem(50) }}
                  disabled={loading}
                  onBlur={handleDownloadClick}
                >
                  {loading ? "Gerando PDF..." : "Baixar PDF"}
                </Button>
              )}
            </PDFDownloadLink>
          ) : (
            <Button
              variant="contained"
              sx={{ px: pxToRem(50) }}
              onClick={handleSaveAndDownload}
            >
              Salvar dados
            </Button>
          )}
        </Card>
        {/* {generatePdf && formData && <FormularioPDF formData={formData} />} */}
      </Box>
    </FormProvider>
  );
}

export default App;
