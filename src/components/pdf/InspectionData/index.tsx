import { Image, StyleSheet, Text, View } from "@react-pdf/renderer";

interface WasteInspectionDataProps {
  formData: any;
  imageUrls: any;
}

export const InspectionDataPDF = ({
  formData,
  imageUrls,
}: WasteInspectionDataProps) => {
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
        {"Dados da vistoria"}
      </Text>

      <View style={styles.questions}>
        <Text style={styles.fieldLabel}>
          {`Colaborador que acompanhou a vistoria: ${
            formData?.inspection_collaborator_inspection || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Chuva durante a vistoria: ${
            formData?.inspection_raining ? "Sim" : "Não" || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Posto em operação: ${
            formData?.inspection_center_in_operation
              ? "Sim"
              : "Não" || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Primeira vistoria no empreendimento: ${
            formData?.inspection_first_inspection
              ? "Sim"
              : "Não" || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Houve alteração da fachada: ${
            formData?.inspection_changes_in_facade
              ? "Sim"
              : "Não" || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Houve alteração da placa anp: ${
            formData?.inspection_change_in_anp
              ? "Sim"
              : "Não" || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Registros de vazamentos ou queda de energia no sistema de monitoramento: ${
            formData?.inspection_leak_records || "Não informado"
          }`}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Abastecimento de água: ${
            formData?.inspection_water_supply || "Não informado"
          }`}
        </Text>
        <Text
          style={styles.sectionTitle}
        >{`Quantidade de pistas de abastecimento:  ${
          formData.inspection_supply_lane_quantity || "Não informado"
        }`}</Text>
        {formData.inspection_supply_pumps?.map((item: any, index: number) => (
          <View
            style={styles.questions}
            key={`inspection_supply_pump-${index}`}
          >
            <Text style={styles.sectionTitle}>{`Pista de abastecimento ${
              index + 1
            }`}</Text>
            <Image
              style={styles.image}
              src={String(
                URL.createObjectURL(item?.inspection_supply_lane_file)
              )}
            />
          </View>
        ))}

        <Text style={styles.sectionSubtitle}>
          {"Sistema de controle de estoque"}
        </Text>
        {imageUrls?.inspection_inventory_control_system && (
          <Image
            style={styles.image}
            src={imageUrls?.inspection_inventory_control_system as string}
          />
        )}

        <Text style={styles.sectionSubtitle}>
          {"Sistema de monitoramento intersticial e de sumps"}
        </Text>
        <Text style={styles.fieldLabel}>
          {`Situação do sistema de monitoramento intersticial e de sumps: ${
            formData?.inspection_monitoring_system_status || "Não informado"
          }`}
        </Text>
        {imageUrls?.inspection_monitoring_system_file && (
          <Image
            style={styles.image}
            src={imageUrls?.inspection_monitoring_system_file as string}
          />
        )}
      </View>
    </>
  );
};
