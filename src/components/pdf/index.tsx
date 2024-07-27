import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import moment from "moment";
import "moment/locale/pt-br";
import {
  translateEstablishmentDataFields,
  translateSupplyPumpsFields,
  translateTankTechnicalInformationFields,
} from "../../utils/translateFields";
import { useEffect, useState } from "react";
import { handleShowFile } from "../../utils/handleShowFile";
import { IFormDataFields } from "../../types/formDataType";
import { WasteStorageAndManagementPDF } from "./WasteStorageAndManagement";
import { InspectionDataPDF } from "./InspectionData";
import { WaterAndOilSeparatorBoxPDF } from "./WaterAndOilSeparatorBox";
import { SupplyUnitsPDF } from "./SupplyUnits";
import { OilChangePDF } from "./OilChange";
import { WashingPDF } from "./Washing";
import { TankagePDF } from "./Tankage";

// Register Times New Roman font
Font.register({
  family: "Times New Roman",
  src: "https://fonts.cdnfonts.com/s/19837/Times-New-Roman.woff",
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
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
    padding: 8,
    display: "flex",
    flexDirection: "column",
  },
  sectionTitle: {
    padding: 8,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  sectionSubtitle: {
    padding: 8,
    marginBottom: 20,
    marginTop: 20,
    fontSize: 14,
    fontWeight: "bold",
  },
  fieldLabel: {
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 1.5,
  },
  text: {
    fontSize: 12,
    lineHeight: 1.5,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "contain",
  },
  footer: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: "center",
    position: "absolute",
    bottom: 0,
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
      const imagePromises = Object.entries(formData).map(
        async ([key, value]) => {
          if (value instanceof File) {
            return new Promise<[string, string | ArrayBuffer | null]>(
              (resolve) => {
                handleShowFile(value, (result) => resolve([key, result]));
              }
            );
          }
          return [key, null];
        }
      );

      const results = await Promise.all(imagePromises);
      const updatedImageUrls = results.reduce((acc, [key, result]) => {
        if (result && key) {
          acc[key] = result;
        }
        return acc;
      }, {} as Record<string, string | ArrayBuffer | null>);

      setImageUrls(updatedImageUrls);
    };

    loadImages();
  }, [formData]);
  const renderField = (
    fieldName: string,
    fieldValue: any,
    translator: Record<string, string>
  ) => (
    <Text style={styles.fieldLabel}>
      {`${translator[fieldName] || fieldName}: ${
        typeof fieldValue === "boolean"
          ? fieldValue
            ? "Sim"
            : "Não"
          : fieldValue || "Não informado"
      }`}
    </Text>
  );

  const renderSection = (
    title: string,
    filterKey: string,
    translator: Record<string, string>
  ) => (
    <>
      <Text break style={styles.sectionTitle}>
        {title}
      </Text>
      {Object.entries(formData).map(([fieldName, fieldValue]) =>
        fieldName.startsWith(filterKey)
          ? renderField(fieldName, fieldValue, translator)
          : null
      )}
    </>
  );
  console.log(formData);
  console.log(imageUrls);
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.cover}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 50,
              textAlign: "center",
            }}
          >
            ProPosto
          </Text>
          <Text style={styles.coverSection}>Relatório de visita técnica</Text>
          {renderField(
            "establishment_company_name",
            formData.establishment_company_name,
            translateEstablishmentDataFields
          )}
          {renderField(
            "establishment_trading_name",
            formData.establishment_trading_name,
            translateEstablishmentDataFields
          )}
          {renderField(
            "establishment_cnpj",
            formData.establishment_cnpj,
            translateEstablishmentDataFields
          )}
          {renderField(
            "establishment_cep",
            formData.establishment_cep,
            translateEstablishmentDataFields
          )}
          <Text style={{ fontSize: 12, marginTop: 30 }}>
            {moment(generationDate).format("DD/MM/YYYY")}
          </Text>
        </View>

        {renderSection(
          "Dados do Estabelecimento",
          "establishment_",
          translateEstablishmentDataFields
        )}

        <Text break style={styles.sectionTitle}>
          Informação técnica dos tanques
        </Text>
        <Text style={styles.sectionTitle}>{`Quantidade de tanques:  ${
          formData.tanks_quantity || "Não informado"
        }`}</Text>
        {formData.tanks?.map((item, index) => (
          <View style={styles.questions} key={`tank-${index}`}>
            <Text style={styles.sectionTitle}>{`Tanque ${index + 1}`}</Text>
            <View style={styles.questions}>
              {Object.entries(item).map(([name, value]) =>
                renderField(
                  name,
                  value,
                  translateTankTechnicalInformationFields
                )
              )}
            </View>
          </View>
        ))}

        <Text break style={styles.sectionTitle}>
          Informações técnicas das bombas de abastecimento
        </Text>
        <Text style={styles.sectionTitle}>{`Quantidade de bombas:  ${
          formData.supply_pumps_quantity || "Não informado"
        }`}</Text>
        {formData.supply_pumps?.map((item, index) => (
          <View style={styles.questions} key={`supply_pump-${index}`}>
            <Text style={styles.sectionTitle}>{`Bomba ${index + 1}`}</Text>
            <View style={styles.questions}>
              {Object.entries(item).map(([name, value]) =>
                renderField(name, value, translateSupplyPumpsFields)
              )}
            </View>
          </View>
        ))}

        <InspectionDataPDF formData={formData} imageUrls={imageUrls} />

        <TankagePDF formData={formData} imageUrls={imageUrls} />

        <SupplyUnitsPDF formData={formData} imageUrls={imageUrls} />

        <OilChangePDF formData={formData} imageUrls={imageUrls} />

        <WashingPDF formData={formData} imageUrls={imageUrls} />

        <WaterAndOilSeparatorBoxPDF formData={formData} imageUrls={imageUrls} />

        <WasteStorageAndManagementPDF
          formData={formData}
          imageUrls={imageUrls}
        />

        <Text
          style={styles.footer}
          render={({ pageNumber, totalPages }) => `${pageNumber}/${totalPages}`}
          fixed
        />
      </Page>
    </Document>
  );
};

export default FormularioPDF;
