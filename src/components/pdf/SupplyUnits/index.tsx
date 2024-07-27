import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface SupplyUnitsPDFProps {
  formData: any;
  imageUrls: any;
}

export const SupplyUnitsPDF = ({
  formData,
  imageUrls,
}: SupplyUnitsPDFProps) => {
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
        Unidades abastecedoras
      </Text>

      <View style={styles.questions}>
        <Text style={styles.sectionSubtitle}>
          {"Pavimentação da pista de abastecimento"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_area_location_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.supply_units_paving_the_supply_lane_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.supply_units_paving_the_supply_lane_file && (
          <Image
            style={styles.image}
            src={imageUrls?.supply_units_paving_the_supply_lane_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Canaleta de drenagem oleosa da pista"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_paving_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.supply_units_track_oily_drainage_channel_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.supply_units_track_oily_drainage_channel_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.supply_units_track_oily_drainage_channel_file as string
            }
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Cobertura da pista (calhas) sistema de drenagem pluvial"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_coverage_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.supply_units_rainwater_drainage_system_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.supply_units_rainwater_drainage_system_file && (
          <Image
            style={styles.image}
            src={
              imageUrls?.supply_units_rainwater_drainage_system_file as string
            }
          />
        )}

        <Text
          style={styles.sectionTitle}
        >{`Quantidade de bombas de abastecimento:  ${
          formData.supply_units_quantity || "Não informado"
        }`}</Text>
        {formData.supply_units?.map((item: any, index: number) => (
          <View
            style={styles.questions}
            key={`inspection_supply_pump-${index}`}
          >
            <Text style={styles.sectionTitle}>{`Bomba de abastecimento ${
              index + 1
            }`}</Text>

            <Text style={styles.sectionSubtitle}>
              {"Bomba de abastecimento"}
            </Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${formData?.supply_pump_status || "Não informado"}`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.supply_pump_file))}
            />

            <Text style={styles.sectionSubtitle}>{"Estrutura da bomba"}</Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${
                formData?.pump_structure_status || "Não informado"
              }`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.pump_structure_file))}
            />

            <Text style={styles.sectionSubtitle}>{"Sump da bomba"}</Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${formData?.pump_sump_status || "Não informado"}`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.pump_sump_file))}
            />

            <Text style={styles.sectionSubtitle}>
              {"Estancagem aparente do sump"}
            </Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${
                formData?.watertightness_of_the_sump_status || "Não informado"
              }`}
            </Text>
            <Image
              style={styles.image}
              src={String(
                URL.createObjectURL(item?.watertightness_of_the_sump_file)
              )}
            />

            <Text style={styles.sectionSubtitle}>{"Limpeza do sump"}</Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${formData?.sump_cleaning_status || "Não informado"}`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.sump_cleaning_file))}
            />

            <Text style={styles.sectionSubtitle}>
              {"Sensor de presença de líquidos no sump"}
            </Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${
                formData?.liquid_presence_sensor_status || "Não informado"
              }`}
            </Text>
            <Image
              style={styles.image}
              src={String(
                URL.createObjectURL(item?.liquid_presence_sensor_file)
              )}
            />
          </View>
        ))}
      </View>
    </>
  );
};
