import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface WaterAndOilSeparatorBoxPDFProps {
  formData: any;
  imageUrls: any;
}

export const WaterAndOilSeparatorBoxPDF = ({
  formData,
  imageUrls,
}: WaterAndOilSeparatorBoxPDFProps) => {
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
        CSAO - caixa separadora de água e óleo
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
            formData?.waterAndOilSeparatorBox_area_location_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.waterAndOilSeparatorBox_area_location_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.waterAndOilSeparatorBox_area_location_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Limpeza"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_paving_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.waterAndOilSeparatorBox_cleaning_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.waterAndOilSeparatorBox_cleaning_file && (
          <Image
            style={styles.image}
            src={imageUrls?.waterAndOilSeparatorBox_cleaning_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Estrutura"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_coverage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.waterAndOilSeparatorBox_structure_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.waterAndOilSeparatorBox_structure_file && (
          <Image
            style={styles.image}
            src={imageUrls?.waterAndOilSeparatorBox_structure_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Estancagem aparente"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.waterAndOilSeparatorBox_apparent_stagnation_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.waterAndOilSeparatorBox_apparent_stagnation_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.waterAndOilSeparatorBox_apparent_stagnation_file as string
            }
          />
        )}
      </View>
    </>
  );
};
