import { useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";
import Checkbox from "../../common/Checkbox";
import { useFormContext } from "react-hook-form";

export default function Washing() {
  const { watch } = useFormContext();

  const [isShow, setIsShow] = useState<boolean>(true);
  const hasOwnSaoBox = watch("washing_has_own_SAO_box");

  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  const vehicleOptions = [
    "Veículos pesados e leves",
    "Veículos pesados",
    "Veículos leves",
  ];

  const washingSystemOptions = ["Rampa", "Vala"];

  const reuseOfWashingEffluentOptions = ["Total", "Parcial", "Não reutiliza"];

  return (
    <CardContainer title="Lavação" isShow={isShow} setIsShow={setIsShow}>
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Localização da área</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_area_location_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="washing_area_location_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Pertencente ao empreendimento
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_belonging_enterprise_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="washing_belonging_enterprise_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Pavimentação</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_paving_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="washing_paving_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Cobertura</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_coverage_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="washing_coverage_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Sistema de drenagem oleosa</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_oily_drainage_system_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="washing_oily_drainage_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Checkbox
              inputId="washing_has_own_SAO_box"
              label="Caixa SAO própria?"
            />
          </Grid>

          {hasOwnSaoBox && (
            <>
              <Grid item lg={12} sm={12} xs={12} display="flex">
                <Typography variant="body1">Caixa SAO própria</Typography>
              </Grid>

              <Grid item lg={6} sm={12} xs={12} display="flex">
                <Autocomplete
                  inputId="washing_own_SAO_box_status"
                  label="Situação"
                  options={statusOptions}
                />
              </Grid>

              <Grid item lg={6} sm={12} xs={12} display="flex">
                <FileUploadInput inputId="washing_own_SAO_box_file" />
              </Grid>
            </>
          )}

          <Grid item lg={12} sm={12} xs={12}>
            <Divider />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_washing_system"
              label="Sistema de lavação"
              options={washingSystemOptions}
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_vehicle"
              label="Veículos predominante"
              options={vehicleOptions}
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="washing_reuse_of_washing_effluent"
              label="Reutilização do efluente da lavação"
              options={reuseOfWashingEffluentOptions}
            />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
