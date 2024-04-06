import { useState } from "react";
import { Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";

export default function OilChange() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const changeOilSystemOptions = ["Rampa", "Elevador", "Vala"];
  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  return (
    <CardContainer title="Troca de óleo" isShow={isShow} setIsShow={setIsShow}>
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Localização da área</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_area_location_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="oilChange_area_location_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Pertencente ao empreendimento
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_company_belong_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="oilChange_company_belong_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Pavimentação</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_paving_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="oilChange_paving_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Cobertura</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_covering_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="oilChange_covering_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Sistema de drenagem oleosa</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_oily_drainage_system_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="oilChange_oily_drainage_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Sistema de troca de óleo</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_oil_change_system_type"
              label="Tipo"
              options={changeOilSystemOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="oilChange_oil_change_system_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="oilChange_oil_change_system_file" />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
