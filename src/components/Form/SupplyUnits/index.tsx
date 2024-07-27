import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import NumericInput from "../../common/NumericInput";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import Fields from "./Fields";
import { pxToRem } from "../../../styles/muiTheme";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";

export default function SupplyUnits() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "supply_units",
  });

  const fieldsName = {
    supply_pump_status: "",
    supply_pump_file: null,
    pump_structure_status: "",
    pump_structure_file: null,
    pump_sump_status: "",
    pump_sump_file: null,
    watertightness_of_the_sump_status: "",
    watertightness_of_the_sump_file: null,
    sump_cleaning_status: "",
    sump_cleaning_file: null,
    liquid_presence_sensor_status: "",
    liquid_presence_sensor_file: null,
  };

  const addSupplyUnitsInputs = () => {
    append(fieldsName);
  };

  const supplyUnitsQuantity = useWatch({
    control,
    name: "supply_units_quantity",
  });

  const handleAddSupplyUnitsQuantity = async () => {
    remove();
    for (let i = 0; i < supplyUnitsQuantity; i++) {
      addSupplyUnitsInputs();
    }
  };

  return (
    <CardContainer
      title="Unidades abastecedoras"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex" gap={pxToRem(16)}>
            <NumericInput
              inputId="supply_units_quantity"
              label="Quantidade de bombas de abastecimento (1-30)"
              placeholder="Digite a quantidade de bombas"
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
              onClick={handleAddSupplyUnitsQuantity}
              disabled={!supplyUnitsQuantity}
            >
              Adicionar
            </Button>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Pavimentação da pista de abastecimento
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="supply_units_paving_the_supply_lane_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="supply_units_paving_the_supply_lane_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Canaleta de drenagem oleosa da pista
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="supply_units_track_oily_drainage_channel_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="supply_units_track_oily_drainage_channel_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Cobertura da pista (calhas) sistema de drenagem pluvial
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="supply_units_rainwater_drainage_system_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="supply_units_rainwater_drainage_system_file" />
          </Grid>

          {fields.map((item, index) => (
            <Fields key={item.id} index={index} />
          ))}
        </>
      )}
    </CardContainer>
  );
}
