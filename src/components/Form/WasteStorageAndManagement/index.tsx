import { useState } from "react";
import { Grid, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";

export default function WasteStorageAndManagement() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const sanitarySewageOptions = [
    "Rede pública",
    "Fossa séptica",
    "Filtro biológico",
    "Sumidouro",
  ];
  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  return (
    <CardContainer
      title="Armazenamento e gerenciamento de resíduos classe I e II"
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
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Pavimentação</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Cobertura</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Sistema de drenagem ou contenção
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Estado de conservação do ambiente
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Qualidade de segregação dos resíduos
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Forma de armazenamento borra oleosa - csao
            </Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Armazenamento de filtros</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Armazenamento de estopas</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Armazenamento de embalagens</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Resíduos classe II</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Status"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="inspection_monitoring_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Esgoto sanitário</Typography>
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_status"
              label="Tipo"
              options={sanitarySewageOptions}
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
