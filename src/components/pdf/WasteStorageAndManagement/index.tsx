import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface WasteStorageAndManagementDataProps {
  formData: any;
  imageUrls: any;
}

export const WasteStorageAndManagementPDF = ({
  formData,
  imageUrls,
}: WasteStorageAndManagementDataProps) => {
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
        Armazenamento e gerenciamento de resíduos classe I e II
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
            formData?.wasteStorageAndManagement_area_location_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_area_location_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_area_location_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Pavimentação"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_paving_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_paving_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_paving_file && (
          <Image
            style={styles.image}
            src={imageUrls?.wasteStorageAndManagement_paving_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Cobertura"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_coverage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_coverage_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_coverage_file && (
          <Image
            style={styles.image}
            src={imageUrls?.wasteStorageAndManagement_coverage_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Sistema de drenagem ou contenção"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_quality_of_waste_segregation_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_quality_of_waste_segregation_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Estado de conservação do ambiente"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_environmental_conservation_status_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_environmental_conservation_status_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_environmental_conservation_status_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_environmental_conservation_status_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Qualidade de segregação dos resíduos"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_quality_of_waste_segregation_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_quality_of_waste_segregation_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_quality_of_waste_segregation_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Forma de armazenamento borra oleosa - csao"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_store_oily_sludge_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_store_oily_sludge_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_store_oily_sludge_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_store_oily_sludge_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Armazenamento de filtros"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_filter_storage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_filter_storage_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_filter_storage_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_filter_storage_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Armazenamento de estopas"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_burlap_storage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_burlap_storage_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_burlap_storage_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_burlap_storage_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Armazenamento de embalagens"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_packaging_storage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_packaging_storage_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_packaging_storage_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_packaging_storage_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Resíduos classe II"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_class_II_waste_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_class_II_waste_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_class_II_waste_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_class_II_waste_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>{"Esgoto sanitário"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_sanitary_sewage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Tipo: ${
            formData?.wasteStorageAndManagement_sanitary_sewage_type ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.wasteStorageAndManagement_sanitary_sewage_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.wasteStorageAndManagement_sanitary_sewage_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.wasteStorageAndManagement_sanitary_sewage_file as string
            }
          />
        )}
      </View>
    </>
  );
};
