import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import NumericInput from "../../common/NumericInput";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import Fields from "./Fields";
import { pxToRem } from "../../../styles/muiTheme";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";
import Checkbox from "../../common/Checkbox";

export default function Tankage() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tankages",
  });

  const fieldsName = {
    has_tank_plate: false,
    tank_plate_file: "",
    unloading_area_file: "",
    spill_file: "",
    tank_sump_file: "",
  };

  const addTankInputs = () => {
    append(fieldsName);
  };

  const tankageAreasQuantity = useWatch({
    control,
    name: "tankage_amount_area_quantity",
  });

  const handleAddTankageAreasQuantity = async () => {
    remove();
    for (let i = 0; i < tankageAreasQuantity; i++) {
      addTankInputs();
    }
  };

  return (
    <CardContainer title="Tancagem" isShow={isShow} setIsShow={setIsShow}>
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex" gap={pxToRem(16)}>
            <NumericInput
              inputId="tankage_amount_area_quantity"
              label="Quantidade de área de tancagem (1-30)"
              placeholder="Digite a quantidade de área de tancagem"
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
              onClick={handleAddTankageAreasQuantity}
              disabled={!tankageAreasQuantity}
            >
              Adicionar
            </Button>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Pavimentação dos tanques</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="tankage_tank_paving_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="tankage_tank_paving_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Sistema de respiros dos tanques
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="tankage_tank_breather_system_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="tankage_tank_breather_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="tankage_has_pressure_and_vacuum_valve"
              label="Possui válvula de pressão e vácuo"
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Canaleta de drenagem oleosa tanques
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="tankage_oily_tank_drainage_channel_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="tankage_oily_tank_drainage_channel_file" />
          </Grid>

          {fields.map((item, index) => (
            <Fields key={item.id} index={index} />
          ))}
        </>
      )}
    </CardContainer>
  );
}
