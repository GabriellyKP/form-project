import { useState } from "react";
import { Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";
import Checkbox from "../../common/Checkbox";
import { useFormContext, useWatch } from "react-hook-form";

export default function WaterAndOilSeparatorBox() {
  const [isShow, setIsShow] = useState<boolean>(true);
  const { control } = useFormContext();

  const hasSolidRetention = useWatch({
    control,
    name: "waterAndOilSeparatorBox_has_solids_retention",
  });

  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  return (
    <CardContainer
      title="CSAO - caixa separadora de água e óleo"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Localização da área</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Limpeza</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Estrutura</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Estancagem aparente</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="waterAndOilSeparatorBox_has_solids_retention"
              label="Possui retenção de sólidos?"
            />
          </Grid>

          {hasSolidRetention && (
            <>
              <Grid item lg={12} sm={12} xs={12} display="flex">
                <Typography variant="body1">Retenção de sólidos</Typography>
              </Grid>

              <Grid item lg={6} sm={12} xs={12} display="flex">
                <Autocomplete
                  inputId="wasteStorageAndManagement_status"
                  label="Situação"
                  options={statusOptions}
                />
              </Grid>

              <Grid item lg={6} sm={12} xs={12} display="flex">
                <FileUploadInput inputId="inspection_monitoring_system_file" />
              </Grid>
            </>
          )}
        </>
      )}
    </CardContainer>
  );
}
