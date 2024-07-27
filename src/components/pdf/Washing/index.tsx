import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface WashingPDFProps {
  formData: any;
  imageUrls: any;
}

export const WashingPDF = ({ formData, imageUrls }: WashingPDFProps) => {
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
        Lavação
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
            formData?.washing_area_location_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.washing_area_location_file && (
          <Image
            style={styles.image}
            src={imageUrls?.washing_area_location_file as string}
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
            formData?.washing_belonging_enterprise_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.washing_belonging_enterprise_file && (
          <Image
            style={styles.image}
            src={imageUrls?.washing_belonging_enterprise_file as string}
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
          {`Situação: ${formData?.washing_paving_status || "Não informado"}`}
        </Text>
        {imageUrls?.washing_paving_file && (
          <Image
            style={styles.image}
            src={imageUrls?.washing_paving_file as string}
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
          {`Situação: ${formData?.washing_coverage_status || "Não informado"}`}
        </Text>
        {imageUrls?.washing_coverage_file && (
          <Image
            style={styles.image}
            src={imageUrls?.washing_coverage_file as string}
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
            formData?.washing_oily_drainage_system_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.washing_oily_drainage_system_file && (
          <Image
            style={styles.image}
            src={imageUrls?.washing_oily_drainage_system_file as string}
          />
        )}

        {formData?.washing_has_own_SAO_box && (
          <>
            <Text style={styles.sectionSubtitle}>{"Caixa SAO própria"}</Text>
            <Text style={styles.fieldLabel}>
              {`Observação: ${
                formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
                "Não informado"
              }`}
            </Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${
                formData?.washing_own_SAO_box_status || "Não informado"
              }`}
            </Text>
            {imageUrls?.washing_own_SAO_box_file && (
              <Image
                style={styles.image}
                src={imageUrls?.washing_own_SAO_box_file as string}
              />
            )}
          </>
        )}

        <Text style={styles.fieldLabel}>
          {`Sistema de lavação: ${
            formData?.washing_washing_system || "Não informado"
          }`}
        </Text>

        <Text style={styles.fieldLabel}>
          {`Veículos predominante: ${
            formData?.washing_vehicle || "Não informado"
          }`}
        </Text>

        <Text style={styles.fieldLabel}>
          {`Reutilização do efluente da lavação: ${
            formData?.washing_reuse_of_washing_effluent || "Não informado"
          }`}
        </Text>
      </View>
    </>
  );
};
