import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import moment from "moment";
import { translateEstablishmentDataFields } from "../../utils/translateFields";
import { useEffect, useState } from "react";
import { handleShowFile } from "../../utils/handleShowFile";
import { IFormDataFields } from "../../types/formDataType";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 10,
  },
  cover: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  coverSection: {
    fontSize: 14,
    marginBottom: 20,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  questions: {
    margin: 10,
    padding: 10,
    display: "flex",
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 16,
  },
  fieldLabel: {
    marginBottom: 10,
    fontSize: 14,
  },
  image: {
    display: "flex",
  },
});

interface FormularioPDFProps {
  formData: IFormDataFields;
}

const FormularioPDF = ({ formData }: FormularioPDFProps) => {
  const generationDate = new Date();

  const [imageUrls, setImageUrls] = useState<
    Record<string, string | ArrayBuffer | null>
  >({});

  useEffect(() => {
    const loadImages = async () => {
      const updatedImageUrls: Record<string, string | ArrayBuffer | null> = {};

      for (const key in formData) {
        if (Object.prototype.hasOwnProperty.call(formData, key)) {
          const value = formData[key as keyof typeof formData];
          if (value instanceof File) {
            handleShowFile(value, (result) => {
              if (typeof key === "string") {
                updatedImageUrls[key] = result;
                setImageUrls((prevUrls) => ({
                  ...prevUrls,
                  ...updatedImageUrls,
                }));
              }
            });
          }
        }
      }
    };

    loadImages();
  }, [formData]);

  return (
    <PDFViewer style={{ width: "100%", height: "100vh" }}>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.cover}>
            <Text
              style={{ fontSize: 24, fontWeight: "bold", marginBottom: 50 }}
            >
              ProPosto
            </Text>
            <Text style={styles.coverSection}>Relatório de visita técnica</Text>
            <Text
              style={styles.fieldLabel}
            >{`Razão social: ${formData.establishment_company_name}`}</Text>
            <Text
              style={styles.fieldLabel}
            >{`Nome fantasia: ${formData.establishment_trading_name}`}</Text>
            <Text
              style={styles.fieldLabel}
            >{`CNPJ: ${formData.establishment_cnpj}`}</Text>
            <Text
              style={styles.fieldLabel}
            >{`CEP: ${formData.establishment_cep}`}</Text>
            <Text style={{ fontSize: 14, marginTop: 30 }}>
              {moment(generationDate).format("DD/MM/YYYY")}
            </Text>
          </View>

          <Text break style={styles.sectionTitle}>
            Relatório de vistoria técnica
          </Text>
          <Text style={styles.sectionTitle}>Dados do Estabelecimento</Text>
          {Object.entries(formData).map(([fieldName, fieldValue]) => {
            // Verifica se o nome do campo começa com "establishment_"
            if (fieldName.startsWith("establishment_")) {
              return (
                <View style={styles.questions} key={fieldName}>
                  <Text style={styles.fieldLabel}>
                    {`${
                      (
                        translateEstablishmentDataFields as Record<
                          string,
                          string
                        >
                      )[fieldName]
                    }: ${fieldValue}`}
                  </Text>
                </View>
              );
            }

            // Adicione outras verificações de prefixo para outros grupos de campos aqui
            return null;
          })}

          <Text break style={styles.sectionTitle}>
            Informação técnica dos tanques
          </Text>
          {Object.entries(formData).map(([fieldName, fieldValue]) => {
            if (fieldName.startsWith("tanks_")) {
              return (
                <View style={styles.questions} key={fieldName}>
                  <Text style={styles.fieldLabel}>
                    {`${
                      (
                        translateEstablishmentDataFields as Record<
                          string,
                          string
                        >
                      )[fieldName]
                    }: ${fieldValue}`}
                  </Text>
                </View>
              );
            }

            return null;
          })}

          {imageUrls.file && (
            <Image
              style={styles.image}
              src={
                typeof imageUrls.file === "string" ? imageUrls.file : undefined
              }
            />
          )}
          <Text
            style={{ fontSize: 10, marginBottom: 5 }}
            render={({ pageNumber, totalPages }) =>
              `Página ${pageNumber} de ${totalPages}`
            }
            fixed
          />
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default FormularioPDF;
