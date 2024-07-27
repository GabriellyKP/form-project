import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface OilChangePDFProps {
  formData: any;
  imageUrls: any;
}

export const OilChangePDF = ({ formData, imageUrls }: OilChangePDFProps) => {
  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      padding: 40,
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
  });

  return (
    <>
      <Text break style={styles.sectionTitle}>
        Troca de óleo
      </Text>

      <View style={styles.questions}>
        <Text style={styles.sectionSubtitle}>{"Localização da área"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_area_location_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.oilChange_area_location_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.oilChange_area_location_file && (
          <Image
            style={styles.image}
            src={imageUrls?.oilChange_area_location_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Pertencente ao empreendimento"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_paving_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.oilChange_company_belong_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.oilChange_company_belong_file && (
          <Image
            style={styles.image}
            src={imageUrls?.oilChange_company_belong_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Pavimentação"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_coverage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${formData?.oilChange_paving_status || "Não informado"}`}
        </Text>
        {imageUrls?.oilChange_paving_file && (
          <Image
            style={styles.image}
            src={imageUrls?.oilChange_paving_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Cobertura"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.oilChange_covering_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.oilChange_covering_file && (
          <Image
            style={styles.image}
            src={imageUrls?.oilChange_covering_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Sistema de drenagem oleosa"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.oilChange_oily_drainage_system_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.oilChange_oily_drainage_system_file && (
          <Image
            style={styles.image}
            src={imageUrls?.oilChange_oily_drainage_system_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Sistema de troca de óleo"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Tipo: ${
            formData?.oilChange_oil_change_system_type || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.oilChange_oily_drainage_system_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.oilChange_oily_drainage_system_file && (
          <Image
            style={styles.image}
            src={imageUrls?.oilChange_oily_drainage_system_file as string}
          />
        )}
      </View>
    </>
  );
};
