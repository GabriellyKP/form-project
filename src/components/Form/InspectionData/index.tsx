import { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import FileUploadInput from "../../common/FileUploadInput";
import Input from "../../common/Input";
import Checkbox from "../../common/Checkbox";
import { pxToRem } from "../../../styles/muiTheme";
import NumericInput from "../../common/NumericInput";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import Fields from "./Fields";
import Autocomplete from "../../common/Autocomplete";

export default function InspectionData() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const { control, setValue } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "inspection_supply_pumps",
  });

  const fieldsName = {
    inspection_supply_lane_file: null,
  };

  const addSupplyPumpsInputs = () => {
    append(fieldsName);
  };

  const supplyLaneQuantity = useWatch({
    control,
    name: "inspection_supply_lane_quantity",
  });

  const handleAddSupplyLaneQuantity = async () => {
    remove();
    for (let i = 0; i < supplyLaneQuantity; i++) {
      addSupplyPumpsInputs();
    }
  };

  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];
  const waterSupplyOptions = [
    "Rede pública",
    "Poço tubular profundo",
    "Poço caçimba",
    "Corpo hídrico",
    "Mina",
    "Outorga",
    "Outro",
  ];

  useEffect(() => {
    setValue("inspection_raining", false);
    setValue("inspection_center_in_operation", false);
    setValue("inspection_first_inspection", false);
    setValue("inspection_changes_in_facade", false);
    setValue("inspection_change_in_anp", false);
  }, []);

  return (
    <CardContainer
      title="Dados da vistoria"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="inspection_collaborator_inspection"
              label="Colaborador que acompanhou a vistoria"
              placeholder="Digite o nome do colaborador"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="inspection_raining"
              label="Chuva durante a vistoria"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="inspection_center_in_operation"
              label="Posto em operação"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="inspection_first_inspection"
              label="Primeira vistoria no empreendimento"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="inspection_changes_in_facade"
              label="Houve alteração da fachada"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="inspection_change_in_anp"
              label="Houve alteração da placa anp"
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="inspection_leak_records"
              label="Registros de vazamentos ou queda de energia no sistema de monitoramento"
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="inspection_monitorin_system_operation_extract"
              label="Extrato de operação do sistema de monitoramento"
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="inspection_water_supply"
              label="Abastecimento de água"
              options={waterSupplyOptions}
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex" gap={pxToRem(16)}>
            <NumericInput
              inputId="inspection_supply_lane_quantity"
              label="Quantidade de pistas de abastecimento (1-30)"
              placeholder="Digite a quantidade de pistas"
              isAllowed={(values) => {
                const { formattedValue, floatValue } = values;
                if (floatValue == null) {
                  return formattedValue === "";
                } else {
                  return floatValue <= 30 && floatValue >= 1;
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddSupplyLaneQuantity}
              disabled={!supplyLaneQuantity}
            >
              Adicionar
            </Button>
          </Grid>

          {fields.map((item, index) => (
            <Fields key={item.id} index={index} />
          ))}

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Sistema de controle de estoque
            </Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_inventory_control_system" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Sistema de monitoramento intersticial e de sumps
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="inspection_monitoring_system_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
