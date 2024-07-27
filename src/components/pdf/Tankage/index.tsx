import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface TankagePDFProps {
  formData: any;
  imageUrls: any;
}

export const TankagePDF = ({ formData, imageUrls }: TankagePDFProps) => {
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
        Tancagem
      </Text>

      <View style={styles.questions}>
        <Text style={styles.sectionSubtitle}>{"Pavimentação dos tanques"}</Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_area_location_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.tankage_tank_paving_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.tankage_tank_paving_file && (
          <Image
            style={styles.image}
            src={imageUrls?.tankage_tank_paving_file as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Sistema de respiros dos tanques"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_paving_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.tankage_tank_breather_system_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.tankage_tank_breather_system_file && (
          <Image
            style={styles.image}
            src={imageUrls?.tankage_tank_breather_system_file as string}
          />
        )}

        <Text style={styles.fieldLabel}>
          {`Possui válvula de pressão e vácuo: ${
            formData?.tankage_has_pressure_and_vacuum_valve ? "Sim" : "Não"
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

        <Text style={styles.sectionSubtitle}>
          {"Canaleta de drenagem oleosa tanques"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Observação: ${
            formData?.wasteStorageAndManagement_paving_observation ||
            "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação: ${
            formData?.tankage_oily_tank_drainage_channel_status ||
            "Não informado"
          }`}
        </Text>
        {imageUrls?.tankage_oily_tank_drainage_channel_file && (
          <Image
            style={styles.image}
            src={imageUrls?.tankage_oily_tank_drainage_channel_file as string}
          />
        )}

        <Text style={styles.sectionTitle}>{`Quantidade de área de tancagem:  ${
          formData.tankage_amount_area_quantity || "Não informado"
        }`}</Text>
        {formData.tankages?.map((item: any, index: number) => (
          <View style={styles.questions} key={`tankages-${index}`}>
            <Text style={styles.sectionTitle}>{`Área Tanque ${
              index + 1
            }`}</Text>
            <Text style={styles.fieldLabel}>
              {`Possui plaqueta do tanque: ${
                formData?.has_tank_plate ? "Sim" : "Não"
              }`}
            </Text>

            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.tank_plate_file))}
            />

            <Text style={styles.sectionSubtitle}>{"Área de descarga"}</Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${
                formData?.unloading_area_status || "Não informado"
              }`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.unloading_area_file))}
            />

            <Text style={styles.sectionSubtitle}>
              {"Spill de monitoramento do tanque"}
            </Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${formData?.spill_status || "Não informado"}`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.spill_file))}
            />

            <Text style={styles.sectionSubtitle}>{"Sump do tanque"}</Text>
            <Text style={styles.fieldLabel}>
              {`Situação: ${formData?.tank_sump_status || "Não informado"}`}
            </Text>
            <Image
              style={styles.image}
              src={String(URL.createObjectURL(item?.tank_sump_file))}
            />
          </View>
        ))}
      </View>
    </>
  );
};
